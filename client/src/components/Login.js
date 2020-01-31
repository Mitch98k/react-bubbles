import React, {useState} from "react";
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleUsernameChanges = e => {
  setUsername(e.target.value);
}
const handlePasswordChanges = e => {
  setPassword(e.target.value);
}

const handleSubmit = e => {
  e.preventDefault();
  axios
.post('http://localhost:5000/api/login', username, password)
.then(res => {
  console.log(res)
  localStorage.setItem("token");
})
.catch(err => console.log(err));
}
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit = {handleSubmit}>
          <input
            type = "text"
            name = "username"
            value = {username}
            onChange = {handleUsernameChanges}
          />
          <input
            type = "password"
            name = "password"
            value = {password}
            onChange = {handlePasswordChanges}
          />
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
