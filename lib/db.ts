import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DATA_DIR = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DATA_DIR, 'mottos.db');

function getDb() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const db = new Database(DB_PATH);

  db.exec(`
    CREATE TABLE IF NOT EXISTS mottos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  const { count } = db.prepare('SELECT COUNT(*) as count FROM mottos').get() as { count: number };
  if (count === 0) {
    const envMotto = process.env.NEXT_PUBLIC_MOTTO?.trim().replace(/^"|"$/g, '').trim();
    if (envMotto) {
      db.prepare('INSERT INTO mottos (text) VALUES (?)').run(envMotto);
    }
  }

  return db;
}

export type Motto = { id: number; text: string; created_at: string };

export function getMottos(): Motto[] {
  return getDb().prepare('SELECT * FROM mottos ORDER BY created_at ASC').all() as Motto[];
}

export function addMotto(text: string) {
  getDb().prepare('INSERT INTO mottos (text) VALUES (?)').run(text.trim());
}

export function deleteMotto(id: number) {
  getDb().prepare('DELETE FROM mottos WHERE id = ?').run(id);
}
