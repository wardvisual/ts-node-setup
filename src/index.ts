import Fastify from "fastify";

const fastify = Fastify({ logger: true });

fastify.get("/", async () => {
  return { hello: "true" };
});

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await fastify.listen(PORT, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
