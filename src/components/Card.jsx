import React from 'react'
import styles from "./Card.module.css"

export default function Card({min,max,name,img,onClose,id}) {
    return (
        <div className={styles.card}>
            <button onClick={onClose} className={styles.btnRed}>X</button>
            <h5 className="card-title">{name}</h5>
            <div className={styles.container}>
            <div>
                <p>Min</p>
                <p>{min}</p>
            </div>
            <div>
                 <p>Max</p>
                <p>{max}</p>
            </div>
            <div>
               <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" alt="" />
            </div>
            </div>

        </div>
    )
}
