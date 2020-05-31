from typing import List, Tuple, Callable

import numpy as np
from django.db import models

from api.ai.DistanceFunctions import DistanceFunction, DiffDistance
from api.models import Preference, Company, Category, Sector, Product

from django.db import transaction


# def get_mapping(elements: List[models.Model], get_id_func: Callable[[models.Model], int]) -> Tuple[dict, dict]:
#     element2vector = dict()
#     vector2element = dict()
#
#     unique_ids = set()
#
#     for element in elements:
#         element_id = get_id_func(element)
#         unique_ids.add(element_id)
#
#     vector_size = len(unique_ids)
#
#     for i, element in enumerate(elements):
#         vec = np.zeros(vector_size, dtype=np.int32)
#         vec[i] = 1
#         element2vector[element] = vec
#         vector2element[]
#
#     return element2vector, vector2element

# def get_mapping_eid2vec_id(elements: List[models.Model], get_id_func: Callable[[models.Model], int]) -> Tuple[
#     dict, dict]:
#     element_id2vector_id = dict()
#     vector_id2element_id = dict()
#
#     for i, element in enumerate(elements):
#         element_id = get_id_func(element)
#         element_id2vector_id[element_id] = i
#         vector_id2element_id[i] = element_id
#
#     return element_id2vector_id, vector_id2element_id


def get_vector(element_id: int, size: int) -> np.array:
    size = max(element_id + 1, size)
    vec = np.zeros(size, dtype=np.int32)
    vec[element_id] = 1

    return vec


def get_sector_vector(sector: Sector):
    sectors = Sector.objects.order_by("id")
    sectors = [sector.id for sector in sectors]
    total = get_number_of_sectors()

    pos = sectors.index(sector.id)

    return get_vector(pos, total)


def get_category_vector(category: Category):
    categories = Category.objects.order_by("id")
    categories = [category.id for category in categories]
    total = get_number_of_categories()

    pos = categories.index(category.id)

    return get_vector(pos, total)


def get_number_of_categories() -> int:
    count = Category.objects.count()
    assert isinstance(count, int)
    return count


def get_number_of_sectors() -> int:
    count = Sector.objects.count()
    assert isinstance(count, int)
    return count


def get_vector_sizes() -> int:
    return get_number_of_categories() + get_number_of_sectors()


def get_company_vector(company: Company) -> np.array:
    sector = company.sector
    products = Product.objects.filter(company__id=company.id)
    categories = {product.category for product in products}

    r = get_sector_vector(sector)

    c = np.zeros(get_number_of_categories())
    for category in categories:
        v = get_category_vector(category)
        c += v

    r = np.concatenate((r, c))

    return r


def get_companies_vectors(companies) -> List[np.array]:
    result = []

    for company in companies:
        vec = get_company_vector(company)
        result.append(vec)

    return result


def get_product_vector(product: Product) -> np.array:
    sector = product.company.sector
    category = product.category

    r = get_sector_vector(sector)

    c = get_category_vector(category)

    return np.concatenate((r, c))


def get_products_vectors(products) -> List[np.array]:
    result = []

    for product in products:
        vec = get_product_vector(product)
        result.append(vec)

    return result


def get_preference_vector(preference: Preference) -> np.array:
    sector = preference.sector
    category = preference.category

    r = np.zeros(get_number_of_sectors())

    if sector is not None:
        r += get_sector_vector(sector)

    if category is not None:
        r = np.concatenate((r, get_category_vector(category)))
    else:
        r = np.concatenate((r, np.zeros(get_number_of_categories())))

    return r


# Summarize in a single vector
def get_preferences_vectors(preferences) -> np.array:
    result = np.zeros(get_vector_sizes())

    for preference in preferences:
        vec = get_preference_vector(preference)
        result += vec

    return result


def calculate_knn(preferences_vec: np.array, elements_vecs: List[np.array], elements,
                  distance_function: DistanceFunction, k: int):
    elems = [(vec, element) for vec, element in zip(elements_vecs, elements)]

    elems.sort(key=lambda elem: distance_function.calculate_distance(elem[0], preferences_vec))

    return [elem for vec, elem in elems[:k]]


@transaction.atomic
def get_best_company_matches_from_preference(preferences, k: int = 10):
    if preferences is None or k <= 0:
        return []

    # vector_sizes = get_vector_sizes()

    companies = Company.objects.all()
    companies_vecs = get_companies_vectors(companies)

    preferences_vecs = get_preferences_vectors(preferences)

    nearest_companies = calculate_knn(preferences_vecs, companies_vecs, companies, DiffDistance(), k)

    return nearest_companies


@transaction.atomic
def get_best_product_matches_by_preference(preferences, k: int = 10):
    if preferences is None or k <= 0:
        return []

    products = Product.objects.all()
    products_vecs = get_products_vectors(products)

    preferences_vecs = get_preferences_vectors(preferences)

    nearest_products = calculate_knn(preferences_vecs, products_vecs, products, DiffDistance(), k)

    return nearest_products
