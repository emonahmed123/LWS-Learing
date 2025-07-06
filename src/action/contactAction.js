import { redirect } from "react-router-dom";
import { createContact, deleteContact, updateContact } from "../contacts";

export async function createContactAction() {
    const contact = await createContact();

    return redirect(`/contacts/${contact.id}/edit`);

}


export async function editContactAction({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.id, updates);
    return redirect(`/contacts/${params.id}`);
}


export async function deleteContactAction({ params }) {
    // throw new Error("Not implemented");
    await deleteContact(params.id);
    return redirect("/");

}

export async function updateContactFavoriteAction({ request, params }) {
    const formData = await request.formData();
    return updateContact(params.id, {
        favorite: formData.get("favorite") === "true",
    });
}
