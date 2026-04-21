import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './lib/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://gscyahafi_db_user:fPh24aNcBAnQbnpyRNQZw8u9JPJV0CyS@dpg-d7hojuaqqhas738ll1vg-a.oregon-postgres.render.com/gscyahafi_db?sslmode=require',
  },
  dotenv: {
    path: '.env.local',
  },
});