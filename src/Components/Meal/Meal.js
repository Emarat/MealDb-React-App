import React, { useEffect, useState } from 'react';
import MealDetails from '../mealDetails/mealDetails';
import './Meal.css';

const Meal = () => {

    const [meals, setMeals] = useState([]);
    const [carts, setCarts] = useState([]);


    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals))

    }, []);

    const addBtn = (meal) => {
        console.log(meal)
        const newCart = [...carts, meal];
        setCarts(newCart);
    }

    return (
        <div className='mealUI'>
            <div className='displayMeal'>
                {
                    meals.map(meal => <MealDetails
                        key={meal.idMeal}
                        meal={meal}
                        addBtn={addBtn}
                    ></MealDetails>)
                }
            </div>
            <div className='mealSummary'>
                <h3>Selected Meal Items</h3>
                {
                    carts.map(cart => <li >{cart.strMeal}</li>)
                }
            </div>
        </div>
    );
};

export default Meal;