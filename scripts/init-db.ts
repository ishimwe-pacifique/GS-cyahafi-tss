import pg from 'pg';
const { Client } = pg;

const client = new Client({
  connectionString: 'postgresql://gscyahafi_db_user:fPh24aNcBAnQbnpyRNQZw8u9JPJV0CyS@dpg-d7hojuaqqhas738ll1vg-a.oregon-postgres.render.com/gscyahafi_db',
  ssl: { rejectUnauthorized: false },
});

async function createTables() {
  await client.connect();
  
  const schema = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      role VARCHAR(50) NOT NULL DEFAULT 'admin',
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS quizzes (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      link VARCHAR(500) NOT NULL,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS exams (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      link VARCHAR(500) NOT NULL,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS documents (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      file_url VARCHAR(500),
      external_link VARCHAR(500),
      category VARCHAR(100),
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS announcements (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      content TEXT NOT NULL,
      is_active BOOLEAN DEFAULT true,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    );
  `;

  try {
    await client.query(schema);
    console.log('Tables created successfully');
    
    // Insert demo admin user
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    await client.query(`
      INSERT INTO users (email, password, name, role)
      VALUES ('admin@cyahafi.ac.rw', $1, 'Administrator', 'admin')
      ON CONFLICT (email) DO NOTHING
    `, [hashedPassword]);
    console.log('Demo admin user created');
    
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await client.end();
  }
}

createTables();