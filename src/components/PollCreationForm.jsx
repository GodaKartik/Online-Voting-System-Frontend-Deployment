import { useState } from "react";
import Axios from "axios";

function PollCreationForm() {
  const [pollTitle, setPollTitle] = useState("");
  const [pollDesc, setPollDesc] = useState("");
  const [candidates, setCandidates] = useState([]);

  const infoArray = [pollTitle, pollDesc, candidates];

  return (
    <div>
      <center>
        <form
          onSubmit={() => {
            // Axios.post("http://localhost:4000/pollRoute/create-poll", {
            Axios.post("https://online-voting-system-deployment.onrender.com/pollRoute/create-poll", {
              pollTitle: infoArray[0],
              pollDesc: infoArray[1],
              candidates: infoArray[2],
            })
              .then((res) => {
                if (res.status === 200) {
                  alert("poll created successfully");
                } else {
                  Promise.reject();
                }
              })
              .catch((err) => {
                alert(err);
              });
          }}
        >
          <table className="w-fit mx-auto m-5">
            <tr>
              <td>
                <label htmlFor="polltitle">Poll Title</label>
              </td>
              <td>
                <input
                  type="text"
                  name="polltitle"
                  className="border border-black"
                  onChange={(event) => {
                    setPollTitle(event.target.value);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="polldesc">Poll Description</label>
              </td>
              <td>
                <textarea
                  name="polldesc"
                  id=""
                  cols="23"
                  rows="2"
                  className="border border-black"
                  onChange={(event) => {
                    setPollDesc(event.target.value);
                  }}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="candidates">Candiadtes (comma seperated)</label>
              </td>
              <td>
                <input
                  type="text"
                  name="candidates"
                  className="border border-black"
                  onChange={(event) => {
                    setCandidates(event.target.value.split(",").map((val) => ({ candidate: val.trim(), votes: 0 })));
                  }}
                />
              </td>
            </tr>
          </table>
          <button type="submit" className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black">
            Create
          </button>
        </form>
      </center>
    </div>
  );
}

export default PollCreationForm;
