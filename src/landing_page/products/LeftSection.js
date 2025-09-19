import React from "react";

function LeftSection({
    imgageURL,
    ProductName,
    ProductDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5 border-top ">
            <div className="row mt-4">
                <div className="col-6 p-5">
                    <img src={imgageURL} />
                </div>
                <div className="col-6 p-5 mt-5 ">
                    <h1>{ProductName}</h1>
                    <p>{ProductDescription}</p>
                    <div>
                        <a href={tryDemo}>
                            Try Demo<i class="fa-solid fa-arrow-right"></i>
                        </a>
                        <a href={learnMore} style={{ marginLeft: "50px" }}>
                            Learn More<i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="/media/images/googlePlayBadge.svg" />
                        </a>
                        <a href={appStore}>
                            <img src="/media/images/appstoreBadge.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
