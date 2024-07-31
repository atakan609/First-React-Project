import "./App.css";
import { LoadingScreen } from "./loadingScreen/loadingScreen";
import { Navbar } from "./navbar/navbar";
import { Page1 } from "./page1/page1";
import { Page2 } from "./page2/page2";
import { Page3 } from "./page3/page3";
import { Page4 } from "./page4/page4";
import { Page5 } from "./page5/page5";
import React, { useEffect, useRef } from "react";

function App() {
  const loadScreen = useRef();
  const page2 = useRef();

  useEffect(() => {
    loadScreen.current.loadScreenSettings(".selam");
    loadScreen.current.windowLoadAnimation().play();
    page2.current.p2Settings()
    page2.current.textSettings()
    page2.current.p2LoadAnimation()
    
  }, []);

  return (
    <>
      <LoadingScreen ref={loadScreen} />
      <Navbar />
        <div className="main w-screen h-auto flex flex-col items-center bg-slate-900">
          <Page1></Page1>
          <Page2 ref={page2}></Page2>
          <div className="filler1 h-screen w-screen"></div>
          <div className="filler2 h-screen w-screen"></div>
          <div className="filler3 h-screen w-screen"></div>
          <Page3></Page3>
          <Page4></Page4>
          <Page5></Page5>
        </div>
    </>
  );
}

export default App;
