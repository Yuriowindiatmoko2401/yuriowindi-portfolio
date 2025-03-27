import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { buildConfig } from "payload";
import { Posts } from "./src/app/collections/Posts";
import { Users } from "./src/app/collections/Users";

const serverURL = process.env.NODE_ENV === 'production' 
  ? 'https://yuriowindi-portfolio.vercel.app'
  : 'http://localhost:3000';

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Posts, Users],
  secret: process.env.PAYLOAD_SECRET || "",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 10,
    },
  }),
  serverURL: serverURL,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Portfolio Admin',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  cors: [
    serverURL,
    'http://localhost:3000',
    'https://yuriowindi-portfolio.vercel.app',
  ],
  csrf: [
    serverURL,
    'http://localhost:3000',
    'https://yuriowindi-portfolio.vercel.app',
  ],
  typescript: {
    outputFile: "payload-types.ts",
  },
  sharp,
});
