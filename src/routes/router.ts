import healthcheck from "../controllers/healthcheck";
import {FastifyPluginAsyncTypebox} from "@fastify/type-provider-typebox";
import {HealthcheckRouteSchema} from "./schemes/healthcheck";

const router: FastifyPluginAsyncTypebox = async (app): Promise<void> => {
  // Routes
  app.get('/healthcheck', HealthcheckRouteSchema, healthcheck(app));
}

export default router;