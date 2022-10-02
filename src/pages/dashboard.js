import React from "react";
import Navbar from "../layout/navbar";
import Chart from "../charts/chart";
import Chart2 from "../charts/chart2";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="py-4"></div>
        <h1>
          <i className="bi bi-speedometer2"></i>Dashboard
        </h1>
        <div className="cardcontainer  ">
          <div className="row row-cols-3  text-center">
            <div className="card">
              <div className="row ">
                <div className="col-md-4">
                  <img src={img1} class="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    Teamwork makes the dream work.
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={img2} class="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    Strive for Progress Not perfection.
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={img3} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    Leadership is an Action not a Position.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <div>
                <div class="card-body">
                  <Chart />
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div>
                <div class="card-body">
                  <Chart2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
