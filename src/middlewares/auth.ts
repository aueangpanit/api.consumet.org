require('dotenv').config();

export default async function auth(request: any, reply: any) {
  const apiKey = request.headers['x-api-key'];
  const knownKey = process.env.APIKEY;

  if (!apiKey || apiKey !== knownKey) {
    return reply.code(401).send({ error: 'Unauthorized' });
  }
}
