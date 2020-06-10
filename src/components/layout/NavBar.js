import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-dark mb-5">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand text-white text-lg brand-text" href="#">
                            MovieSeriesInfo
            </a>
                    </div>
                    <ul className="navbar-nav ml-auto text-light d-inline-block">
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fa fa-imdb fa-3x" id="imdb-logo" />
                        </li>
                        <li className="nav-item d-inline-block mr-4">
                            <i className="fa fa-id-card-o fa-3x" id="react-logo" />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
