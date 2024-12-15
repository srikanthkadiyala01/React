/*
I need to create this structure
<div id="parent">
        <div id="child">
                <h1>Nested Tags in React</h1>
        </div>
</div>

*/

// heading = React.createElement("h1", {id: "heading", datatest: "table"}, "Hello world from React!")
// console.log(heading)
// root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)

import React from "react";
import ReactDOM from "react-dom/client"

heading = React.createElement(
        "div",
        {id: "parent"},
        React.createElement(
                "div",
                 {id: "child"},
                  [React.createElement("h1",{}, "Nested Tags in React"), React.createElement("h2",{}, "Nested Tags in React")]
                  )
                  )
// if we wan't to write more html it will become messy, to make our life easy in creating tags we use JSX.
// One thing to Note is even without JSX we can create webpages without JSX

root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)