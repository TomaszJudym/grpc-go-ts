import * as grpc from "@grpc/grpc-js";

import { Message } from "./proto/chat_pb";
import { ChatServiceClient } from "./proto/chat_grpc_pb";

const client = new ChatServiceClient(
    "localhost:9000",
    grpc.credentials.createInsecure()
);

const request = new Message();
request.setBody("Body from fckn typescript client");

client.sayHello(request, (error: grpc.ServiceError | null, response: Message) => {
    if(!error) {
        console.info("Server response:", response.getBody());
    } else {
        console.error("Error:", error.message);
    }
});