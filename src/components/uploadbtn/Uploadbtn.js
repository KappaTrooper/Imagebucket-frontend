import React from "react";
import "./Uploadbtn.scss";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";

export default function Uploadbtn() {
  const handleChange = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("photo", event.target.files[0]);

    axios.post("http://localhost:9001/api/save", formData)
        .then((res) => {
            console.log(res.data);
            })
            .catch((err) => {
            console.log(err = "error bitch");
            }
        );
  };

  return (
    <label className="btn-item" htmlFor="file_picker">
      <AiFillPlusCircle />
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        onChange={(event) => handleChange(event)  }
      />
    </label>

  );
}
