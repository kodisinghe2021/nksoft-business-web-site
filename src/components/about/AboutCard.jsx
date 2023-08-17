import React from "react"
import BKImg1 from "../images/about.webp"
import Title from "../common/title/Title"
import {homeAbout} from "../../dummydata"
import AWrapper from "./AWrapper"
import "./about.scss"

// * ----------------------------------------
const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left raw">
            <img src={BKImg1} alt="img" />
          </div>
          <div className="right raw">
            <Title
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((val) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={val.cover} alt="No IMAGE" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
     
			<AWrapper />
    </>
  );
};

export default AboutCard;
