import {
  checkIn
} from "./chunk-KMKY5BOA.mjs";
import {
  createEvent
} from "./chunk-YE2R5D34.mjs";
import "./chunk-K6JGGBYF.mjs";
import {
  getAttendeeBadge
} from "./chunk-BIYTGE3E.mjs";
import {
  getEvent
} from "./chunk-C7NG5XTV.mjs";
import {
  registerForEvet
} from "./chunk-LB5O5NCW.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API construida durante a Next Level Week RocketSeat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvet);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.get("/", () => {
  return "Hello nlw unite";
});
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP Server Running!");
});
export {
  app
};
