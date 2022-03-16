package proto

import (
	"context"
	"log"
)

type Server struct {
	UnimplementedChatServiceServer
}

func (s *Server) SayHello(ctx context.Context, msg *Message) (*Message, error) {
	log.Println("SayHello received message: ", msg.Body)
	return &Message{Body: "Life in meaningless"}, nil
}
