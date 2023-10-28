import React from 'react';
import ReactDOM from 'react-dom';
var parent=[React.createElement("p",{},"helloworld")]

var htmlroot=(document.getElementById("root"))
var root=(ReactDOM.createRoot(htmlroot))
root.render(parent)