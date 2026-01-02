import React from 'react';

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                
            </div>

            <section className="features">
                <div className="feature">
                    <h3>Relaxation</h3>
                    <p>Unwind in our peaceful environment</p>
                </div>
                <div className="feature">
                    <h3>Adventure</h3>
                    <p>Explore exciting activities</p>
                </div>
                <div className="feature">
                    <h3>Wellness</h3>
                    <p>Rejuvenate your mind and body</p>
                </div>
            </section>

            <section className="about">
                <h2>About Us</h2>
                <p>
                    Repa Retreat offers a unique experience combining comfort, nature, and 
                    adventure. Whether you're looking for a peaceful escape or an exciting 
                    getaway, we have something for everyone.
                </p>
            </section>

            <footer className="home-footer">
                <p>&copy; 2024 Repa Retreat. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;