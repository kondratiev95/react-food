import { Meal } from './Meal'

export const MealList = ({meals}) => {
    return (
        <div className="meal-list">
            {meals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
        </div>
    )
}
