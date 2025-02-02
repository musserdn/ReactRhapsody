import Project from '../components/Projects';


export default function Portfolio() {
    const projects = [
        {
            title: 'Foodie',
            imgSrc: '/assets/Foodie_ss.png',
            projectLink: 'https://musserdn.github.io/Foodie/'
        },
        {
            title: 'README Generator',
            imgSrc: '/assets/readme_ss.png',
            projectLink: 'https://github.com/musserdn/challenges/tree/main/07-ReadMe_Challenge'
        },
        {
            title: 'Vehicle Builder',
            imgSrc: '/assets/vehicle_ss.png',
            projectLink: 'https://github.com/musserdn/challenges/tree/main/08-Typescript_Vehicle_Builder'
        },
        {
            title: 'InstantWeather',
            imgSrc: '/assets/iweather_ss.png',
            projectLink: 'https://instantweather.onrender.com/'
        },
        {
            title: 'Bossmode',
            imgSrc: '/assets/bossmode_ss.png',
            projectLink: 'https://github.com/musserdn/BossMode'
        },
        {
            title: 'ReactRhapsody',
            imgSrc: '/assets/ReactRhapsody_ss.png',
            projectLink: 'https://reactrhapsody.netlify.app/'
        },
        {
            title: 'Git For Hire',
            imgSrc: '/assets/pcss_ss.png',
            projectLink: 'https://gitforhire.netlify.app/'
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