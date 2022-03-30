import React from 'react';

const BgPlane = () => {
    return (
        <mesh rotation={[0, 0, 0]} scale={3} position={[0, 70, -500]} >
            <planeGeometry args={[500, 120]} />
            <meshStandardMaterial color={"#fff"}  />
        </mesh>
    );
};

export default BgPlane;