import React, {useState} from 'react'
import './App.css';

function CustomHooks (initialState){
  const [value, setValue] = useState(initialState);

  function onChange(e){
    setValue(e.target.value);
  }

  function clearInput(){
    setValue('')
  }

  return [value, onChange, clearInput];

}

function App() {
  const [username, usernameOnChange, usernameClearInput] = CustomHooks("");
  const [email, emailOnChange, emailClearInput] = CustomHooks ("");
  const [password, passwordOnChange, passwordClearInput] = CustomHooks ("");

function handleOnSubmit(e){
  e.preventDefault();

  usernameClearInput();
  emailClearInput();
  passwordClearInput();

  console.log(username);
  console.log(email);
  console.log(password);
}

  return (
    <div className="App">
    <form onSubmit={handleOnSubmit}>
      <input type="text" placeholder= "Username" value={username} onChange={(e) => usernameOnChange (e)}  />
      <br/>
      <input type="email" placeholder= "email" value={email} onChange={(e) => emailOnChange(e)} />
      <br/>
      <input type= "text" placeholder= "password" value={password} onChange={(e) => passwordOnChange(e)} />
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
