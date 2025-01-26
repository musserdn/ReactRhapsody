import React from 'react';
import Project from '../components/project';


export default function Portfolio() {
    const projects = [
        {
            title: 'Foodie',
            imgSrc: 'https://github.com/musserdn/Foodie/raw/main/assets/images/Home_SS.png',
            projectLink: 'https://musserdn.github.io/Foodie/'
        },
        {
            title: 'InstantWeather',
            imgSrc: 'https://github.com/musserdn/instantWeather/raw/main/Assets/iweather_screenshot.png',
            projectLink: 'https://instantweather.onrender.com/'
        },
        {
            title: 'Bossmode',
            imgSrc: 'https://github.com/musserdn/BossMode/raw/main/Assets/bossmode.png',
            projectLink: 'https://github.com/musserdn/BossMode'
        },
        {
            title: 'README Generator',
            imgSrc: 'https://github.com/musserdn/instantWeather/raw/main/Assets/iweather_screenshot.png',
            projectLink: 'https://github.com/musserdn/challenges/tree/main/07-ReadMe_Challenge'
        },
        {
            title: 'Vehicle Builder',
            imgSrc: 'https://github.com/musserdn/instantWeather/raw/main/Assets/iweather_screenshot.png',
            projectLink: 'https://github.com/musserdn/challenges/tree/main/08-Typescript_Vehicle_Builder'
        }
    ];
    return (
        <div className="container my-4">
            <div className="row">
                {projects.map((proj, index) => (
                    <Project
                        key={index}
                        title={proj.title}
                        imgSrc={proj.imgSrc}
                        projectLink={proj.projectLink}
                    />
                ))}
            </div>
        </div>
    );
}