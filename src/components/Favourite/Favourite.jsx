import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import img1 from "../../assets/images/favourite.png";
import { Link, useLocation } from "react-router-dom";
import Recipecart from "../Recipecart/Recipecart";

export default function Favourite() {
  const [fav, setfav] = useState([]);

  useEffect(() => {
    const storeFav = JSON.parse(localStorage.getItem("favour")) || [];
    setfav(storeFav);
  }, []);
  const removeFav = (recipe) => {
    const update = fav.filter((favou) => favou.id != recipe.id);
    setfav(update);
    localStorage.setItem("favour", JSON.stringify(update));
  };

  return (
    <div className="container p-8     dark:bg-slate-800 dark:text-white  ">
      {fav.length == 0 ? (
        <>
          <div className="flex justify-center items-center flex-col">
            <img className="w-[348px]" src={img1} alt="img1" />
            <h2 className="text-3xl">No Favourites</h2>
            <h2>
              You can add an items to your Favourites by clicking to heart{" "}
            </h2>
            <Link
              to={`/`}
              className="bg-amber-500 mt-3 text-white text-xl mb-10 p-4 rounded-md"
            >
              go back
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className="font-bold text-3xl text-center mb-6 dark:text-white ">
            Favourites Meals
          </h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {fav.map((recipe) => (
              <Recipecart key={recipe.id} recipe={recipe}
              favourite={true}
              handleToggle={removeFav}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
