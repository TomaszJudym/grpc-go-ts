// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var chat_pb = require('./chat_pb.js');

function serialize_chat_Message(arg) {
  if (!(arg instanceof chat_pb.Message)) {
    throw new Error('Expected argument of type chat.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chat_Message(buffer_arg) {
  return chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  sayHello: {
    path: '/chat.ChatService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: chat_pb.Message,
    responseType: chat_pb.Message,
    requestSerialize: serialize_chat_Message,
    requestDeserialize: deserialize_chat_Message,
    responseSerialize: serialize_chat_Message,
    responseDeserialize: deserialize_chat_Message,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
