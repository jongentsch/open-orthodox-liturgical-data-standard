import fastifyStatic from '@fastify/static';
import Fastify from 'fastify';
import { fileURLToPath } from 'node:url';

const app = Fastify({ logger: true });
const webRoot = fileURLToPath(new URL('./dist', import.meta.url));

await app.register(fastifyStatic, { root: webRoot, prefix: '/', maxAge: '1d' });

app.get('/health', async () => ({ status: 'ok', service: 'oolds-research-alpha' }));

app.setNotFoundHandler((request, reply) => {
  if (request.method === 'GET' && request.headers.accept?.includes('text/html')) {
    return reply.type('text/html').sendFile('index.html', { maxAge: 0 });
  }
  return reply.code(404).send({ error: 'Not found' });
});

const port = Number.parseInt(process.env.PORT ?? '3000', 10);
const host = process.env.HOST ?? '0.0.0.0';

try {
  await app.listen({ host, port });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}
