import fastify from 'fastify'
import routes from "./routes/router";
import {fastifyRequestContext} from "@fastify/request-context";
import {nanoid} from "nanoid";

const main = async () => {
  const app = fastify();

  // Import type schema validator
  app.register(import('@fastify/sensible'));

  // Register request context plugin
  // This works like a middleware that runs before each request
  // adding local storage to the request object
  app.register(fastifyRequestContext, {
    hook: 'onRequest',
    defaultStoreValues: {
      info: {
        idTransaction: nanoid(10),
      },
    }
  });

  // Register routes
  app.register(routes);

  try {
    // Add '0.0.0.0' as a host to resolve docker container networking issues
    await app.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server started');
  } catch (error) {
    app.log.error(error, 'Error starting server');
  }
}

main();