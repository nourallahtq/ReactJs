import React from "react";
import { createRoot } from "react-dom/client";

const fName = "Nour";
const lName = "Takie";
const currentYear = new Date().getFullYear();

const img = "https://picsum.photos/200";

const container = document.getElementById("root");
const root = createRoot(container);

const customStyle = {
  color: "blue",
  fontSize: "20px",
  border: "1px solid black"
};

root.render(
  <div>
    <h1 className="heading">Hello {`${fName} ${lName}`}!</h1>
    <img src={img + "?grayscale"} alt="img" />
    <p>its only test {Math.floor(Math.random() * 10)}</p>
    <p>copyright {currentYear}</p>
  </div>
);
