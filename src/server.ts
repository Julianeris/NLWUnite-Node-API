import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { createEvent } from "./routes/create-event";
import { registerForEvet } from "./routes/register-for-event";
import { getEvent } from "./routes/get-event";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check_in";

const app = fastify()
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createEvent)
app.register(registerForEvet)
app.register(getEvent)
app.register(getAttendeeBadge)
app.register(checkIn)


app.get('/', () => {
    return 'Hello nlw unite'
})

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP Server Running!')
})