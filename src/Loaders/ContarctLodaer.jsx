import { getContact, getContacts } from "../contacts";

export async function getContactLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function getContactLoaders({ params }) {
  const contact = await getContact(params.id);

  if (!contact) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { contact };
}
