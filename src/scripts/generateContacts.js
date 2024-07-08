import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

const generateContacts = async (number) => {
  const contacts = [];
  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }
  await getAllContacts()
    .then((data) => [...data, ...contacts])
    .then((data) => fs.writeFile(PATH_DB, JSON.stringify(data, undefined, 2)))
    .catch((error) => console.error(error));
};

generateContacts(5);
