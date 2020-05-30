#!/bin/bash

if ! [ -d '../GlobHack' ]; then
    echo "Creating Python env since it did not exist"
    cd ..
    python3 -m venv GlobHack
    source GlobHack/bin/activate
    python3 -m pip install -U pip
    cd -
    python3 -m pip install -r requirements.txt
fi

source ../GlobHack/bin/activate

python3 manage.py runserver 0:8080