import CardInterface from "../../interfaces/cardInterface";
import CardMenu from "../CardMenu/CardMenu";

export default function Cards({
  recipeArray,
}: {
  recipeArray: CardInterface[];
}) {
  return (
    <div className="cards__container">
      {recipeArray.map((recipe: CardInterface) => (
        <CardMenu
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          healthScore={recipe.healthScore}
          pricePerServing={recipe.pricePerServing}
          vegan={recipe.vegan}
          key={recipe.id}
        />
      ))}
    </div>
  );
}
