import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const removeAllContacts = async () => {
  const empty = [];
  fs.writeFile(PATH_DB, JSON.stringify(empty), 'utf-8')
    .then(() => console.log('Done'))
    .catch((error) => console.error(error));
};

removeAllContacts();
