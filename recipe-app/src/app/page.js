"use client";
import { useEffect, useState } from "react";
import Recipe from "./[recipe-list]/page";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = () => {
      fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((res) => setRecipes(res));
    };
    fetchRecipe();
    console.log(recipes);
  }, []);

  return (
    <div>
      <Recipe />
    </div>
  );
}
