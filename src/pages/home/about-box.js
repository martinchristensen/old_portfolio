import React from 'react';
import {BoxBufferGeometry} from "three";

const AboutBox = ({ mouseHover, select}) => {
    const handleMouseHover = (e) => {
      return mouseHover(e);
    }

    const handleSelect = (e) => {
        return select(e);
    }

    return (
        <mesh scale={1.5}  position={[-3, 0.75, 5]} castShadow={true}
              onPointerOver={(e) => handleMouseHover(true)}
              onPointerLeave={(e) => handleMouseHover(false)}
              onClick={(e) => handleSelect('about-cube')}>
            <boxBufferGeometry />
            <meshPhongMaterial color={"#81da1c"} />
        </mesh>
    );
};

export default AboutBox;