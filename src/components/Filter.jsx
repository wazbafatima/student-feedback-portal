import { useState } from "react";

const Filter = ({ setFilter }) => {
  const [active, setActive] = useState("all");

  const handleClick = (value) => {
    setFilter(value);
    setActive(value);
  };

  const btnClass = (value) =>
    `px-4 py-2 rounded-full font-semibold transition-all ${
      active === value
        ? "bg-indigo-600 text-white shadow-lg"
        : "bg-white border border-indigo-400 text-indigo-600 hover:bg-indigo-50"
    }`;

  return (
    <div className="flex gap-3">
      <button className={btnClass("all")} onClick={() => handleClick("all")}>
        Show All
      </button>
      <button className={btnClass("4")} onClick={() => handleClick("4")}>
        4⭐ & Above
      </button>
      <button className={btnClass("5")} onClick={() => handleClick("5")}>
        5⭐ Only
      </button>
    </div>
  );
};

export default Filter;
