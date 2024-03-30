import fastify from 'fastify'
import routes from "./routes/router";

const main = async () => {
  const app = fastify();
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