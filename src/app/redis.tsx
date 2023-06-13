import { createClient, RedisClientType } from "redis";

export async function GetAllMessages() {
  const client = createClient({
    url: "redis://default:8dcb10f9d06b4e3696543a7dc9872e6c@eminent-pelican-36628.upstash.io:36628",
  });

  await client.connect();

  const keys = await client.keys("*");
  // create an array of pairs [key, value]
  const pairs = await Promise.all(
    keys.map(async (key: string) => {
      const value = await client.get(key);
      return [key, value];
    })
  );

  // sort the pairs by the key
  pairs.sort((a, b) => {
    return (a[0] ?? "").localeCompare(b[0] ?? "");
  });

  // value is a json in the following format:
  // {
  //     username: string,
  //     message: string,
  // }
  // parse the json
  const messages = pairs.map((pair: (string | null)[]) => {
    const value = pair[1];
    if (value === null) {
      return null;
    }
    return JSON.parse(value);
  });

  // filter out null values
  return messages.filter((message: string | null) => {
    return message !== null;
  });
}