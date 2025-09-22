import getJoke from "./utils/getJoke";


export default async function Home() {

  const joke = await getJoke();
  return (
    <div>

      <h1 className="text-xl">{joke.value}</h1>
    </div>
  );
}
