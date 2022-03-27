import React, {Suspense} from 'react';
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import RobotArm from "./robot-arm";
import Floor from "./Floor";

const ThreeScene = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 5, 8]} zoom={0.35}/>
            <OrbitControls/>
            <Suspense fallback={null}>
                <RobotArm scale={0.5} position={[0, 0, 0]} rotation={[0,Math.PI,0]} castShadow/>
                <Floor recieveShadow/>
            </Suspense>
            <ambientLight args={[0xffffff]} intensity={0.25} />
            {/*<directionalLight position={[0, 0, 5]} intensity={0.5} />*/}
        </>
    );
};

export default ThreeScene;