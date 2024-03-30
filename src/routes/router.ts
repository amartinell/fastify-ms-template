import healthcheck from "../controllers/healthcheck";
import {FastifyPluginAsyncTypebox} from "@fastify/type-provider-typebox";
import {HealthcheckRouteSchema} from "./schemes/healthcheck";

const buildServer: FastifyPluginAsyncTypebox = async (app): Promise<void> => {
  app.register(import('@fastify/sensible'));

  // Registering middlewares

  // Routes
  app.get('/healthcheck', HealthcheckRouteSchema, healthcheck(app));
}

export default buildServer;