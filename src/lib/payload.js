import { getPayload } from 'payload';
import configPromise from "@payload-config";

let cached = (global).payload;

if (!cached) {
  cached = (global).payload = {
    client: null,
    promise: null,
  };
}

export async function initPayload() {
  if (cached.client) {
    return cached.client;
  }

  if (!cached.promise) {
    cached.promise = getPayload({
      config: configPromise,
    });
  }

  try {
    cached.client = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.client;
}

export { initPayload as getPayload };
