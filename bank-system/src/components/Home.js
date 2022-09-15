import React from "react";
import Navbar from "./Navbar";

let LoggedInUserData = {};
export default function Home(props) {
  LoggedInUserData=props.getUserData;
  return (
    <>
      <Navbar userData = {LoggedInUserData}></Navbar>
      <div>
      <img src="http://localhost:3000/Home.jpg" alt="BigCo Inc. logo"/>
    </div>
    </>
  );
}
