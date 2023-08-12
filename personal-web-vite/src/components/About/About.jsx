import "./about.css"

export default function About () {
    return (
        <div className="about container">
            <h1>Welcome!</h1>
            <div className="about__img-wrap">
                <img className="about__portrait" src="public/assets/IMG_6533.JPG" alt="" />            
            </div>
            {/* <p className="about__autobio">
                SDSU Information Systems Graduate. I do entrepreneurial web dev work while upskilling with personal side projects. Love to travel, explore, and run.
            </p> */}
            {/* <a href="/work">
                <div className="about__button-wrap">
                    <button>Projects</button>
                </div>
            </a> */}

            <div className="about__segments">
                <div className="about__world">
                    <h1>🌎</h1>
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore ipsam unde, repudiandae accusamus assumenda doloribus sequi amet.</p>
                    <div className="about__hr">
                        <hr/>
                    </div>
                </div>

                <div className="about__laptop about__">
                    <h1>💻</h1>
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore ipsam unde, repudiandae accusamus assumenda doloribus sequi amet.</p>
                    <div className="about__hr">
                        <hr/>
                    </div>
                </div>

                <div className="about__heart">
                    <h1>🤍</h1>
                    <h2>Lorem ipsum dolor</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, inventore ipsam unde, repudiandae accusamus assumenda doloribus sequi amet.</p>
                    <div className="about__hr">
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}