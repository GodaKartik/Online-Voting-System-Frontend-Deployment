import Axios from "axios";
import { useState, useEffect } from "react";
import UserHeader from "../components/UserHeader";
import Header from "../components/Header";
import PollItem from "../components/PollItem";
import { useParams } from "react-router-dom";

function Polls() {
  const [polls, setPolls] = useState([]);
  const { username } = useParams();
  // const [candidates, setCandidates] = useState();

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
      return <PollItem poll={poll_item} />;
    });
  };

  return (
    <div>
      <Header />
      <UserHeader userN={username} />
      <h1 className="text-3xl m-5 p-2 w-fit mx-auto">Active Polls</h1>
      <div className="grid grid-cols-3">{pollItems()}</div>
    </div>
  );
}

export default Polls;
