// package: chat
// file: chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as chat_pb from "./chat_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IChatServiceService_ISayHello;
}

interface IChatServiceService_ISayHello extends grpc.MethodDefinition<chat_pb.Message, chat_pb.Message> {
    path: "/chat.ChatService/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_pb.Message>;
    requestDeserialize: grpc.deserialize<chat_pb.Message>;
    responseSerialize: grpc.serialize<chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_pb.Message>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer {
    sayHello: grpc.handleUnaryCall<chat_pb.Message, chat_pb.Message>;
}

export interface IChatServiceClient {
    sayHello(request: chat_pb.Message, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
    sayHello(request: chat_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
    sayHello(request: chat_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: chat_pb.Message, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
    public sayHello(request: chat_pb.Message, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
    public sayHello(request: chat_pb.Message, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_pb.Message) => void): grpc.ClientUnaryCall;
}
