import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [passwrod, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setpassErr] = useState(false);

  function getlogindata(e) {
    e.preventDefault();
    console.log("Press or Click on Login");
    // console.log(e.target.value);
    if (user.length <= 3 || passwrod.length <= 3) {
      alert("type correct values");
    } else {
      alert("all good!");
    }
  }
  function userHandler(e) {
    const item = e.target.value;
    console.log("name is ", item);
    if (item.length <= 3) {
      setUserErr(true);
      console.log("invalid");
    } else {
      setUserErr(false);
      console.log("valid");
    }
    setUser(item);
  }
  function passwordHandler(e) {
    const item = e.target.value;
    console.log("password is ", item);
    if (item.length <= 3) {
      setpassErr(true);
      console.log("invalid");
    } else {
      setpassErr(false);
      console.log("valid");
    }
    setPassword(item);
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={getlogindata}>
        <input
          type="text"
          placeholder="enter your name  "
          onChange={userHandler}
        />
        {userErr ? <span> User's Name Not valid</span> : ""}
        <br />
        <br />
        <input
          type="password"
          placeholder="enter your password"
          onChange={passwordHandler}
        />
        {passErr ? <span> User's Password Not valid</span> : ""}
        <br />
        <br />
        <button type="submit">Login</button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default Login;
