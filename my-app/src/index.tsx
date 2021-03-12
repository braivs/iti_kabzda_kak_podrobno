import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>Hello</div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

let a = {
  name: "Viktor",
  age: 18,
  address: {
    city: "Minsk",
    country: "Belarus"
  }
};

let users = [
  {
    name: "Viktor",
    age: 18,
    address: {
      city: "Minsk",
      country: "Belarus"
    }
  },
  {
    name: "Briws",
    age: 20,
    address: {
      city: "Arambol",
      country: "India"
    }
  }
]

let b: Array<string | number >;
b = [1,2,3,4,5];
b = [];
b = [1,2,3,4,5,6,8,9];
b = [1, 2, "hello", "yo"];
// b = [true, false];

console.log(b);