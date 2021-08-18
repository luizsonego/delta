import React, { useState } from "react";
import { FaArrowLeft, FaPlus, FaUser } from "react-icons/fa";
import { useHistory, Link } from "react-router-dom";
import TopNav from "../../components/topNav";

import api from "../../services/api";

import "./styles.css";

function StudentCreate() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [class_, setClass_] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAge = new Date().getFullYear() - birth.split("-")[0];

    try {
      api
        .post("students", {
          name,
          gender,
          age: newAge,
          class_,
          birth,
        })
        .then(() => {
          history.push("/");
        });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <TopNav>
        <Link to="" className="back">
          <FaArrowLeft />
        </Link>
        <Link to="/novo" className="add">
          <FaPlus />
        </Link>
        <Link to="/admin" className="add">
          <FaUser />
        </Link>
      </TopNav>

      <div className="container">
        <form onSubmit={handleSubmit} className="form-create">
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="input-create"
            placeholder="Nome"
          />

          <input
            id="class_"
            value={class_}
            onChange={(event) => setClass_(event.target.value)}
            className="input-create"
            placeholder="Turma"
          />

          <input
            type="date"
            id="name"
            value={birth}
            onChange={(event) => setBirth(event.target.value)}
            className="input-create"
            placeholder="Data de nascimento"
          />

          <select
            name="gender"
            id="gender"
            className="input-create"
            onChange={(event) => setGender(event.target.value)}
            value={gender}
          >
            <option value="Masculino">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </div>
    </>
  );
}

export default StudentCreate;
