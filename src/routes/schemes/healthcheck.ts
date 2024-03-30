import {Type} from "@sinclair/typebox";

const Healthcheck200ResponseSchema = Type.Object({
  alive: Type.Boolean(),
  version: Type.String(),
});

export const HealthcheckRouteSchema = {
  schema: {
    response: {
      200: Healthcheck200ResponseSchema
    }
  },
  beforeHandler: [],
}