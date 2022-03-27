import React from 'react';
import floorMap from "../../assets/textures/floor-grid.png"
import {useFrame, useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {SpriteMaterial} from "three/src/materials/Materials";

const Floor = () => {

    const texture = useLoader(TextureLoader, floorMap)

    return (
        <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, 0, 1]}>
            <planeGeometry args={[200, 50, 1]} />
            <meshBasicMaterial attach={"material"} visible={true} map={texture} color={"#3770e3"} />
        </mesh>
    );
};

export default Floor;