import React, { useState, useEffect } from "react";
import axios from "./api/axios";
import Temak from "./Temak";
const Szavak = () => {
  const [szavak, setSzavak] = useState([]);
  useEffect(() => {
    const getSzavak = async () => {
      const apiSzavak = await axios.get("http://localhost:8000/api/szavak");
      console.log(apiSzavak.data);
      setSzavak(apiSzavak.data);
    };
    getSzavak();
  }, []);
  return (
    <div className="main">
      <h1>Szótár</h1>
      <h3>Szavak</h3>
      <Temak />
      <div className="tarolo">
        <div className="angol">
          <h4>Angol</h4>

          {szavak.map((item) => (
            <div key={item.id}>
              <p>{item.angol}</p>
            </div>
          ))}
        </div>
        <div className="magyar">
          <h4>Magyar</h4>

          {szavak.map((item) => (
            <div key={item.id}>
              <p>{item.magyar}</p>
              
            </div>
          ))}
        </div>
        <div className="magyar">
          <h4>Visszajelzés</h4>
        </div>
      </div>
    </div>
  );
};
export default Szavak;
