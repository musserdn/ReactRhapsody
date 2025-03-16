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
            imgSrc: '/assets/pc_ss.png',
            projectLink: 'https://gitforhire.netlify.app/'
        },
        {
            title: 'AuthKanban',
            imgSrc: '/assets/kanban_ss.png',
            projectLink: 'https://authkanban.onrender.com/'
        },
        {
            title: 'RoomReady',
            imgSrc: '/assets/rr_ss.png',
            projectLink: 'https://roomready.onrender.com/'
        },
        {
            title: 'MongooseSocial',
            imgSrc: '/assets/mongooseSocial_ss.png',
            projectLink: 'https://github.com/musserdn/MongooseSocial'
        },
        {
            title: 'GraphQLibrary',
            imgSrc: './assets/graphqlibrary_ss.png',
            projectLink: 'https://graphqlibrary.onrender.com/'
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