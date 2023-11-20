// import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserHeader(props) {
  // const [showMenu, setShowMenu] = useState("");
  const navigateTo = useNavigate();

  return (
    <div className="m-2">
      {/* <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      /> */}
      <h1 className="p-1 rounded-md inline text-2xl">{props.userN}</h1>
      {/* <span
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        className="material-symbols-outlined float-right p-1 cursor-pointer m-2"
      >
        menu
      </span> */}
      <div
        className="inline float-right "
        // style={{
        //   visibility: showMenu ? "" : "hidden",
        // }}
      >
        <button
          className="border border-black rounded-sm p-1 hover:text-white hover:bg-black m-2"
          onClick={() => {
            navigateTo("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default UserHeader;
