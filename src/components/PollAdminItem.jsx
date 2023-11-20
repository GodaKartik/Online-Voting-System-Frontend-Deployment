import Axios from "axios";
// import { useState } from "react";

function PollAdminItem(props) {
  const deletePoll = () => {
    // var DELETE_URL = "http://localhost:4000/pollRoute/delete-poll/" + props.poll._id;
    var DELETE_URL = "https://online-voting-system-deployment.onrender.com/pollRoute/delete-poll/" + props.poll._id;
    Axios.delete(DELETE_URL)
      .then((res) => {
        if (res.status === 200) {
          alert("deleted poll");
          window.location.reload();
        } else {
          Promise.reject();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="grid grid-cols-4 p-2  m-2 rounded-md shadow-lg shadow-black">
      <h1 className="mx-auto my-auto text-2xl">{props.poll.pollTitle}</h1>
      <p className="p-1 ">{props.poll.pollDesc}</p>
      {/* <ul className="w-fit mx-auto"> */}
      <table className="w-fit mx-auto">
        {props.poll.candidates.map((cand) => {
          return (
            // <div>
            // <input type="radio" name="candidates" value={cand.candidate} />
            // {cand.candidate}
            // <li className="list-disc">{cand.candidate}</li>
            <tr>
              <td className="px-4">{cand.candidate}</td>
              <td className="px-4">{cand.votes}</td>
            </tr>
            // </div>
          );
        })}
      </table>
      {/* </ul> */}
      <div className="mx-auto my-auto">
        <button
          className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black"
          onClick={deletePoll}
        >
          Delete Poll
        </button>
      </div>
    </div>
  );
}

export default PollAdminItem;
