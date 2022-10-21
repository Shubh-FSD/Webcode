import React from "react";
import "../CSS/Welcome.css";
import Capture4 from "../assets/imgs/Capture4.PNG";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";

export default function Welcome() {
  let navigate = useNavigate();
  //  let handleBeforeLogin = async ()=>{ navigate('/loginBefore')}
  //  let handleRegister = async ()=>{ navigate('/Register')}
  return (
    <div id="content" className="wallpaper">
      <Navbar1 />
    <div >
      <div className="Entry-Caption ">
        <div className="row">
          <div className="Adjust_text">
            <h1>Hi, Welcome to The INDO Group</h1>
          </div>
          <div className="Adjust_text">
            <p>We are the top ranked CRM service provider in India</p>
          </div>
          <div className="Adjust_text">
            <img className="Capture4" src={Capture4} alt="..." />
          </div>
        </div>
      </div>
      <footer className="sticky-footer format">
        <div className="container my-auto">
          <div
            className="copyright text-center my-auto"
            style={{ color: "white" }}
          >
            <span>Copyright &copy; Your Website 2022</span>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
