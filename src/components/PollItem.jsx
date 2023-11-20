import { useState } from "react";
import Axios from "axios";

function PollItem(props) {
  const [selected, setSelected] = useState("");
  const [showPoll, setShowPoll] = useState(true);

  return (
    <div
      style={{
        visibility: showPoll ? "" : "hidden",
      }}
      className="mx-5 mb-4 p-2 border border-black rounded-md"
    >
      <h1 className="text-xl w-fit mx-auto">{props.poll.pollTitle}</h1>
      <p className="text-sm">{props.poll.pollDesc}</p>
      <label htmlFor="candidates" className="text-sm underline">
        Candiadtes
      </label>
      <div>
        <select
          name="candidates"
          id=""
          className="block w-fit mx-auto bg-white border border-gray-300 my-1 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={(event) => {
            setSelected(event.target.value);
          }}
        >
          <option disabled selected>
            Select a candidate ...
          </option>
          {props.poll.candidates.map((cand) => {
            return <option value={cand.candidate}>{cand.candidate}</option>;
          })}
        </select>
      </div>
      <center>
        <button
          onClick={() => {
            const updatedPoll = {
              pollTitle: props.poll.pollTitle,
              pollDesc: props.poll.pollDesc,
              candidates: props.poll.candidates.map((obj) =>
                obj.candidate === selected
                  ? { ...obj, votes: ++props.poll.candidates.find((c) => c.candidate === selected).votes }
                  : obj
              ),
            };
            // Axios.put("http://localhost:4000/pollRoute/update-poll/" + props.poll._id, updatedPoll)
            Axios.put(
              "https://online-voting-system-deployment.onrender.com/pollRoute/update-poll/" + props.poll._id,
              updatedPoll
            )
              .then((res) => {
                if (res.status === 200) alert("Vote successful");
                else Promise.reject();
              })
              .catch((err) => alert(err));

            setShowPoll(!showPoll);
          }}
          className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black"
        >
          Vote
        </button>
      </center>
    </div>
  );
}

export default PollItem;
