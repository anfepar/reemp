#!/bin/bash

if ! [ -d '../GlobHack' ]; then
    echo "Creating Python env since it did not exist"
    cd ..
    python3 -m venv GlobHack
    . GlobHack/bin/activate
    python3 -m pip install -U pip
    cd -
    python3 -m pip install -r requirements.txt
fi

. ../GlobHack/bin/activate

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0:8080