import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar({ setquery , query }) {
  const [isDark, setisDark] = useState(false);
  const ref = useRef(null);
 
    const loc =useLocation()

  useEffect(() => {
    const saveDark = localStorage.getItem("theme");
    if (saveDark === "dark") {
      setisDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setisDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function darkmode() {
    const mode = !isDark;
    setisDark(mode);
    console.log(ref.current.checked);
    if (mode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }


  return (
    <>
      <div className="   bg-slate-800 dark:bg-white dark:text-slate-800 text-white  shadow-md shadow-slate-800 ">
        <div className="container px-3 sm:px-3 md:px-10 py-2 mx-auto flex justify-between items-center  ">
          <Link to={""} className="text-md sm:text-2xl font-bold pe-2 md:pe-0">
            YUMMY
          </Link>
        {loc.pathname!="/Favourite" &&   <input
            onChange={(e) => setquery(e.target.value)}
        
            type="text"
            placeholder="choose your food"
            className="  text-sm md:text-xl dark:bg-slate-800 dark:text-white text-black  p-2 rounded-md w-[140px]  sm:w-[200px] md:w-[400px] xl:w-[500px]"
          />}
          <div className=" text-sm icons  flex items-center gap-4 sm:text-xl ps-2 md:ps-0">
            <Link to={"/Favourite"}>
              {" "}
              <i className="fas fa-heart"></i>
            </Link>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                onChange={darkmode}
                ref={ref}
                id="toggle"
                className=" dark:shadow-md dark:shadow-black toggle-checkbox absolute shadow-md block w-5 h-5 rounded-full bg-slate-600 border-4 appearance-none cursor-pointer"
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
