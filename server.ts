import express, { Express } from 'express';
import payload from 'payload';
import dotenv from 'dotenv';
import config from './src/payload.config';

dotenv.config();

const app: Express = express();

const start = async (): Promise<void> => {
  const port = process.env.PORT || 5000;
  try {
    await payload.init({
      config,
      onInit: () => {
        console.log(`✅ Payload is ready at http://localhost:${port}/admin`);
      },
    });

    app.listen(Number(port), () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('❌ Error starting server:', err);
    process.exit(1);
  }
};

start();
