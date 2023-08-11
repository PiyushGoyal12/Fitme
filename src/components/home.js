import React from "react";
import Navbar from "./navbar";
import "./home.css";
// import image1 from "./images/image1.jpg"
const Home = () => {
    return (
        <>
            <Navbar />
            <div className="top">
                <div className="main-scroll-div">
                    <div className="cover">
                        <div className="imagescroll">
                            <section>
                                <img
                                    className="child-img"
                                    src="https://c4.wallpaperflare.com/wallpaper/940/736/840/man-dark-bodybuilder-muscle-wallpaper-preview.jpg"
                                    alt="image"
                                ></img>
                            </section>
                            <section>
                                <img
                                    className="child-img"
                                    src="https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg"
                                    alt="image"
                                ></img>
                            </section>
                            <section>
                                <img
                                    className="child-img"
                                    src="https://c4.wallpaperflare.com/wallpaper/735/263/743/muscle-muscle-training-dumbbells-wallpaper-preview.jpg"
                                    alt="image"
                                ></img>
                            </section>
                            <section>
                                <img
                                    className="child-img"
                                    src="https://c4.wallpaperflare.com/wallpaper/150/221/189/man-back-workout-bodybuilding-wallpaper-preview.jpg"
                                    alt="image"
                                ></img>
                            </section>
                            <section>
                                <img
                                    className="child-img"
                                    src="https://c4.wallpaperflare.com/wallpaper/878/351/642/muscles-pose-back-arms-wallpaper-preview.jpg"
                                    alt="image"
                                ></img>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
