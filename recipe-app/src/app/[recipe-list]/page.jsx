const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card" style={styles.card}>
      <img 
        src={recipe.image} 
        alt={recipe.name} 
        width="200px" 
        style={styles.image}
      />
      <div className="recipe-info" style={styles.info}>
        <h3>{recipe.name}</h3>
        <div style={styles.details}>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Calories:</strong> {recipe.caloriesPerServing} kcal</p>
          <p><strong>Rating:</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
        </div>
        <div style={styles.ingredients}>
          <h4>Ingredients:</h4>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div style={styles.instructions}>
          <h4>Instructions:</h4>
          <ol>
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

const Recipe = ({ recipes }) => {
  return (
    <div className="container" style={styles.container}>
      {recipes.length > 0 ? (
        recipes.map((item) => <RecipeCard key={item.id} recipe={item} />)
      ) : (
        <div>No recipes found</div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    minWidth:'100%'
  },
  card: {
    width: '300px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  info: {
    padding: '15px',
  },
  details: {
    marginBottom: '15px',
  },
  ingredients: {
    marginBottom: '15px',
  },
  instructions: {
    marginBottom: '15px',
  },
};

export default Recipe;


// {
//   "id": 1,
//   "name": "Classic Margherita Pizza",
//   "ingredients": [
//       "Pizza dough",
//       "Tomato sauce",
//       "Fresh mozzarella cheese",
//       "Fresh basil leaves",
//       "Olive oil",
//       "Salt and pepper to taste"
//   ],
//   "instructions": [
//       "Preheat the oven to 475°F (245°C).",
//       "Roll out the pizza dough and spread tomato sauce evenly.",
//       "Top with slices of fresh mozzarella and fresh basil leaves.",
//       "Drizzle with olive oil and season with salt and pepper.",
//       "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
//       "Slice and serve hot."
//   ],
//   "prepTimeMinutes": 20,
//   "cookTimeMinutes": 15,
//   "servings": 4,
//   "difficulty": "Easy",
//   "cuisine": "Italian",
//   "caloriesPerServing": 300,
//   "tags": [
//       "Pizza",
//       "Italian"
//   ],
//   "userId": 166,
//   "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
//   "rating": 4.6,
//   "reviewCount": 98,
//   "mealType": [
//       "Dinner"
//   ]
// }