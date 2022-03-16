package main

import (
	"log"
	"net"

	"github.com/tomaszjudym/grpc-go/proto"
	"google.golang.org/grpc"
)

const port = ":9000"

func main() {
	listener, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen on port %s: %v", port, err)
	}

	grpcServer := grpc.NewServer()
	proto.RegisterChatServiceServer(grpcServer, &proto.Server{})

	log.Println("Serving listener...")
	log.Fatal(grpcServer.Serve(listener))
}
