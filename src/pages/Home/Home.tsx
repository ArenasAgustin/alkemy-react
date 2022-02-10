import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";

const { REACT_APP_API_KEY } = process.env;

export default function Home() {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    console.log(process.env);
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${REACT_APP_API_KEY}&number=10&tags=vegan`
      );

      setCards(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCards();
    console.log(cards);
  }, []);

  return (
    <div>
      <Cards recipeArray={cards} />
    </div>
  );
}
