#!/usr/bin/env bash

# Create directories for generated code
mkdir -p ./client/proto ./server/proto

# Generate Go server code
protoc --go_out=plugins=grpc:./server \
       --go_opt=paths=source_relative \
         proto/chat.proto

# Generate TypeScript client code
grpc_tools_node_protoc \
--plugin=protoc-gen-ts=./client/node_modules/.bin/protoc-gen-ts \
--ts_out=grpc_js:./client/proto \
--js_out=import_style=commonjs:./client/proto \
--grpc_out=grpc_js:./client/proto \
-I ./proto \
./proto/chat.proto