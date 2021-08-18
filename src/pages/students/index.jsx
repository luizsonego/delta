import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import TopNav from "../../components/topNav";
import { Link } from "react-router-dom";
import { FaPlus, FaSearch, FaUser } from "react-icons/fa";

import api from "../../services/api";

import "./styles.css";

function Students() {
  const [dataStudents, setDataStudents] = useState();
  const [name, setName] = useState("");

  useEffect(() => {
    try {
      api.get("aluno").then((response) => {
        setDataStudents(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [setDataStudents]);


  async function handleNextPage(event) {
    event.preventDefault();
    const response = await api.get(`${dataStudents.next}`);
    setDataStudents(response.data);
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  async function handlePrevPage(event) {
    event.preventDefault();
    const response = await api.get(`${dataStudents.prev}`);
    setDataStudents(response.data);
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }

  async function handleSearchDeveloper(event) {
    event.preventDefault();
    const response = await api.get("students", {
      params: {
        name,
      },
    });
    setDataStudents(response.data);
  }

  if (!dataStudents) {
    return <div className="loading">carregando...</div>;
  }
  return (
    <>
      <TopNav>
        <Link to="/novo" className="add">
          <FaPlus />
        </Link>
        <Link to="/admin" className="add">
          <FaUser />
        </Link>
      </TopNav>

      <div className="content">
        <form
          action=""
          onSubmit={handleSearchDeveloper}
          className="form-search"
        >
          <input
            type="text"
            name="name"
            className="input-search"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <button type="submit" className="submit-search">
            <FaSearch color="#ccc" />
          </button>
        </form>

        {dataStudents.data.map((developer) => {
          return (
            <Card
              key={developer.id}
              name={developer.name}
              age={developer.age}
              birth={developer.birth}
              gender={developer.gender}
              class_={developer.class_}
              id={developer.id}
            />
          );
        })}

        <div className="button-navigation">
          <button onClick={handleNextPage} className="next-button">
            Proximo
          </button>
          <button onClick={handlePrevPage} className="prev-button">
            Anterior
          </button>
        </div>
      </div>
    </>
  );
}

export default Students;
