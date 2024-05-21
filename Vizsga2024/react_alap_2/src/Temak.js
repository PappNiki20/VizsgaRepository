import React, { useState, useEffect } from "react";
import axios from "./api/axios";
const Temak = () => {
  const [temak, setTemak] = useState([]);
  useEffect(() => {
    const getTemak = async () => {
      const apiTemak = await axios.get("http://localhost:8000/api/tema");
      console.log(apiTemak.data);
      setTemak(apiTemak.data);
    };
    getTemak();
  }, []);
  return (
    <div className="temak">
    <label htmlFor="cars">Válasszon témát: </label>
    <select id="temak">
      {temak.map((item) => (
       
            <option value="tema">{item.temanev}</option>
        
      ))}
      </select>
    </div>
  );
};
export default Temak;
