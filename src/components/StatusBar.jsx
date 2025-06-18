import useOnline from "../hooks/useOnline";

const StatusBar = () => {
  const { isOnline, formattedOfflineDuration, offlineDuration } = useOnline();
  return (
    <div>
      <h1>{isOnline ? "✅ Online" : "❌ Offline"}</h1>

      {!isOnline && formattedOfflineDuration && offlineDuration && (
        <p>Active {formattedOfflineDuration}ago </p>
      )}
    </div>
  );
};

export default StatusBar;
