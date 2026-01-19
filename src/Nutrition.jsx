import React from 'react'
import "./Nutrition.css"

export default function Nutrition(){
  return (
    <div className='nutrition'>
        <h1>Nutrition</h1>
        <p>The table below shows nutritional values per serving without the additional fillings.</p>
        <div className="table1">
            <p>Calories</p>
            <p className='color'>277kcal</p>
        </div>
        <hr />
        <div className="table2">
            <p>Carbs</p>
            <p className='color'>0g</p>
        </div>
        <hr />
        <div className="table3">
            <p>Protein</p>
            <p className='color'>20g</p>
        </div>
        <hr />
        <div className="table4">
            <p>Fat</p>
            <p className='color'>22g</p>
        </div>
    </div>
  )
}
