import React from "react";
import "./Uploadbtn.scss";

// import { AiFillFileAdd } from "react-icons/ai";

import {  CgImport } from "react-icons/cg";



import axios from "axios";
import { Link } from "react-router-dom";


export default function Uploadbtn({setUpdateUI }) {
  const handleChange = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("photo", event.target.files[0]);

    axios.post("http://localhost:9001/api/save", formData)
        .then((res) => {
            console.log(res.data);
            setUpdateUI(res.data._id);
            })
            .catch((err) => {
            console.log(err = "error bitch");
            }
        );
  };

  return (
    <>
    <Link to="/images/upload">
    <div className="btn-item">
      <CgImport />
    </div>
  </Link>
  </>

  );
}
