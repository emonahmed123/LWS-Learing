import NewUserForm from "./components/users/NewUserForm";
import UserList from "./components/users/UserList";
import getJoke from "./utils/getJoke";


export default async function Home() {

  const joke = await getJoke();
  return (
    <div>
      <h1 className="text-gray-800">USER REGISTRATION</h1>
      <NewUserForm />
      <UserList />
    </div>
  );
}
