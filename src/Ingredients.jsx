import React from 'react'
import "./Ingredients.css"
import Instruction from "./Instruction"

export default function Ingredients(){
  return (
    <div className="mainingredients">
        <div className='ingredients'>
            <h1>Ingredients</h1>
            <ul>
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
            </ul>
            <hr />
        </div>
        <Instruction />
    </div>
  )
}
