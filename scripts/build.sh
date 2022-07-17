#!/bin/bash

BASE_PATH=$(
    cd $(dirname $0)
    pwd -P
)
BASE_PATH=$(
    cd $(dirname $BASE_PATH)
    pwd -P
)

cd $BASE_PATH

npm run clean

pnpm i

npm run build

rm -rf dist

mkdir dist

cp packages/react-hook-svc/dist/react-hook-svc.umd.js dist/
cp packages/vue-hook-svc/dist/vue-hook-svc.umd.js dist/
