import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <h2>Каких целей хотите достичь: </h2>
        <p>Очень хочу понять фронт, очень не понимаю</p>

        <h2>Какими технологиями уже владеете: </h2>
        <p>Бэк -  .net, asp.net, postgresql, mssql, docker, из фронта немного писал на angular </p>

        <h2> Расскажите о себе и своем опыте: </h2>
        <p>Разработчик .net, в промышленной разработке занимался созданием с нуля приложений типа Web Api, настраивал и создавал внешние и внутренние интеграции между сервисами, работал как с микросервисной архитектурой, так и с монолитом</p>
        
      </header>
    </div>
  );
}

export default App;
