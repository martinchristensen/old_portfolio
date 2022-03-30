import React from 'react';
import floorMap from "../../assets/textures/floor-grid.png"
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";

const Floor = () => {

    const texture = useLoader(TextureLoader, floorMap)

    return (
        <mesh rotation={[-Math.PI/2, 0, 0]} scale={1} position={[0, 0, -9.2]} receiveShadow={true} >
            <planeGeometry args={[200, 50]} />
            <meshStandardMaterial color={"#fff"} map={texture} />
        </mesh>
    );
};

export default Floor;