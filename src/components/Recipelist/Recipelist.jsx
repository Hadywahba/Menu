import Recipecart from "../Recipecart/Recipecart";

export default function Recipelist({ recipe, handleToggle ,isfavourites }) {
  return (
    <>
      {/* <h1 className='text-slate-700 text-center text-3xl w-fit mx-auto mb-4 rounded-md p-5 font-bold uppercase py-6 bg-orange-300'>hello to our resturant</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {recipe.map((recipe) => (
          <Recipecart
            key={recipe.id}
            recipe={recipe}
            handleToggle={handleToggle}
            favourite={isfavourites.some((fav)=>fav.id == recipe.id)}
          />
        ))}
      </div>
    </>
  );
}
