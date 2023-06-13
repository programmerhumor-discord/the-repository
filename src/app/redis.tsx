import Redis from "ioredis";

export async function StoreMessage(username: string, message: string) {
    const client = new Redis("rediss://default:8dcb10f9d06b4e3696543a7dc9872e6c@eminent-pelican-36628.upstash.io:36628");
    
    const keys = await client.keys("*");
    keys.sort((a, b) => {
        return (a ?? "").localeCompare(b ?? "");
    });
    
    const latestKey = keys[keys.length - 1];
    const latestKeyNumber = parseInt(latestKey);
    
    const newKey = (latestKeyNumber + 1).toString();
    
    const value = JSON.stringify({
        username,
        message,
    });
    
    await client.set(newKey, value);
    
    return newKey;
}

export async function GetAllMessages() {
  const client = new Redis("rediss://default:8dcb10f9d06b4e3696543a7dc9872e6c@eminent-pelican-36628.upstash.io:36628");

  const keys = await client.keys("*");
  console.log(keys)
  // create an array of pairs [key, value]
  const pairs = await Promise.all(
    keys.map(async (key: string) => {
      const value = await client.get(key);
      return [key, value];
    })
  );

  console.table(pairs);

  // sort the pairs by the key
  pairs.sort((a, b) => {
    return (a[0] ?? "").localeCompare(b[0] ?? "");
  });

  console.table(pairs);

  // value is a json in the following format:
  // {
  //     username: string,
  //     api: string,
  // }
  // parse the json
  const messages = pairs.map((pair: (string | null)[]) => {
    const value = pair[1];
    if (value === null) {
      return null;
    }
    console.log(value);
    return JSON.parse(value);
  });

  console.table(messages);

  // filter out null values
  return messages.filter((message: string | null) => {
    return message !== null;
  });
}