import React from "react";
import { useState } from "react";

export default function Recipecart({ recipe, handleToggle, favourite }) {
  const [showModal, setshowModal]=useState(false)
  return (
    <>
    <div className="dark:bg-slate-800 dark:text-white dark:shadow-md dark:shadow-slate-200 shadow-md rounded-md  ">
      <img
        src={recipe.image_url}
        alt={recipe.title}
        className="w-full cursor-pointer h-60 object-cover cursor-pointer"
        onClick={()=>setshowModal(true)}
      />
      <div className="p-4 flex justify-between">
        <h2>{recipe.title.split("").splice(0, 24).join("")}</h2>
        <button>
          <i
            onClick={() => handleToggle(recipe)}
            className={` fa-solid fa-heart ${favourite ? "text-red-600" : ""}`}
          ></i>
        </button>
      </div>
    </div>

{showModal && <div className="bg-black z-[999] bg-opacity-50 fixed inset-0 flex justify-center items-center ">
<div className="bg-white p-5 rounded-md max-w-md">
<h2 className="font-bold text-xl text-black mb-4">{recipe.title.split("").splice(0, 24).join("")}</h2>
<img src={recipe.image_url} className="w-full object-cover h-[400px]" alt="" />
<p className="text-black mt-4">publisher : {recipe.publisher}</p>
<button onClick={()=>setshowModal(false)} className="bg-gray-700 text-white py-2 px-4 rounded-md mt-4 ">Close</button>
  </div>

  </div>
  
  }
    </>


  );
}
