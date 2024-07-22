
import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading= React.createElement("h1", {}, "Namaste Chanikya!");
// console.log(heading);

// const jsxheading= <h1 id="heading">Namaste Chanikya from JSX!</h1>  
// console.log(jsxheading);
// const root = ReactDOM.createRoot(document.getElementById('root'))   ;


// root.render(heading);

//React Element
const Title =()=>(
    <h1 tableIndex='5'>
        Namaste React using JSX, React Element.
    </h1>
)

// const data=api.getData();
    
//React Functional Component & It is component composition.
const HeadingComponent= () =>(
    <div id='container'>
    {Title()}
    {/* <Title/> */}
    <h1 className='heading'>React from the Functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);