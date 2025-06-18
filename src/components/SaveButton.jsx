import useOnline from "../hooks/useOnline";

const SaveButton = () => {
  const isOnline = useOnline();

  return (
    <div>
      <button disabled={!isOnline}>
        {isOnline ? "Save" : "Reconnecting..."}
      </button>
    </div>
  );
};

export default SaveButton;
