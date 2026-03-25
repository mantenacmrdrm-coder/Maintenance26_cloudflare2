// src/lib/db-d1.ts
import { D1Database } from '@cloudflare/workers-types';

export interface Env {
  DB: D1Database;
}

// Helper pour obtenir la DB depuis l'environnement Cloudflare
export const getDb = (env: Env): D1Database => {
  if (!env?.DB) {
    throw new Error('DB binding not available. Add D1 binding in Cloudflare Pages dashboard: Settings → Bindings → D1 Database');
  }
  return env.DB;
};

// Helper pour exécuter une requête (INSERT/UPDATE/DELETE)
export const runQuery = async <T = any>(db: D1Database, sql: string, params: any[] = []): Promise<T> => {
  const stmt = db.prepare(sql);
  const bound = params.length > 0 ? stmt.bind(...params) : stmt;
  return (await bound.run()) as T;
};

// Helper pour récupérer plusieurs lignes (SELECT)
export const getQuery = async <T = any>(db: D1Database, sql: string, params: any[] = []): Promise<T[]> => {
  const stmt = db.prepare(sql);
  const bound = params.length > 0 ? stmt.bind(...params) : stmt;
  const result = await bound.all();
  return result.results as T[];
};

// Helper pour récupérer une seule ligne
export const getOne = async <T = any>(db: D1Database, sql: string, params: any[] = []): Promise<T | null> => {
  const stmt = db.prepare(sql);
  const bound = params.length > 0 ? stmt.bind(...params) : stmt;
  return (await bound.first()) as T | null;
};

// Helper pour exécuter un batch de requêtes
export const runBatch = async (db: D1Database, statements: Array<{ sql: string; args: any[] }>) => {
  const batchStatements = statements.map(s => {
    const stmt = db.prepare(s.sql);
    return s.args?.length ? stmt.bind(...s.args) : stmt;
  });
  return await db.batch(batchStatements);
};

// Wrapper pour les opérations DB (remplace withDb)
export const withDb = async <T>(env: Env, operation: (db: D1Database) => Promise<T>): Promise<T> => {
  const db = getDb(env);
  return await operation(db);
};