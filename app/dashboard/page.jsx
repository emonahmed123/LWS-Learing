import Assignments from "../components/Assignments";
import Notifications from "../components/Notifications";
import Quiz from "../components/Quiz";

const DashboardPage = () => {
  return (
    <>
      <Assignments />
      <Notifications />
      <Quiz />
    </>
  );
};

export default DashboardPage;
