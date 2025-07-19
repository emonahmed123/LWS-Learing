import useGithub from "../hooks/useGithub";

const Githubprofile = () => {
  const { user, error, loaidng } = useGithub("emonahmed123");
  console.log(user);

  return (
    <>
      {user ? (
        <div className="flex flex-col justify-center items-center p-4">
          <img
            src={user["avatar_url"]}
            alt="photo"
            className="border rounded-full w-32 h-32"
          />
          <p className="text-3xl my-3">
            {user?.name} has <u>{user["public_repos"]}</u> public repositories
            that gained <u>{user.followers}</u> followers.
          </p>
          <h2 className="text-xl">More About the contributor:</h2>
          <p className="my-2 text-md bg-gray-300 border p-2 rounded-md">
            {user?.bio}
          </p>
        </div>
      ) : (
        <p>No user data</p>
      )}
    </>
  );
};

export default Githubprofile;
