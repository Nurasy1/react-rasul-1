import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {id: 1, message: "Hi, How are you?", likesCount: 20},
    {id: 2, message: "It's my first post", likesCount: 15},
    {id: 3, message: "Bababui", likesCount: 15}
]

let dialogs = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Dmitry'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Valera'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Rasul'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is it going'},
    {id: 3, message: 'YO'},
    {id: 4, message: 'YO'},
    {id: 5, message: 'YO'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
