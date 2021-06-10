import React, { useState,useRef } from "react";


import './App.css';

function App() {
  const [clicked,setClicked] = useState(null);
  // const [clicked2,setClicked2] = useState(false);

  // const styles= {
  //   annotations:{
  //     display:clicked?"block":"none",
  //   },
  //   annotations1:{
  //     display:clicked2?"block":"none",
  //   }
  // }
  
  
  
  const helmet = useRef(null);
  function resetFunc(val){
    setClicked(val);
    const currOrbitVal = helmet.current.getCameraOrbit();
    console.log(currOrbitVal);
    // helmet.current.autoRotate = true;
    helmet.current.cameraOrbit = "0deg 75deg 105%";
    
  }
  function setCameraOrbit(orbit){
    const currOrbitVal = helmet.current.getCameraOrbit();
    console.log(currOrbitVal);
    // helmet.current.panning = false;
    helmet.current.cameraOrbit = "0deg 75deg 105%";
    helmet.current.cameraOrbit = orbit;
    // helmet.current.autoRotate = false;
    // modelViewer.cameraOrbit = orbit;
  }
  
  return (
    <>
      <center>
      <model-viewer
        ref={helmet}
        id="helmet"
        camera-controls 
        alt="A 3d helmet"
        src="./Helmet.glb"
        loading = "lazy"
        // auto-rotate
        shadow-intesity = "1"
        // ar
        camera-orbit="0deg 75deg 155%"
        //trying to restrict camera movement to one axis (horizontally)
        //Mentioned way is setting phi of max-camera-orbit and min-camera-orbit to same value

        max-camera-orbit = "auto 80deg 155%"
        min-camera-orbit = "auto 80deg 155%"

        shadow-intensity="1" shadow-softness="0"
      >
      {/* camera-orbit="300deg 75deg 100%" */}
        <button className="Annot"
        value="button1"
        onClick={(e)=>setClicked(e.target.value)}
        slot="hotspot-ear" data-position="-990.94 880.717 -734.668" data-normal="-0.9960 0.0555 0.69162">
        {( clicked === "button1")?
          <div id="annotation" >The Headphones
          </div>
        :null}
          
        </button>
        <button className="Annot" 
        value="button2"
        onClick={(e)=>setClicked(e.target.value)}
        slot="hotspot-mouth" data-position="-762.051 -275.613 333.8038" data-normal="0 -0.2331 0.9724">
        {(clicked==="button2")?
          <div id="annotation" >The HeadLights
          </div>:null}
        </button>
        <button onClick={()=>resetFunc("")}>Reset</button>
        
      </model-viewer>
      </center>
      <button onClick={()=>setCameraOrbit("300deg 75deg 100%")}>EAR</button>
      <button onClick={()=>setCameraOrbit("-10deg 120deg 100%")}>Lights</button>
    </>
    
  );
}

export default App;
