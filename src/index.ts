import fastify, { FastifyInstance } from "fastify";

const server : FastifyInstance = fastify({
    logger: true,
});


server.listen({ port: 3000 }, (err, address) => {
    if (err) {
        server.log.error(err);
    }
    server.log.info(`Server listening at ${address}`);
    console.log(`Server listening at ${address}`);
})