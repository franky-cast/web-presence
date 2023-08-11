import "./about.css"

export default function About () {
    return (
        <div className="about">
            <h1>Welcome!</h1>
            <div className="about__img-wrap">
                <img className="about__portrait" src="public/assets/IMG_6533.JPG" alt="" />            
            </div>
            {/* <p className="about__autobio">
                SDSU Information Systems Graduate. I do entrepreneurial web dev work while upskilling with personal side projects. Love to travel, explore, and run.
            </p> */}
        </div>
    )
}