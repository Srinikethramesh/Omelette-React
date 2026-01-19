import React from 'react'
import "./Preparation.css"
import Ingredients from "./Ingredients"

export default function Preparation(){
  return (
    <div className="mainprepation">
      <div className='preparation'>
          <h2>Preparation time</h2>
          <ul>
              <li><b>Total</b>: Approximately 10 minutes</li>
              <li><b>Preparation</b>: 5 minutes</li>
              <li><b>Cooking</b>: 5 minutes</li>
          </ul>
     </div>
    <Ingredients />
    </div>
  )
}
