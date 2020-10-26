import React, { useState } from "react";
import './logginScreen.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function LogginScreen(){

	const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  const createAccount = async() =>  {
	console.log(await axios({
		method: 'post',
		url: 'https://pokermanager2.web.app/api/create-account',
		data: {
		  username: 'Fred',
		  password: 'Flintstone',
		  phoneNummber: '0763191333'
		}, headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json',
		  },
	  }));
    handleToggle();
  };

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/`; 
    history.push(path);
  }

  return (
    <>
      <div className="wrapper">
	  <i className={isActive  ? "deactive" : "fa fa-arrow-left"} onClick={handleToggle}></i>
	<div className="container">
		<h1>Välkommen</h1>	
		<form className={isActive ? "form" : "deactive"}>
			<input type="text" placeholder="Namn"/>
			<input type="password" placeholder="Lösenord"/>
			<button type="submit" id="login-button" onClick={routeChange}>Logga in!</button>     
			 <p className="message">Inget konto? <a href="#" onClick={handleToggle}>Gör ett!</a></p>
		</form>
		<div className={isActive ? "deactive" : "login-page"}>
		<div className="form">
    <form className="register-form">
      <input type="text" placeholder="Namn"/>
      <input type="text" placeholder="Telefonnummer"/>
      <input type="password" placeholder="Lösenord"/>
      <button onClick={createAccount}>Skapa</button>
    </form>
  </div>
		</div>

	</div>



	<ul className="bg-bubbles">
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
        <li></li>
		<li></li>
		<li></li>

	</ul>
</div>
    </>
  );
};

export default LogginScreen;
