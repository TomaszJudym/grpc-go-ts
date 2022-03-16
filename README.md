# Minimal gRPC TS and Go example

### Dependencies

* go1.16+
* tsc 4.5.5+
* protoc-gen-go
* grpc_tools_node_protoc

### Setup

```
./generate_protos.sh
```

### Running

* Run server in server dir:
```
go run main.go
```
Server will serve on port ```:9000```

* Run client in client dir:
```
npx ts-node client.ts
```

## References
[TS article](https://www.giac.cc/posts/grpc-static-code-typescript/)

## License

[WTFPL](http://www.wtfpl.net/)
