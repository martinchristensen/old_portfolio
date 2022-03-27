import React, {Suspense} from 'react';
import '../../components/threejs.css'
import ThreeScene from "./three-scene";
import {Canvas} from "@react-three/fiber";

const Home = () => {

    return (
        <>
            <div style={disclaimer}>
                <h1>Welcome to my personal website</h1>
                <p>
                    Hi there. My name is Martin and this is my personal website. I know it looks kinda empty and that's because it is.
                    <br/> You can expect much more content here in the future. I will primarily display my various technical skills
                    <br/> and knowledge related to robotics. If you are curious the code for this project is available on <a href={"https://github.com/martinchristensen/portfolio"} target={"_blank"}>github</a>.
                </p>
                <h3>
                    This landing page is very much a work in progress!
                </h3>
                <span style={{fontSize: "0.8rem"}}>Model by <a href={"https://sketchfab.com/3d-models/ux3d-industrial-robot-d8e8948191684a66a2f31c2e17e3481f"} target={"_blank"}>UX3D GmbH</a></span>
            </div>
            <Canvas className={"full-size-canvas"} shadows={true}>
                <ThreeScene />
            </Canvas>
        </>
    );
};

export default Home;

const disclaimer = {
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.41)",
    position: "absolute",
    padding: 50,
    top:0,
    left: 0,
    width: 500,
}