import React, {useState, useEffect} from 'react';
import {act} from "@testing-library/react";

function NameItem({ name, activeName, setActiveName }) {

    useEffect(() => {
        console.log(`${name} is in de DOM geplaatst! `)
    }, [])

    useEffect(() => {
        if (name === activeName) {
        console.log(`${name} wil graag een biertje bestellen! `)}
    }, [activeName])

  return (
    <li>
      <h3>{name}</h3>
      <button type="button"
              onClick={() => setActiveName(name)}>
        Geef een rondje!
      </button>
    </li>
  );
}

export default NameItem;