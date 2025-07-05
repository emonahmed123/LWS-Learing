import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contacts";

export async function createContactAction() {
    const contact = await createContact();
    return { contact };
}


export async function editContactAction({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.id, updates);
    return redirect(`/contacts/${params.id}`);
}


export async function deleteContactAction({ params }) {
    throw new Error("Not implemented");
    await deleteContact(params.id);
    return redirect("/");

}