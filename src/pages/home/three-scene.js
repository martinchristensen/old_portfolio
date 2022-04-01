    import React, {Suspense, useEffect, useRef, useState} from 'react';
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";
import RobotArm from "./robot-arm";
import Floor from "./floor";
import AboutBox from "./about-box";
import BgPlane from "./bg-plane";
import {useFrame} from "@react-three/fiber";

const ThreeScene = ({pointer}) => {
    const camerasRef = useRef(null);
    const camPos = [0, 2, 17];
    const [workspace, setWorkspace] = useState()
    const [pointAtAbout, setPointAtAbout] = useState(false);
    const [cube, setCube] = useState(null);
    const [holdingAbout, setHoldingAbout] = useState(false)

    const selectCube = (cubeName) => {
        if(cube===null) {
            setCube(cubeName)
        }
    }

    const haveAboutBox = (e) => {
        setHoldingAbout(e)
    }

    const workRay = (ray) => {
        setWorkspace(ray);
    }

    const mouseHoverAbout = (e) => {
      setPointAtAbout(e);
      pointer(e, cube);
    }

    useEffect(() => {
        if(camerasRef.current) {
            console.log(camerasRef.current)
        }
    }, [camerasRef.current])

    useFrame( (state) => {
    });

    return (
        <>
            <PerspectiveCamera ref={camerasRef} makeDefault position={camPos} rotation={[0,0,0]} zoom={1}/>
            <Suspense fallback={null}>
                {/*<OrbitControls/>*/}
                <RobotArm scale={0.5} position={[0, 0, 0]} rotation={[0,Math.PI,0]} castShadow={true}
                ray = {workspace}
                hoverAbout ={pointAtAbout}
                selected = {cube}
                haveAboutBox={(e) => haveAboutBox(e)}
                />
                <Floor />
                <AboutBox mouseHover={mouseHoverAbout} select={selectCube} scale={1.5} position={[-3, 0.75, 5]} color={"#81da1c"} visible={!holdingAbout} />
                <BgPlane />
                <mesh scale={1}  onPointerMove={(e) => workRay(e.ray)} visible={false}>
                    <sphereGeometry args={[6.25, 32, 16]}  />
                    <meshBasicMaterial color={"#000000"} wireframe />
                </mesh>
            </Suspense>
            <ambientLight args={["#ffffff", 0.25]} />
            <spotLight args={["#ffffff", 1]} position={[-15, 15, 5]} intensity={0.5} penumbra={0.5} angle={0.5} castShadow={true} />
        </>
    );
};

export default ThreeScene;