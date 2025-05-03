import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import GridLoader from "react-spinners/GridLoader";
import Recipelist from "../Recipelist/Recipelist";

export default function Home({ query }) {
  let [recipe, setrecipe] = useState([]);
  const [loading, setloading] = useState(false);
  const [isfavourites, setisfavourites] = useState([]);

  const handleToggle = (recipes) => {
    const favourite = isfavourites.some((fav) => fav.id == recipes.id);
    let updatefavourite;
    if (favourite) {
      updatefavourite = isfavourites.filter((fav) => fav.id != recipes.id);
    } else {
      updatefavourite = [...isfavourites, recipes];
    }
    setisfavourites(updatefavourite);
    localStorage.setItem("favour", JSON.stringify(updatefavourite));
  };
  async function getRecipe() {
    try {
      setloading(true);
      let { data } = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
      );
      console.log(data.data.recipes);
      setrecipe(data.data.recipes);
    } catch (error) {
      console.log(error);
      setloading(false);
    } finally {
      setloading(false);
    }
  }
  useEffect(() => {
    const storeFav = JSON.parse(localStorage.getItem("favour")) || [];
    setisfavourites(storeFav);
    getRecipe();
  }, [query]);

  return (
    <>
      <main className="container p-8    dark:bg-slate-800 dark:text-white ">
        {loading ? (
          <div className="flex min-h-screen  justify-center items-center  ">
            <GridLoader color="#737373" />
          </div>
        ) : (
          <Recipelist
            recipe={recipe}
            handleToggle={handleToggle}
            isfavourites={isfavourites}
          />
        )}
      </main>
    </>
  );
}
