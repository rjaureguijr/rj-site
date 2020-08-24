import React from 'react';

class Projects extends React.Component {
    render () {
        return (
            <div className="container">
                <h1>Rudy Jauregui</h1>
                <h2>Projects</h2>
                <div className="flex-column nav">
                    <li><a href="/projects/food-find" className="nav-link" target="_blank">FoodFind</a></li>
                    <li><a href="/projects/test" className="nav-link">...</a></li>
                    <li><a href="/projects/test" className="nav-link">...</a></li>
                </div>
            </div>
        );
    }
}

export default Projects;