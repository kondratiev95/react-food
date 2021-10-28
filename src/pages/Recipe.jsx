import { getMealById } from "../api";
import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { Preloader } from "../components/Preloader";


export const Recipe = () => {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const { goBack } = useHistory();

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id])

    return (
        <div>
            {!recipe.idMeal ? <Preloader/> : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                    <p>{recipe.strInstructions}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map(key => {
                                if(key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5 style={{margin: '2rem 0'}}>Video Recipe</h5>
                            <iframe  
                                id={id}
                                src={`http://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                allowFullScreen
                            /> 
                        </div>
                    ): null}
                </div>
            )}
            <button onClick={goBack} className="btn red lighten-2">Go Back</button>
        </div>
    )
}
