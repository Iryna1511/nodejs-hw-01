import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';

export const getAllContacts = async () => {
  return fs
    .readFile(PATH_DB, { encoding: 'utf-8' })
    .then((data) => {
      const contacts = JSON.parse(data);
      console.log(contacts);
      return contacts;
    })
    .catch((error) => console.error(error));
};

console.log(await getAllContacts());
