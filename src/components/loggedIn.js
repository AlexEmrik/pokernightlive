import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './loggedIn.css';

function LoggedIn(){

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };

    const [activehumburger, setHamburger] = useState("false");

    const handleHamburger = () => {
      setHamburger(!activehumburger);
    };  

    function sayHello() {
        alert('Hello!');
      }

      const history = useHistory();

      const routeChange = () =>{ 
        let path = `/login`; 
        history.push(path);
      }

  return (
    <>
      <div className="container2">
      
      <div className="app">
          <div className="nav">
              <div className="nav-top">
              <div id="menuToggle">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <span></span>

    <ul id="menu">
      <a href="#"><li onClick={routeChange}>Logout</li></a>
    </ul>
  </div><i className="fa fa-usd"></i>
  <p id="currency">-50kr</p>

  
              </div>
              <ul className="Date">
                  <li className="active">Today</li>
              </ul>
          </div>

          <div className="list-items">
              <div className="list-item">
                  <div className={isActive  ? "list-thumb" : "list-thumb active"} >
                      <img src="https://www.spelapoker.se/wp-content/uploads/2020/10/texas-holdem-poker.png" alt="" width="110"/>
                  </div>
                  <span className="movie-time-left">17.00</span>
                  <span className="book-now" onClick={sayHello}>
                      <i className="fa fa-ticket"></i>
                  </span>
                  <div className="movie-detail">
                      <div className="short-detail" onClick={handleToggle}>
                          <table>
                              <tr>
                                  <td className="title">Texas hold'em</td>
                              </tr>
                              <tr>
                                  <td className="author">8 tables</td>
                              </tr>
                              <tr>
                                  <td className="genre">
                                      50kr buy in
                                  </td>
                              </tr>
                          </table>
                          <span className="more-option"></span>
                      </div>

                      <div className={isActive  ? "deactive" : "full-detail"}>
                          <span className="show-time">
                              Today
                              <span>
                                  17:00  &nbsp;&nbsp;
                                  <i className="fa fa-caret-down"></i>
                              </span>
                          </span>
                          <table>
                              <tr>
                                  <td className="title">Texas hold'em</td>
                              </tr>
                              <tr>
                                  <td className="author">8 tables</td>
                              </tr>
                              <tr>
                                  <td className="duration">
                                     50kr buy in
                                  </td>
                              </tr>
                          </table>
                          <div className="meta-data">
                              <ul className="nav">
                                  <li class="active">Info</li>
                                  <li>Payouts</li>
                                  <li>Players</li>
                                  <li>Rules</li>
                              </ul>
                              <div className="info">
                                  <span className="genre">
                                       The rules
                                  </span>
                                  <span className="story">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque iaculis augue, ac dignissim orci venenatis eu. Aliquam pretium hendrerit massa, vitae gravida ex ultricies at. Aliquam mattis efficitur tellus, at aliquam mi vulputate nec. Vivamus hendrerit nisi id enim finibus blandit. Praesent cursus dapibus neque, non accumsan quam gravida sit amet. Pellentesque vestibulum orci nisi, vitae luctus erat venenatis ac. Quisque vulputate vulputate posuere. Nulla bibendum id augue vehicula pellentesque. Integer vitae pharetra odio, in facilisis lectus. Nulla blandit volutpat ornare.
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris scelerisque iaculis augue, ac dignissim orci venenatis eu. Aliquam pretium hendrerit massa, vitae gravida ex ultricies at. Aliquam mattis efficitur tellus, at aliquam mi vulputate nec. Vivamus hendrerit nisi id enim finibus blandit. Praesent cursus dapibus neque, non accumsan quam gravida sit amet. Pellentesque vestibulum orci nisi, vitae luctus erat venenatis ac. Quisque vulputate vulputate posuere. Nulla bibendum id augue vehicula pellentesque. Integer vitae pharetra odio, in facilisis lectus. Nulla blandit volutpat ornare.                                  </span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

              

             
             
          </div>

          <div className={isActive  ? "footer-popup-deactive" : "footer-popup"}>
              <ul className="action">
                  <li onClick={handleToggle}>
                      <i className="fa fa-mail-forward"></i>
                  </li>
                  <li onClick={sayHello}>
                      <i className="fa fa-ticket"></i>
                      <span>Book</span>
                  </li>
                  <li>
                      <i className="fa fa-usd"></i>
                  </li>
              </ul>
          </div>

      </div>

    </div>
    </>
  );
};

export default LoggedIn;
