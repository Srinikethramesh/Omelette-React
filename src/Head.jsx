import React from 'react'
import "./Head.css"
import Preparation from "./Preparation"
export default function Head(){
  return (
    <div className='card'>
        <img src="/image-omelette.jpeg" alt="" />
        <h1>Simple Omelette Recipe</h1>
        <p>  An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
        <Preparation />
    </div>
  )
}
