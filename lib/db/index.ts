import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool, { schema });

export type User = typeof schema.users.$inferSelect;
export type Quiz = typeof schema.quizzes.$inferSelect;
export type Exam = typeof schema.exams.$inferSelect;
export type Document = typeof schema.documents.$inferSelect;
export type Announcement = typeof schema.announcements.$inferSelect;