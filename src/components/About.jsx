import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              The Samsung Group (or simply Samsung) (Korean: 삼성) is a South
              Korean multinational manufacturing conglomerate headquartered in
              Samsung Town, Seoul, South Korea. It comprises numerous affiliated
              businesses, most of them united under the Samsung brand, and is
              the largest South Korean chaebol (business conglomerate). As of
              2020, Samsung has the 8th highest global brand value. Samsung was
              founded by Lee Byung-chul in 1938 as a trading company. Over the
              next three decades, the group diversified into areas including
              food processing, textiles, insurance, securities, and retail.
              Samsung entered the electronics industry in the late 1960s and the
              construction and shipbuilding industries in the mid-1970s; these
              areas would drive its subsequent growth.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/images/about.jpg"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
