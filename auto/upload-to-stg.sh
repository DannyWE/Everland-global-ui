#! /bin/bash -e

REGION_NAME="ap-southeast-2"
ASSETS_DIR=./dist/
ONE_YEAR_SECS=31536000
CACHE_CONTROL="public, max-age=${ONE_YEAR_SECS}"
BUCKET_FOLDER="www.staging.everlandglobal.com"

find ${ASSETS_DIR} -type f -exec touch '{}' \;; \
 aws s3 sync ${ASSETS_DIR} s3://{BUCKET_FOLDER}/ \
 --delete --cache-control "$CACHE_CONTROL" \
 --exclude "*index.html"
