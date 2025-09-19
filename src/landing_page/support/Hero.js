import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-4" id="supportWrap">
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className="row p-3 m-3 ">
                <div className="col-6 p-3 ">
                    <h1 className="fs-3">
                        Search for an answer or browse help topics to create
                        ticket
                    </h1>
                    <input
                        placeholder="Eg. How do i activate F&O"
                        className="mb-3"
                    />
                    <br />
                    <a href="">Track account opening</a> &nbsp;&nbsp;&nbsp;
                    <a href="">Track segment activation</a> &nbsp;&nbsp;
                    <a href="">Intraday Margins</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                    <a href="">Kite user manual</a> &nbsp;&nbsp;
                </div>
                <div className="col-6 p-3 mt-5 mb-5 ">
                    <h1 className="fs-3 m-4">Featured</h1>
                    <ol className="m-4">
                        <li className="mb-2">
                            <a href="">
                                Current Takeovers and delisting- January 2024
                            </a>
                        </li>
                        <li>
                            <a href="">Latest Intraday leverages- MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
