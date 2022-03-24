import React from 'react';
import './mealDetails.css';

const MealDetails = (props) => {
    console.log(props.meal)
    const { strMeal, strMealThumb, strCategory } = props.meal;
    return (
        <div className='mealDetails'>
            <img src={strMealThumb} alt="" />
            <div className="text">
                <p>Catagory: {strCategory}</p>
                <h4>{strMeal}</h4>
            </div>
            <button onClick={() => props.addBtn(props.meal)} className='btn-cart'>
                <p>ADD TO CART</p>
            </button>
        </div>
    );
};

export default MealDetails;