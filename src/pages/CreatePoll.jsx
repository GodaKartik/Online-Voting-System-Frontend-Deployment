import PollCreationForm from "../components/PollCreationForm";
import PollAdminItem from "../components/PollAdminItem";
import Header from "../components/Header";
import UserHeader from "../components/UserHeader";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CreatePoll() {
  const [polls, setPolls] = useState([]);
  const { username } = useParams();
  useEffect(() => {
    // Axios.get("http://localhost:4000/pollRoute")
    Axios.get("https://online-voting-system-deployment.onrender.com/pollRoute")
      .then((res) => {
        if (res.status === 200) {
          setPolls(res.data);
          // setCandidates(polls.candidates);
        } else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const pollItems = () => {
    return polls.map((poll_item) => {
      return <PollAdminItem poll={poll_item} />;
    });
  };

  return (
    <div>
      <Header />
      <UserHeader userN={username} />
      <PollCreationForm />
      <Headings />
      <div className="mt-2">{pollItems()}</div>
    </div>
  );
}

export default CreatePoll;

function Headings() {
  return (
    <div className="grid grid-cols-4 p-2  m-2 rounded-md">
      <h1 className="mx-auto my-auto text-xl">Poll Title</h1>
      <h1 className="mx-auto my-auto text-xl">Poll Description</h1>
      <h1 className="mx-auto my-auto text-xl">Candidates - Votes</h1>
      <h1 className="mx-auto my-auto text-xl"> </h1>
    </div>
  );
}
