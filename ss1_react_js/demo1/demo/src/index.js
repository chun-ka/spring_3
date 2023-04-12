import React from "react";
import ReactDOM from "react-dom/client";
const name = "trung";
const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root.render(
    React.createElement("h1", { style: { textAlign: "center" } }, name)
);
root1.render(
    React.createElement("h5", { style: { textAlign: "center" } }, name)
);
