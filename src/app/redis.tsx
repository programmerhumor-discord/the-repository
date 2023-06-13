export const dynamic = "force-dynamic";
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import Redis from "ioredis";

export async function StoreMessage(username: string, message: string) {
    const client = new Redis(process.env.REDIS_URL!);
    console.log("[*] Connected to Redis DB!")
    
    const keys = await client.keys("*");
    keys.sort((a: string, b: string) => {
        const aKey = a;
        const bKey = b;
        if (aKey === null || bKey === null) {
            return 0;
        }
        const aKeyNumber = parseInt(aKey);
        const bKeyNumber = parseInt(bKey);
        return aKeyNumber > bKeyNumber ? 1 : -1;
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
    const client = new Redis(process.env.REDIS_URL!);
    console.log("[*] Connected to Redis DB!")

    const keys = await client.keys("*");
    // create an array of pairs [key, value]
    const pairs = await Promise.all(
    keys.map(async (key: string) => {
        const value = await client.get(key);
        return [key, value];
    })
    );

    // sort the pairs by the key
    // the keys are strings, so we need to convert them to numbers
    pairs.sort((a: (string | null)[], b: (string | null)[]) => {
        const aKey = a[0];
        const bKey = b[0];
        if (aKey === null || bKey === null) {
            return 0;
        }
        const aKeyNumber = parseInt(aKey);
        const bKeyNumber = parseInt(bKey);
        return aKeyNumber > bKeyNumber ? 1 : -1;
    });

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

        return JSON.parse(value);
    });

    // filter out null values
    return messages.filter((message: string | null) => {
        return message !== null;
    }).reverse();
}