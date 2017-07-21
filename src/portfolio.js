import React from 'react';

class Portfolio extends React.Component {
    constructor() {
        super();

        this.state = {
            projects: [
                {
                    "name": "Portfolio",
                    "description": "Current portfolio",
                    "url": "https://maxbogus.github.io/portfolio_project/",
                    "github": "https://github.com/maxbogus/portfolio_project",
                    "wide_img": "img/driver_gett_zone-wide.png",
                    "small_img": "img/driver_gett_zone-small.png",
                    "skills": [
                        "JavaScript", "React", "ES6", "Bootstrap4"
                    ]
                },
                {
                    "name": "Driver",
                    "description": "Driver portal.",
                    "url": "https://driver.gett.zone/",
                    "github": null,
                    "wide_img": "img/driver_gett_zone-wide.png",
                    "small_img": "img/driver_gett_zone-small.png",
                    "skills": [
                        "JavaScript", "Python", "Django", "React", "PostgreSQL", "ES6"
                    ]
                },
                {
                    "name": "Task queue",
                    "description": "Simple task tracker with server-side.",
                    "url": null,
                    "github": "//github.com/maxbogus/tasks_queue",
                    "wide_img": "img/task_queue-wide.png",
                    "small_img": "img/task_queue-small.png",
                    "skills": [
                        "JavaScript", "Python", "Flask", "AngularJS", "AJAX", "Tornado"
                    ]
                },
                {
                    "name": "Neighborhood Map",
                    "description": "A single-page with an area and various points of interest.",
                    "url": "https://maxbogus.github.io/Neighborhood_Map_Project/",
                    "github": "//github.com/maxbogus/fullstack-nanodegree-vm/tree/master/vagrant/catalog",
                    "wide_img": "img/neighborhood_map-wide.png",
                    "small_img": "img/neighborhood_map-small.png",
                    "skills": [
                        "JavaScript", "HTML", "CSS", "KnockoutJS", "AJAX"
                    ]
                },
                {
                    "name": "Organizational structure",
                    "description": "Small crud application to visualize organizational structure.",
                    "url": null,
                    "github": "//github.com/maxbogus/fullstack-nanodegree-vm/tree/master/vagrant/catalog",
                    "wide_img": "img/org_structure-wide.png",
                    "small_img": "img/org_structure-small.png",
                    "skills": [
                        "Python", "Flask", "HTML", "CSS", "SQL"
                    ]
                },
                {
                    "name": "Tournament",
                    "description": "Swiss system tournament system.",
                    "url": null,
                    "github": "//github.com/maxbogus/fullstack-nanodegree-vm/",
                    "wide_img": "img/tournament_test-wide.png",
                    "small_img": "img/tournament_test-small.png",
                    "skills": [
                        "Python", "PostgreSQL", "Vagrant"
                    ]
                },
                {
                    "name": "Blog",
                    "description": "Multi-user blog application.",
                    "url": "//blog-140923.appspot.com/",
                    "github": "//github.com/maxbogus/fullstack-nanodegree-vm/",
                    "wide_img": "img/blog_project-wide.png",
                    "small_img": "img/blog_project-small.png",
                    "skills": [
                        "Python", "Google App Engine", "HTML"
                    ]
                },
                {
                    "name": "Movie Site",
                    "description": "Favorite movies.",
                    "url": "//maxbogus.github.io/movie_trailer_website/fresh_tomatoes.html",
                    "github": "//github.com/maxbogus/fullstack-nanodegree-vm/",
                    "wide_img": "img/movie_site-wide.png",
                    "small_img": "img/movie_site-small.png",
                    "skills": [
                        "Python", "CSS", "HTML"
                    ]
                }
            ],
            filteredProjects: [],
            showWarning: false,
            currentSkill: null
        };
    }

    componentWillMount() {
        this.setState({filteredProjects: this.state.projects})
    }

    _filterBySkill(event) {
        let skillName = event.target.value;

        let exist = this.state.projects.filter(project => project.skills.indexOf(skillName) >= 0);
        if (exist) {
            this.setState({currentSkill: skillName, filteredProjects: exist})
        }
    }

    _clearFilter() {
        this.setState({currentSkill: null});
    }

    render() {
        let projects = this.state.filteredProjects.map((project, index) => {
            let skills = project.skills.map((skill, index) => {
                return <button key={index} value={skill} type="button" onClick={this._filterBySkill.bind(this)}
                               className="btn btn-secondary">{skill}</button>
            });
            return (
                <div key={index}>
                    <h3 className="text-uppercase">{project.name}</h3>

                    <div className="btn-group btn-group-sm" role="group">
                        {skills}
                    </div>
                    <br />
                    <picture>
                        <source srcSet={project.wide_img} media="(min-width: 800px)"/>
                        <img src={project.small_img} className="img-fluid"/>
                    </picture>
                    <br />
                    <p>{project.description}</p>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary"><a
                            href={project.url} style={{disabled: project.url !== null}}>Project
                            url</a></button>
                        <button type="button" className="btn btn-secondary"><a
                            href={project.github} style={{disabled: project.github !== null}}>Github</a>
                        </button>
                    </div>
                    <hr />
                </div>
            )
        }), warning = (this.state.currentSkill !== null) ?
            <div className="alert alert-success alert-dismissible" onClick={this._clearFilter.bind(this)} role="alert">
                <p> You have chosen <b>{this.state.currentSkill}</b>. Click on this message to clear filter.</p>
            </div> : null;

        return (
            <div className="container">
                <header className="row">
                    <div className="col col-xs-4">
                        <picture>
                            <source className="img-fluid rounded float-left" srcSet="img/logo-wide.jpg"
                                    media="(min-width: 800px)"/>
                            <img className="img-fluid rounded" src="img/logo-small.jpg" alt="Logo"/>
                        </picture>
                    </div>
                    <div className="col">
                        <h1>Max Boguslavskiy</h1>
                        <h4>Full Stack Team Lead</h4>
                    </div>
                </header>
                <section className="row">
                    <div className="col">
                        <hr />
                        <picture>
                            <source srcSet="img/clouds-wide.jpg" media="(min-width: 800px)"/>
                            <img className="img-fluid" src="img/clouds-small.jpg" alt="Main Image"/>
                        </picture>
                        <p className="text-center">
                            My name is Max Boguslavskiy. I'm working in IT industry for 8+ years.
                            I worked in Banki.ru, Acronis, Innova, Luxoft and Superscape.
                            Currently i'm working as a Full Stack Team Lead at Gett.
                        </p>
                        <h2 className="col-12 col-md-auto text-center">Featured Work</h2>
                        {warning}
                    </div>
                </section>
                <section className="row">
                    <div className="col col-md-auto">
                        {projects}
                    </div>
                </section>
                <footer className="row">
                    <div className="col">
                        <a href="//www.facebook.com/maxbogusblog/"><img srcSet="img/if_square-facebook_317727.png"/></a>
                    </div>
                    <div className="col">
                        <a href="//maxbogus.blogspot.ru/"><img srcSet="img/if_blogger_28283.png"/></a>
                    </div>
                    <div className="col">
                        <a href="//github.com/maxbogus/"><img srcSet="img/if_github_1632512.png"/></a>
                    </div>
                    <div className="col">
                        <a id="codewars" href="//www.codewars.com/r/WcTjGg">
                            <img className="img-fluid" src="img/if_codewars_1586249.png"/>
                        </a>
                    </div>
                </footer>
                <footer className="row">
                    <div className="offset-4 col-3">
                        <p>©Max Boguslavskiy</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Portfolio;
