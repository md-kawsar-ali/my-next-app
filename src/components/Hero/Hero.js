import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="hero min-h-screen bg-base-200">
        <div className="container-xl lg:px-14">
          <div className="hero-content text-center">
            <div className="w-7/12">
              <h1 className="text-5xl text-slate-300 font-bold">
                Welcome to my Dark Site
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
