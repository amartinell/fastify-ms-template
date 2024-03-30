import { strict as assert } from 'assert';
import axios from "axios";
import {FastifyInstance} from "fastify";

assert(process.env.TOS_HEALTHCHECK_URL, 'Please provide TOS_HEALTHCHECK_URL as environment variable');

export default (app: FastifyInstance) => async () => {

  // This is a simple healthcheck endpoint that returns the version of the application
  const healthcheck = process.env.TOS_HEALTHCHECK_URL as string;
  await axios.get(healthcheck, { timeout: 2000 }).catch((error) => {
    // Log no matter what, block everything only if error status is 502
    // logger.error(error);
    if (error?.response?.status === 502) {
      app.httpErrors.serviceUnavailable('TOS Service Unavailable');
    }
  });

  return {
    alive: true,
    version: '0.0.1',
  };
}