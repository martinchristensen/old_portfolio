import React from 'react';

const Home = () => {
    return (
        <div className={'home'} id={'page-container'}>
            <h1>Welcome to my personal website</h1>
            <p>
                Hi there. My name is Martin and this is my personal website. I know it looks kinda empty and that's because it is.
                <br/> You can expect much more content here in the future. I will primarily display my various technical skills
                <br/> and knowledge related to robotics.
                <br/> This site is not made ´mobile first´. I'll make it phone friendly once I've finished my article on numerical integration.
            </p>
        </div>
    );
};

export default Home;