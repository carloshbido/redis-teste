const redis = require("redis");
const client = redis.createClient();
client.connect();

async function writeOnRedis() {
  //Escrevendo um novo registro
  const result = await client.set("lastSearch", "cursos");

  //Escrevendo um novo registro, mas com tempo de expiração em segundos
  const result2 = await client.setEx("lastSearch2", 10, "cursos2");

  console.log(result);
  console.log(result2);
}

async function readOnRedis() {
  const result = await client.get("lastSearch");
  console.log(result);
}

writeOnRedis();
readOnRedis();
