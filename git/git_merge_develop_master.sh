#!/bin/bash

git checkout develop;
git push origin develop;

git checkout master;
git merge --no-ff develop;
git push origin master;

git checkout develop;
