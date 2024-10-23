import React from "react";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">HOME</h1>
      <nav>
        <ul className="flex space-x-4">
          {["HOME", "NONE", "MOVIES", "GENERS", "OBNERS", "QENERS", "GENS"].map(
            (item) => (
              <li
                key={item}
                className={`${
                  item === "HOME" ? "border-b-2 border-red-500" : ""
                }`}
              >
                {item}
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
