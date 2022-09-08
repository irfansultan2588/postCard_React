import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import dhani from './img/dhani.jpg';
import ghr from './img/ghr.jpg';
import frind from './img/frind.jpg';
import going from './img/going.jpg';
import PostCard from "./components/post";

const MainComponent = () => (
  <>



    <PostCard profileimg={dhani} title="SHAH NAWAZ DHANI FANS" text="Enjoying" postimg={dhani} />
    <PostCard profileimg={dhani} title="SHAH NAWAZ DHANI FANS" text="My Ghr" postimg={ghr} />
    <PostCard profileimg={dhani} title="SHAH NAWAZ DHANI FANS" text="My Frind" postimg={frind} />
    <PostCard profileimg={dhani} title="SHAH NAWAZ DHANI FANS" text="Going" postimg={going} />









  </>
)

ReactDOM.render(<MainComponent />, document.querySelector('#root'));