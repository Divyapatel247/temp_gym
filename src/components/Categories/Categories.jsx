import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="/img/p9.jpg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/1">
            MULTI FUNCTION MACHINE
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="/img/p5.png"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            HOME GYM EQUIPMENT
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="/img/p2.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            CARDIO MACHINE
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="/img/p4.jpeg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                FULL BODY LIFTING EQUIPMENT
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="/img/p8.jpg"
                alt=""
              />
              <button>
                <Link to="/products/1" className="link">
                HOME WORK OUT PRODUCT
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="/img/p10.jpg"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
            MULTI PRESS MACHINE
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
