import React, { useState, useEffect } from "react";

import {axiosWithAuth} from '../utils/axiosWithAuth'

import AnimalForm from "./AnimalForm.js";
import AnimalList from "./AnimalsList.js";

export default function AnimalDashboard() {
    
    const [ animals, setAnimals ] = useState([]);
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        axiosWithAuth()
        .get('api/animals')
        .then((res) => {
        setAnimals(res.data)
        // console.log(res);
      })
      .catch((err) => console.log(`Error`, err))

    })

    return(
        <div className="dash">
            <AnimalForm animals={animals} updateAnimals={setAnimals} setUpdating={setUpdate} updating={update} />
            <AnimalList animals={animals} />
        </div>
    )
}