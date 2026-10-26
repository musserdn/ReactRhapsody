
import Project from '../components/Project';
import { portfolioProjects } from '../data/siteData';

export default function Portfolio() {
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
                {portfolioProjects.map(({ title, description, imgSrc, projectLink }) => (
                    <Project
                        key={title}
                        title={title}
                        description={description}
                        imgSrc={imgSrc}
                        projectLink={projectLink}
                    />
                ))}
            </div>
        </section>
    );
}
