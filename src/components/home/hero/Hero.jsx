import React from "react";
import "./hero.scss";
import Title from "../../common/title/Title";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="raw">
						<Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education' />
            <p >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
              quidem vel, earum hic ipsa alias odit veniam odio? Nesciunt odit
              distinctio excepturi in, eum tempore maxime eveniet vel magnam
              aperiam.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button >
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
