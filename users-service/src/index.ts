import { initConnection } from '#root/db/connection';
import startServer from '#root/server/startServer';
import 'reflect-metadata';

initConnection().then(() => {
  startServer();
});
