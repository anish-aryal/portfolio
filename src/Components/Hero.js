import './home.css'
export default function Hero (){
    return(
        <div className="container">
            <div className="row">
                    <div className=" col-12 hero text-light px-4 py-5">
                        <div className="hero-text  row gap-3">
                            <div className="col-12 ">
                            <h1 className="hero-title">Front-end Developer & Designer</h1>
                            </div>
                           <div className="col-12  gap-3">
                                 <button href="#" className="btn btn-success rounded-5 px-3 ">Open for Work</button>
                                 <button href="#" className="btn btn-outline-success rounded-5 px-3">Contact me</button>
                           </div>

                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-12">
                                <p className="hero-text">
                                    I am a Front-end Developer and Designer based in the United States. I have a passion for web design and love to create for web and mobile devices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}