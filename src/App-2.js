import React, {useState} from 'react'
import './App.css';

function CustomHooksObject (initialState){
  const [value, setValue] =useState (initialState);

  function onChange(e){
    setValue(e.target.value);
  }

  function clearInput(){
    setValue("")
  }
 return {value, onChange, clearInput};
}

function App() {
const {
  value: username,
  onChange: usernameOnChange,
  clearInput: usernameClearInput
} = CustomHooksObject("")

const {
  value: email,
  onChange: emailOnChange,
  clearInput: emailClearInput
} = CustomHooksObject ('')

const {
  value: password,
  onChange: passwordOnChange,
  clearInput: passwordClearInput
} = CustomHooksObject("")

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
      <input type="text" placeholder= "Username" value={username} onChange={usernameOnChange}  />
      <br/>
      <input type="email" placeholder= "email" value={email} onChange={emailOnChange}  />
      <br/>
      <input type= "text" placeholder= "password" value={password} onChange={passwordOnChange}  />
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default App;
