#!/bin/bash


pip install --upgrade pip
pip install poetry

poetry config virtualenvs.create false
poetry install --no-root
