import "./home.css";
import profile from "../Assets/profile.jpg";

const skills = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "REST API",
  "Redux",
  "Webflow",
  "Sass",
  "Git",
  "GitHub",
  "JavaScript",
  "HTML",
  "CSS",
  "Bootstrap",
  "UI/UX",
  "Figma",
  "Problem Solving",
  "Teamwork & Collaboration",
  "Communication",
  "Design Thinking",
];
const profileImg = {
  width: '100px',
  height: '100px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundImage: `url(${profile})`,
};

export default function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className="hero row gap-4  text-light px-4 pb-5">
            <div className="hero-text  col-12 gy-5">
              <div className="row gy-3">
                <div className="col-12 mb-2">
                  <div className="rounded-circle" style={profileImg}></div>
                </div>
                <div className="col-12">
                  <h1 className="hero-title text-light">
                    Front-end Developer & Designer
                  </h1>
                </div>
                <div className="col-12 d-flex gap-3">
                  <button href="#" className="btn btn-success rounded-5 px-3">
                    Open for Work
                  </button>
                  <button
                    href="#"
                    className="btn btn-outline-success rounded-5 px-3"
                  >
                    Contact me
                  </button>
                </div>
              </div>
            </div>
            <div className="col-12">
              <hr />
            </div>

            <div className="col-12">
              <div className="d-flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-tag px-3 py-1 d-flex align-items-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
