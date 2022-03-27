import React, {Suspense} from 'react';
import '../../components/threejs.css'
import ThreeScene from "./three-scene";
import {Canvas} from "@react-three/fiber";

const Home = () => {

    return (
        <Canvas className={"full-size-canvas"} >
            <ThreeScene />
        </Canvas>
    );
};

export default Home;