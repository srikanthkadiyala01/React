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

heading = React.createElement(
        "div",
        {id: "parent"},
        React.createElement(
                "div",
                 {id: "child"},
                  [React.createElement("h1",{}, "Nested Tags in React"), React.createElement("h2",{}, "Nested Tags in React")]
                  )
                  )
root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)