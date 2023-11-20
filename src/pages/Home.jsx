import { Component } from "react";

import Header from "../components/Header";
import Features from "../components/Features";

import "../App.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="w-fit mx-auto mt-5">
          <button className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black">
            <a href="/signup">Create Account</a>
          </button>
          {/* <button className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black">
            <a href="/login">Login</a>
          </button> */}
          <button className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black">
            <a href="/login">Login</a>
          </button>
          {/* <button className="border border-black rounded-sm mx-2 p-1 hover:text-white hover:bg-black">
            <a href="/adminlogin">Login as Admin</a>
          </button> */}
        </div>
        <Features />
        {/* <h2 className="w-fit mx-auto mt-5 underline">Features Placeholder</h2> */}
        {/* <p className="w-fit mx-auto p-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, facere quas. Aperiam, adipisci dolore
          dolor quod eum quam praesentium incidunt! Adipisci modi est at ab eligendi, ex ducimus odio dicta qui,
          voluptatum quis! Minima non dolore deleniti tenetur a nemo quae, molestias reiciendis sit quis fuga facilis
          rerum ipsa reprehenderit veniam. Dolorum neque similique consectetur quae accusantium fugit commodi ea,
          voluptas dolorem rerum enim quos cupiditate repellendus amet, fugiat consequuntur ex reprehenderit reiciendis
          animi optio. Distinctio, esse voluptates. Vero aspernatur, aliquam sit tempora expedita voluptatum natus
          voluptates obcaecati. Porro eius dolorem sapiente tempore cupiditate alias laborum earum mollitia eaque dicta!
        </p> */}
      </div>
    );
  }
}

export default Home;
