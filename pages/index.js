// pages/index.js
import Head from 'next/head';

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Michael's Sandbox</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
                <style>{`
          body {
            margin: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #333;
            color: #fff;
            padding: 25px 50px;
          }
          .header-title {
            font-size: 18px;
            font-weight: bold;
          }
          .header-title a {
            text-decoration: none;
            color: #fff;
            font-size: 18px;
          }
          .header-menu {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
          .header-menu li {
            display: inline;
            margin-left: 10px;
          }
          .header-menu a {
            text-decoration: none;
            color: #fff;
            font-size: 14px;
          }
          .welcome-section {
            padding: 50px;
            text-align: center;
            background-color: #f2f2f2;
          }
          .welcome-section h1 {
            margin: 0;
            font-size: 36px;
            color: #333;
          }
          .welcome-section p {
            font-size: 18px;
            color: #667;
          }
          .about-section {
            padding: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
          }
          .profile-picture {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-right: 30px;
          }
          .bio {
            font-size: 18px;
            color: #333;
          }
          .social-icons {
            display: flex;
            gap: 10px;
            margin-top: 10px;
          }
          .social-icon {
            display: inline-block;
            text-decoration: none;
            color: #333;
            font-size: 24px;
          }
        `}</style>
            </Head>
            <body>
                <header>
                    <div className="header-title">
                        <a href="https://michaellee.pythonanywhere.com/">Michael's Sandbox</a>
                    </div>
                    <ul className="header-menu">
                        <li><a href="https://michaellee.pythonanywhere.com/python_library">Python Library</a></li>
                        <li><a href="https://michaellee.pythonanywhere.com/data_library">Data Library</a></li>
                        <li><a href="https://github.com/michael-lee-bubble/pythonanywhere-live">GitHub</a></li>
                    </ul>
                </header>
                <section className="welcome-section">
                    <h1>Welcome to Michael's Sandbox</h1>
                    <p>This is a space where I explore and showcase my projects in Python and data science.</p>
                    <p>I develop features based on my day-to-day needs and build tools firsthand to make my work a little easier.</p>
                    <p>If you have any questions or suggestions, don't hesitate to reach out. Feel free to browse!</p>
                </section>
                <section className="about-section">
                    <img src="../static/images/bubble_headshot.jpeg" alt="Michael's Profile Picture" className="profile-picture" />
                    <div className="bio">
                        <h2>About Me</h2>
                        <p>Hi there! I'm Michael Lee. Graduated from Yale with a major in Political Science and a minor in Chinese studies.</p>
                        <p>Currently, I'm a key member of the data team at <a href="https://bubble.io">Bubble</a>. My role involves building data models, maintaining dashboards, and interpreting data to support the Success organization. My daily toolkit includes Stitch, dbt, Looker, SQL, and Python.</p>
                        <p>Outside of work, I enjoy listening to music, studying topics about data, and building this website!</p>
                        <div className="social-icons">
                            <a href="mailto:michaellee1104@gmail.com" className="social-icon"><i className="fas fa-envelope"></i></a>
                            <a href="https://www.linkedin.com/in/michaellee1104/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}

export default HomePage;
