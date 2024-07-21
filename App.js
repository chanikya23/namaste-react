/* 
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
*/
import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1= React.createElement("h1",{},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"this h1 is child1 from the actual react"),
        React.createElement("h2",{},"This is h2 child1")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"this is h1 from child2"),
        React.createElement("h2",{},"this is h2 from child2")
    ])
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading1);