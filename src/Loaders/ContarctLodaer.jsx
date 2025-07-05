import { getContact, getContacts } from "../contacts";

export async function getContactLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export async function getContactLoaders({ params }) {
  const contact = await getContact(params.id);
  return { contact };
}
