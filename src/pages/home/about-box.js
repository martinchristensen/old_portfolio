import React from 'react';
import {BoxBufferGeometry} from "three";
import {Html} from "@react-three/drei";

const AboutBox = ({ mouseHover, select, scale, position, rotation, color, visible }) => {
    const cube = React.useRef();

    const handleMouseHover = (e) => {
      return mouseHover(e);
    }

    const handleSelect = (e) => {
        return select(e);
    }

    return (
        <mesh scale={scale}  position={position} castShadow={true} rotation={rotation} visible={visible} ref={cube}
              onPointerOver={(e) => handleMouseHover(true)}
              onPointerLeave={(e) => handleMouseHover(false)}
              onClick={(e) => handleSelect('about-cube')}>
            <boxBufferGeometry />
            <meshPhongMaterial
                // color={color}
                color = {"#951f1f"}
            />
            {/*<Html transform={true} style={{userSelect: "none"}}>*/}
            {/*    <p>HEJ</p>*/}
            {/*</Html>*/}
        </mesh>
    );
};

export default AboutBox;