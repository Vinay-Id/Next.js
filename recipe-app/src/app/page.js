"use client";
import { useEffect, useState } from "react";
import Recipe from "./[recipe-list]/page";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = () => {
      fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((res) => setRecipes(res.recipes));
    };
    fetchRecipe();
  }, []);  

  useEffect(() => {
    console.log(recipes);
  }, [recipes]);  
  

  return (
    <div>
      <Recipe recipes={recipes}/>
    </div>
  );
}
