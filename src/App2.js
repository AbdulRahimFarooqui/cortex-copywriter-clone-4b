import React, { useEffect } from 'react';
import useWebAnimations, { tada } from "@wellyshen/use-web-animations";
import './App.css';
import featuredImage from './images/Intro_Featured_Image_Empty.svg';
import brainInto from './images/Intro_Brain.svg';
import service_6 from './images/services-6.svg';
import service_7 from './images/services-7.svg';
import service_5 from './images/untitled.svg';
import tech_ar from './images/tech-new.svg';
import { techContext, listTopics } from "./DisplayOfTechniques/context.js"
import { useContext } from 'react';
import TypeWriter from 'typewriter-effect';

function App() {

  const { ref: tadaRef, getAnimation: tadaAnim } = useWebAnimations({ ...tada })
  const { topicDetails, find } = useContext(techContext);
  useEffect(() => {
    const startAnimation = () => {
      tadaAnim().play()
    }
    document.getElementById("Tname").addEventListener("load", () => {
      startAnimation();
    });
    document.getElementById("highlighted").addEventListener("click", () => {
      startAnimation();
    })
  }, [tadaAnim])
  //aik object jis main {topic:"",sentence:""} structure ho.
  //aik context banao jis main yeh ^ object initial wala stored ho
  //aik reducer jis main aik list ho case: topic1 phir case: topic2 ...
  //yahan App() main sirf call karna hai reducer ko context k zariye

  // aik buuton ka div banao aur uss ko iterate karo Object.values say tamam
  // avatars par.
  const para_4_points = ["Headlines & Taglines", "Content Strategy", "Blogs & Articles",
    "Social Media Content", "Video Scripts",
    "eDMs & Newsletters", "Case Studies", "Whitepapers"]

  const para_2_points = ["Microcopy", "Taxonomy & Labeling", "Chatbots", "User Research",
    "Content Style Guide", "User Testing",
    "Design Principles", "Prototype"];

  const para_3_points = ["Information Architecture", "Wireframes", "Competitor Analysis",
    "On-page SEO", "Off-page SEO", "USP/UVP", "Landing Page", "Sales Letter"]
  //
  const { brainRef } = useWebAnimations({
    keyframes: [{ transform: "translateY(-50px)", easing: 'ease-in-out' },
    { transform: "translateY(7px)", easing: 'ease-in-out' },
    { transform: "translateY(-50px)", easing: 'ease-in-out' },
    ],
    timing: {
      duration: 4000,
      iterations: Infinity
    },
  });

  //remove un-used classNames of divs and others
  //
  return (
    <div>
      <div className="type-writer" >
        <TypeWriter
        onInit={(typeWriter)=>{
          typeWriter
          .typeString('Ayesha is a Little Princess')
          .pauseFor(1500)
          .typeString(' aka أميرة صغيرة ')
          .pauseFor(2000)
          .deleteChars(13)
          .changeDeleteSpeed(10)
          .typeString('Great!')
          .pauseFor(1000)
          .start()
        }}
        options={{loop:true}}
        />
      </div>
      <div className="Intro-Things">
        {/* make this div overlap with images! */}
        <div className="intro-text">
          <div className="headings">
            <p className="first-heading"><b>CORTEX</b></p>
            <p className="second-heading">COPYWRITER</p>
          </div>
          <p className="intro-para">Enhance your communications with<br />psychology-based copywriting and UX<br />writing</p>
          <div className="send-button">Send a Message</div>
        </div>
        <div className="intro-pics">
          <img class="Intro_Featured_Image_Empty" src={featuredImage} alt="not available Intro_Featured_Image_Empty.svg" height={600} />
          <img ref={brainRef} src={brainInto} alt="Intro Brain" class="brain" height={600} />
        </div>
      </div>
      <div className="second-div">
        <img className="service-6" src={service_6} alt="service 6" height={650} />
        <div className="div-2-text">
          <p className="heading-2">UX Writing</p>
          <p className="para-2">I develop clear and useful text in product interfaces to help users reach<br />a specific goal, whether that's completing a form or tapping a button.<br />This includes every type of content from on-screen help systems, user<br />onboarding and in-app messages to push notifications and tooltips.</p>
          {Object.values(para_2_points.map((val, key) => {
            return (
              <ul className="para-2-points">
                <li>
                  <p className="points-2">{val}</p>
                </li>
              </ul>
            );
          }))}
        </div>
      </div>
      <div className="third-div">
        <img height={650} src={service_7} alt="service 7" className="service-7" />
        <div className="div-3-text">
          <p className="heading-3">Website Copywriting</p>
          <p className="para-3">Your website is a dialogue with your audience. I capture the essence of<br />your business and communicate it clearly. Carefully considered writing<br />and SEO best practices allow me to craft the perfect user journey<br />online. Let me draw the map that guides users every step of the way<br />from discovery, to consideration, to conversion.</p>
          <div className="div-points">
            {Object.values(para_3_points.map((val, key) => {
              return (
                <ul className="para-3-points">
                  <li>
                    <p className="points-3">{val}</p>
                  </li>
                </ul>
              );
            }))}
          </div>
        </div>
      </div>
      <div className="fourth-div">
        <img src={service_5} alt="services 5" height={560} className="service-5" />
        <div className="div-4-text">
          <p className="heading-4">Content Writing</p>
          <p className="para-4">Give your business a competitive edge with powerful content that can<br />be targeted to any segment of your audience. No matter how large or<br />complex your project, my custom-built solutions including articles,<br />eDMs, and case studies will help you implement a plan that maximizes<br />your business’s online exposure.</p>
          <div className="div-4-points">
            {Object.values(para_4_points.map((val, key) => {
              return (
                <ul className="para-4-points">
                  <li>
                    <p className="points-4">{val}</p>
                  </li>
                </ul>
              );
            }))}
          </div>
        </div>
      </div>
      <div className="div-5">
        <div className="div-5-text">
          <div className="about">About</div>
          <p className="para-5"> My copywriting and UX writing draws on abilities<br />developed in the psychological sciences.<br /><br />Expertise in visual perception, behavioral motivation,<br />and decision-making allows me to engineer words that<br />convert customers and guide users.</p>
        </div>
        <p className="about-text"><b>Nathan Mudaliar</b>, the Cortex Copywriter</p>
      </div>
      <div className="div-6"></div>
      <div className="div-7">
        <div className="div-7-text">
          <div className="heading-7">
            Interactive Techniques
          </div>
          <div className="div-7-2">
            Allow me to demonstrate some<span className="colored-part"> psychology-based copywriting</span><br />techniques I apply to optimize user experiences and boost<br />conversion rates.
          </div>
        </div>
        <div className="top">
          <div >
            <p ref={tadaRef} id="Tname" className="Tname">{topicDetails.t}</p>
            <p className="Tsentence">{topicDetails.tSentence}</p>
          </div>
        </div>
        <div className="display">
          <img className="tech-img" src={tech_ar} alt="tech-ar" height={800} />
        </div>


        <div className="typing-screen">
          TECHNIQUE SAMPLE<p><b>AUGMENTED REALITY (AR)<br />GLASSES:</b></p>
        </div>
        <div className="list-topics">
          {listTopics.map((val, key) => {
            return (
              <ul className="topics">
                <li
                  className={(topicDetails.t === val) ? "highlighted" : ""}
                  onClick={() => { find(val) }}
                  id="highlighted"
                >
                  <p className="topic">{val}</p>
                </li>
              </ul>
            );
          })}
        </div>
        <div className="info-topic"></div>
      </div>

    </div>
  );
}

export default App;
