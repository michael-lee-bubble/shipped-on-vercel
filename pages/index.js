// pages/index.js
import Head from 'next/head';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Michael's Sandbox</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
                />
            </Head>
            <header>
                <div className="header-title">
                    <a href="https://pythonanywhere-live.vercel.app/">Michael's Sandbox</a>
                </div>
                <ul className="header-menu">
                    <li>
                        <a href="https://github.com/michael-lee-bubble/pythonanywhere-live">GitHub</a>
                    </li>
                </ul>
            </header>
            <section className="welcome-section">
                <h1>Welcome to Michael's Sandbox</h1>
                <p>This is a space where I explore and showcase my projects in Python and data science.</p>
                <p>
                    I develop features based on my day-to-day needs and build tools firsthand to make my
                    work a little easier.
                </p>
                <p>
                    If you have any questions or suggestions, don't hesitate to reach out. Feel free to
                    browse!
                </p>
            </section>
            <section className="about-section">
                <img
                    src="/bubble_headshot.jpeg"
                    alt="Michael's Profile Picture"
                    className="profile-picture"
                />
                <div className="bio">
                    <h2>About Me</h2>
                    <p>
                        Hi there! I'm Michael Lee. Graduated from Yale with a major in Political Science and a
                        minor in Chinese studies.
                    </p>
                    <p>
                        Currently, I'm a key member of the data team at <a href="https://bubble.io">Bubble</a>.
                        My role involves building data models, maintaining dashboards, and interpreting data to
                        support the Success organization. My daily toolkit includes Stitch, dbt, Looker, SQL,
                        and Python.
                    </p>
                    <p>
                        Outside of work, I enjoy listening to music, studying topics about data, and building
                        this website!
                    </p>
                    <div className="social-icons">
                        <a href="mailto:michaellee1104@gmail.com" className="social-icon">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/michaellee1104/" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
