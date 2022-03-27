import React, {Suspense, useEffect, useRef} from 'react';
import {Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import RobotArm from "./robot-arm";
import Floor from "./Floor";
import * as THREE from "three"

const ThreeScene = () => {
    const camerasRef = useRef(null);


    useEffect(() => {
        if(camerasRef.current) {
            console.log(camerasRef.current)
        }
    }, [camerasRef.current])

    return (
        <>
            <PerspectiveCamera ref={camerasRef} makeDefault position={[0, 9, 7]} rotation={[-0.95,0,0]} zoom={0.35}/>
            <Suspense fallback={null}>
                <RobotArm scale={0.5} position={[0, 0, 0]} rotation={[0,Math.PI,0]} castShadow={true}/>
                <Floor />
                {/*<Environment background>*/}
                {/*    <mesh scale={100}>*/}
                {/*        <sphereGeometry args={[1, 64, 64]} />*/}
                {/*        <meshBasicMaterial side={THREE.BackSide} color={"#0348d0"} />*/}
                {/*    </mesh>*/}
                {/*</Environment>*/}
            </Suspense>
            <ambientLight args={["#ffffff", 0.25]} />
            <spotLight args={["#ffffff", 1]} position={[-15, 15, 5]} intensity={0.5} penumbra={0.5} angle={0.5} castShadow={true} />
        </>
    );
};

export default ThreeScene;