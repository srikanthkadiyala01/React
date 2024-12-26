import React from "react";
import ReactDOM from "react-dom/client"

// heading = React.createElement("h1", {id: "heading"}, "React Tutorial")

//JSX heading
// JSX code is transfiled before it reaches JS Engine. Transfiling is done by Parcel. Parcel Uses Babel to transfile.
// Babel Transfiles JSX Code  to React.createElement ==> ReactElement-JS Object => HTMLElement(render )
// heading = (<h1>React Tutorial</h1>)
// console.log(heading)

const ele = <span>React Element</span>


const HeadingComponent = () => (<div id="container">
        <h1>Heading Component</h1>
        {title}
        <FooterComponent />
        {FooterComponent()}
        {10+2}
        
</div>)

const FooterComponent = () => (<div id="footer">
        <h1>Fotter Component</h1>
        
</div>)

const title = (<div id="title">
        {ele}
        <h1>Title Component</h1>
</div>)




root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)