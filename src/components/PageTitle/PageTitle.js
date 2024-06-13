import React from "react";

const PageTitle = ({ title }) => {
  return (
    <div>
      <div className="hero min-h-80 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl text-slate-300 font-bold">
              {title ? title : "Sub Page"}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
