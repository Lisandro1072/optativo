import { useState } from "react";
import { Name } from "./components/name";
import { Paragraph } from "./components/paragraph";
import { Profile } from "./components/profile";
import { Button } from "./components/button";
import { Button1 } from "./components/button1";
import "./App.css";

function App() {
  return (
    <>
      <div className="card1">
        <Profile></Profile>
        <Name></Name>
        <Paragraph></Paragraph>
        <div className="card2">
        <Button></Button>
        <Button1></Button1>
      </div>
      </div>
      
    </>
  );
}

export default App;
