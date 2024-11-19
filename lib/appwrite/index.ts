'use server';
import { Client, Account, Databases, Storage, Avatars } from "node-appwrite";
import { appwriteConfig } from "./config";
import { cookies } from "next/headers";

export const createSessionClient = async () => {
  // Init your Web SDK
  const client = new Client();

  client
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId);

  const session = (await cookies()).get('appwrite-session');
  if (!session || !session.value) throw new Error('No session');
  client.setSession(session.value);
  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    }

  };
};

export const createAdminClient = async () => {
  // Init your Web SDK
  const client = new Client();

  client
    .setEndpoint(appwriteConfig.endpointUrl)
    .setProject(appwriteConfig.projectId).setKey(appwriteConfig.secretKey)

  return {
    get account() {
      return new Account(client);
    },
    get databases() {
      return new Databases(client);
    },
    get storage() {
      return new Storage(client);
    },
    get avatar() {
      return new Avatars(client);
    }

  };

};

export const parseStringify = async (value:unknown) => {
  return JSON.parse(JSON.stringify(value));
}