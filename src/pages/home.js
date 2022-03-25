import React from 'react';

const Home = () => {
    return (
        <>
            <h1 style={{padding: "50px 0 0 50px"}}>Welcome to my personal website</h1>
            <p style={{paddingLeft: 50}}>
                Hi there. My name is Martin and this is my personal website. I know it looks kinda empty and that's because it is.
                <br/> You can expect much more content here in the future. I will primarily display my various technical skills
                <br/> and knowledge related to robotics. Feel free to take a look at the code for this project at <a href={"https://github.com/martinchristensen/portfolio"} target={"_blank"}>github</a> page.
            </p>
        </>
    );
};

export default Home;