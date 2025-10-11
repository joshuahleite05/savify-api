import app from './app.js';
import sequelize from './config/database.js';
import { config } from './config/env.js';

async function start() {
  try {
    await sequelize.authenticate();
    console.log('Database conectado');

    await sequelize.sync();

    app.listen(config.port, () => {
      console.log(`Server rodando na porta ${config.port}`);
    });
  } catch (err) {
    console.error('Erro ao iniciar:', err);
    process.exit(1);
  }
}

start();
