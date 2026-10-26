
import Project from '../components/Project';

export default function Portfolio() {
    const projects = [
        {
            title: 'Foodie',
            description: 'A food-focused application designed around discovery and usability.',
            imgSrc: '/assets/Foodie_ss.png',
            projectLink: 'https://musserdn.github.io/Foodie/'
        },
        {
            title: 'InstantWeather',
            description: 'A weather application that makes current conditions easy to check.',
            imgSrc: '/assets/iweather_ss.png',
            projectLink: 'https://instantweather.onrender.com/'
        },
        {
            title: 'RoomReady',
            description: 'A web application focused on organizing a room-readiness workflow.',
            imgSrc: '/assets/rr_ss.png',
            projectLink: 'https://roomready.onrender.com/'
        },
        {
            title: 'SproutSwap',
            description: 'An application centered on exchanging plants and gardening resources.',
            imgSrc: '/assets/sproutSwap.png',
            projectLink: 'https://sproutswap.onrender.com/'
        },
        {
            title: 'Git For Hire',
            description: 'A hiring-focused web project connecting software talent with opportunities.',
            imgSrc: '/assets/pc_ss.png',
            projectLink: 'https://gitforhire.netlify.app/'
        },
        {
            title: 'AuthKanban',
            description: 'A kanban-style application with authentication.',
            imgSrc: '/assets/kanban_ss.png',
            projectLink: 'https://authkanban.onrender.com/'
        },
        {
            title: 'Bossmode',
            description: 'A web project demonstrating application design and implementation.',
            imgSrc: '/assets/bossmode_ss.png',
            projectLink: 'https://github.com/musserdn/BossMode'
        },
        {
            title: 'ReactRhapsody',
            description: 'A React-based portfolio project showcasing web development skills.',
            imgSrc: '/assets/ReactRhapsody_ss.png',
            projectLink: 'https://reactrhapsody.netlify.app/'
        },
        {
            title: 'GraphQLibrary',
            description: 'A library-themed application built around a GraphQL-based experience.',
            imgSrc: '/assets/graphqLibrary_ss.png',
            projectLink: 'https://graphqlibrary.onrender.com/'
        },
        {
            title: 'README Generator',
            description: 'A command-line tool that generates project README files.',
            imgSrc: '/assets/readme_ss.png',
            projectLink: 'https://github.com/musserdn/challenges/tree/main/07-ReadMe_Challenge'
        },
        {
            title: 'Vehicle Builder',
            description: 'A TypeScript application for working with vehicle objects.',
            imgSrc: '/assets/vehicle_ss.png',
            projectLink: 'https://github.com/musserdn/challenges/tree/main/08-Typescript_Vehicle_Builder'
        },
        {
            title: 'MongooseSocial',
            description: 'A social-network project using MongoDB and Mongoose.',
            imgSrc: '/assets/mongooseSocial_SS.png',
            projectLink: 'https://github.com/musserdn/MongooseSocial'
        }
    ];

    return (
        <section className="container my-4" aria-labelledby="portfolio-heading">
            <div className="mb-4">
                <h1 id="portfolio-heading" className="fw-bold">
                    Selected Projects
                </h1>
                <p className="text-secondary mb-0">
                    A selection of products and technical projects I have built.
                </p>
            </div>

            <div className="row">
                {projects.map((proj) => (
                    <Project
                        key={proj.title}
                        title={proj.title}
                        description={proj.description}
                        imgSrc={proj.imgSrc}
                        projectLink={proj.projectLink}
                    />
                ))}
            </div>
        </section>
    );
}
