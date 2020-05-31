from abc import ABC, abstractmethod
import numpy as np

class DistanceFunction(ABC):
    @abstractmethod
    def calculate_distance(self, a, b) -> float:
        pass


class DiffDistance(DistanceFunction):

    def calculate_distance(self, a, b) -> float:
        assert a.shape == b.shape
        diff = a - b
        zero = np.zeros(diff.shape)
        mx = np.maximum(diff, zero)

        dist = np.sum(mx)

        return dist