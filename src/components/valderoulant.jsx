import chevron from "../asset/images/arrow.png"
import React, { useState } from "react";
import data from "../location.json"
import { useParams } from 'react-router-dom'

const Valderoulant = () => {

    const { id } = useParams()
    const appart = data.find((loge) => loge.id === id )

  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen); // Alterne l'état d'ouverture
    console.log("toggle collapse");
  };

  
    return (        
        <div className="kasa-val">
          <div className="kasa-valderoulant">
                <a href="/">Fiabilité</a>
                <button className="button" onClick={toggleCollapse}>
                    <img  src={chevron} alt={'chervon anime'}></img>
                </button>
          </div>
          <div className={`collapse-content ${isOpen ? "open" : ""}`}>
          {appart.equipments.map((equipments) => {
           return <li className="collapse-text">{equipments}</li>
          })}
          </div>
        </div>
    )
}


export default Valderoulant