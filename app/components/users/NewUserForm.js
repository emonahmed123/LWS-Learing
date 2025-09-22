// import { addUser } from "@/actions/user";

export default function NewUserForm() {

    const addUser = async (formData) => {
        "use server"
        console.log(formData.get("name"));
        console.log(formData.get("email"));

    }


    return (
        <form action={addUser}>
            <div>
                <input type="text" name="name" placeholder="Name" />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
