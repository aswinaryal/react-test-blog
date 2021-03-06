import React from 'react' ;
import HomeBg from '../img/home-bg.jpg';

export default function Header(){
    return(
        // <!-- Page Header -->
        <header className="masthead" style={{ backgroundImage: `url(${HomeBg})` }}>
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                    <h1>Simple Blog</h1>
                    <span className="subheading">A Blog by Ajay Dhakal</span>
                </div>
                </div>
            </div>
            </div>
        </header>
    );
}