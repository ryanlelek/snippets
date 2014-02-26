#!/bin/bash

mongodump -h host.example.com:10000 -d database -u user -p
mongorestore
