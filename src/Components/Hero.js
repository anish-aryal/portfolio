import "./home.css";
const skills=[

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





]
export default function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <div className="hero row gap-4  text-light px-4 pb-5">
            <div className="hero-text  col-12 gy-5">
              <div className="row gy-3">
                <div className="col-12 mb-2">
                    <div style={{width:'80px', height:'80px', backgroundImage:`url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover' }} className="bg-light rounded-circle"></div>
                </div>
                <div className="col-12">
                  <h1 className="hero-title text-light">Front-end Developer & Designer</h1>
                </div>
                <div className="col-12 d-flex gap-3">
                  <button href="#" className="btn btn-success rounded-5 px-3 ">
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
                    {skills.map((skill)=>(
                        <div className="skill-tag px-3 py-1 d-flex align-items-center">{skill}</div>
                    ))}

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
