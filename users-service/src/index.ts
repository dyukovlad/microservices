import { initConnection } from '#root/db/connection';
import 'reflect-metadata';

initConnection().then(() => {
  console.log(`DB connection`);
});
