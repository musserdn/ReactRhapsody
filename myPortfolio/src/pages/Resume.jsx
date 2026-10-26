
export default function Resume() {
    return (
        <main className="container py-5 resume">
            <header className="resume-section">
                <p className="resume-label mb-2">Product Leadership</p>

                <h1 className="display-5 fw-bold mb-3">
                    Dan Musser
                </h1>

                <p className="resume-summary mb-0">
                    Product leader with 10+ years of experience connecting
                    business strategy, operational expertise, and technology
                    to deliver measurable business results. Experienced in
                    enterprise product management, warehouse operations,
                    technical delivery, and cross-functional leadership.
                </p>
            </header>

            <div className="row g-5">
                <aside className="col-12 col-lg-4">
                    <section className="resume-section">
                        <h2 className="h5 fw-bold mb-3">Core Capabilities</h2>

                        <div>
                            {[
                                "Product Strategy",
                                "Product Management",
                                "Product Operations",
                                "Warehouse Management",
                                "Inventory Management",
                                "Operational Excellence",
                                "Stakeholder Management",
                                "Cross-Functional Leadership",
                                "Data-Driven Decision Making",
                                "Technical Delivery",
                                "Process Improvement",
                                "Agile Product Development"
                            ].map((skill) => (
                                <span className="resume-skill" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2 className="h5 fw-bold mb-3">Technology</h2>

                        <div>
                            {[
                                "SAP",
                                "Warehouse Management Systems",
                                "SQL",
                                "Microservices",
                                "REST APIs",
                                "Insomnia",
                                "Jira",
                                "Confluence",
                                "Kibana",
                                "Grafana",
                                "ServiceNow",
                                "Maximo",
                                "Workday",
                                "Smartsheet",
                                "UI/UX",
                                "Product Analytics",
                                "Product Health Metrics"
                            ].map((skill) => (
                                <span className="resume-skill" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="resume-section">
                        <h2 className="h5 fw-bold mb-3">Certifications</h2>

                        <p className="mb-2">
                            Certified Scrum Product Owner (CSPO)
                            <span className="d-block text-secondary small">
                                Scrum Alliance
                            </span>
                        </p>

                        <p className="mb-0">
                            Certified Professional in Agile Product Ownership
                            <span className="d-block text-secondary small">
                                ICAgile
                            </span>
                        </p>
                    </section>

                    <section className="resume-section">
                        <h2 className="h5 fw-bold mb-3">Education</h2>

                        <div className="mb-4">
                            <h3 className="h6 fw-bold mb-1">
                                Master of Public Health
                            </h3>
                            <p className="mb-1">
                                Environmental Health Sciences
                            </p>
                            <p className="text-secondary small mb-1">
                                University of Minnesota, Twin Cities
                            </p>
                            <p className="text-secondary small mb-0">
                                GPA: 3.9 / 4.0 | September 2013
                            </p>
                        </div>

                        <div>
                            <h3 className="h6 fw-bold mb-1">
                                Bachelor of Science
                            </h3>
                            <p className="mb-1">Chemical Engineering</p>
                            <p className="text-secondary small mb-1">
                                University of Minnesota Duluth
                            </p>
                            <p className="text-secondary small mb-0">
                                May 2007
                            </p>
                        </div>
                    </section>
                </aside>

                <div className="col-12 col-lg-8">
                    <section className="resume-section">
                        <h2 className="h4 fw-bold mb-4">
                            Professional Experience
                        </h2>

                        <article className="resume-accent mb-5">
                            <p className="resume-label mb-1">Target</p>

                            <h3 className="h5 fw-bold mb-1">
                                Senior Product Manager, Warehouse Management
                            </h3>

                            <p className="resume-date mb-3">
                                April 2022 - Present
                            </p>

                            <ul className="mb-0">
                                <li className="mb-2">
                                    Lead product initiatives focused on
                                    inventory location accuracy, operational
                                    efficiency, and warehouse safety.
                                </li>
                                <li className="mb-2">
                                    Improve inventory audit processes through
                                    automated and investigative approaches
                                    that help teams identify and correct
                                    inventory discrepancies.
                                </li>
                                <li className="mb-2">
                                    Partner with business stakeholders and
                                    engineering teams to define problems,
                                    prioritize opportunities, and deliver
                                    scalable product solutions.
                                </li>
                                <li className="mb-2">
                                    Enable better visibility into warehouse
                                    space, capacity, and utilization through
                                    data and product capabilities.
                                </li>
                                <li className="mb-2">
                                    Use data analysis and product health
                                    measures to evaluate outcomes, identify
                                    improvement opportunities, and guide
                                    prioritization.
                                </li>
                                <li>
                                    Support legacy system deprecation and
                                    technical improvements that reduce
                                    operational risk, incidents, and recovery
                                    effort.
                                </li>
                            </ul>
                        </article>

                        <article className="resume-accent mb-5">
                            <p className="resume-label mb-1">Target</p>

                            <h3 className="h5 fw-bold mb-1">
                                Lead Business Partner, Assets Protection
                                Technology
                            </h3>

                            <p className="resume-date mb-3">
                                June 2019 - April 2022
                            </p>

                            <ul className="mb-0">
                                <li className="mb-2">
                                    Led technology initiatives supporting
                                    assets protection, shortage reduction,
                                    operational safety, and store security.
                                </li>
                                <li className="mb-2">
                                    Developed camera replacement strategies
                                    across a portfolio of approximately
                                    160,000 cameras.
                                </li>
                                <li className="mb-2">
                                    Supported video technology capabilities
                                    for guest counting and real-time
                                    camera-based safety alerts.
                                </li>
                                <li className="mb-2">
                                    Partnered across business and technology
                                    teams to improve technology reliability,
                                    reduce downtime, and align investments
                                    with operational needs.
                                </li>
                                <li>
                                    Supported access-control capabilities
                                    and technology initiatives for Drive Up
                                    operations.
                                </li>
                            </ul>
                        </article>

                        <article className="resume-accent mb-5">
                            <p className="resume-label mb-1">Target</p>

                            <h3 className="h5 fw-bold mb-1">
                                Senior Program Owner, Property Management
                            </h3>

                            <p className="resume-date mb-3">
                                August 2014 - June 2019
                            </p>

                            <ul className="mb-0">
                                <li className="mb-2">
                                    Managed asset lifecycle strategies and
                                    property technology and maintenance
                                    initiatives across a large retail
                                    environment.
                                </li>
                                <li className="mb-2">
                                    Supported a capital investment program
                                    exceeding $30 million.
                                </li>
                                <li className="mb-2">
                                    Used data analysis and predictive
                                    modeling to identify equipment failure
                                    risks and improve preventative
                                    maintenance decisions.
                                </li>
                                <li className="mb-2">
                                    Managed vendor performance and supported
                                    sourcing decisions to improve service
                                    delivery and operational outcomes.
                                </li>
                                <li>
                                    Coordinated cross-functional partners to
                                    connect business needs, investment
                                    priorities, and execution.
                                </li>
                            </ul>
                        </article>

                        <article className="resume-accent">
                            <p className="resume-label mb-1">
                                Earlier Career
                            </p>

                            <h3 className="h5 fw-bold mb-1">
                                Environmental Engineering
                            </h3>

                            <p className="resume-date mb-3">
                                Bay West | 7 years
                            </p>

                            <p className="mb-0">
                                Built an analytical and systems-oriented
                                foundation through environmental engineering
                                work before transitioning into enterprise
                                operations, technology, and product
                                leadership.
                            </p>
                        </article>
                    </section>

                    <section className="resume-section mt-5">
                        <h2 className="h4 fw-bold mb-3">
                            Leadership Approach
                        </h2>

                        <p className="mb-0">
                            I start with the problem, use data to inform
                            decisions, and make trade-offs explicit. I bring
                            business and engineering partners together around
                            clear priorities, practical solutions, and
                            measurable outcomes. My combination of
                            operational experience and technical fluency
                            helps me connect strategic direction with
                            execution in complex enterprise environments.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
