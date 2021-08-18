import React, { useEffect, useState } from "react";
import TopNav from "../../components/topNav";
import { FaPlus, FaArrowLeft, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

function Students() {
  const params = useParams();

  const [dataStudents, setDataStudents] = useState();

  useEffect(() => {
    try {
      api.get("aluno/" + params.id).then((response) => {
        setDataStudents(response.data);
      });
    } catch (error) {}
  }, [params.id]);

  if (!dataStudents) {
    return <p>carregando...</p>;
  }

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

      <div className="content">
        <div className="profile-picture">
          <img src="https://picsum.photos/300/300?random=1" alt="" />
        </div>
        <div className="profile-body">
          <p className="name">{dataStudents.name} - <small>{dataStudents.age}</small></p>
          <p className="gender">{dataStudents.gender}</p>
          <p className="hobby">{dataStudents.class_}</p>
          <p className="birth">{dataStudents.birth}</p>
        </div>
      </div>
    </>
  );
}

export default Students;
