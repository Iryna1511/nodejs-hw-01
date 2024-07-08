import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';
import { getAllContacts } from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  const oneContact = createFakeContact();
  await getAllContacts()
    .then((data) => [...data, oneContact])
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

addOneContact();

// export const addOneContact = async () => {
//   const oneContact = createFakeContact();
//   await fs
//     .readFile(PATH_DB, 'utf-8')
//     .then((data) => [...JSON.parse(data), oneContact])
//     .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
//     .catch((error) => console.error(error));
// };

//   const allContacts = await getAllContacts();
//   allContacts.push(oneContact);
//   const jsonContacts = JSON.stringify(allContacts, undefined, 2);
//   await fs
//     .writeFile(PATH_DB, jsonContacts)
//     .then(() => console.log('Done'))
//     .catch((error) => console.error(error));
