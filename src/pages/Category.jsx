import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getFilterdCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";

export const Category = () => {

    const [meals, setMeals] = useState([]);
    const { name } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getFilterdCategory(name).then(data => setMeals(data.meals));
    },[name]);

    return (
        <div>
            <div>
                <button onClick={goBack} className="btn red lighten-2">Go Back</button>
            </div>
            {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
        </div>
    )
}
