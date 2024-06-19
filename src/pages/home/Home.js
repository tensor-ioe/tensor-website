import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Home.css";
import aboutCardImg from "../../assets/about-card-img.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import linkedinIcon from "../../assets/linkedin-icon.svg";
import discordIcon from "../../assets/discord-icon.svg";
import instagramIcon from "../../assets/instagram-icon.svg";
import githubIcon from "../../assets/github-icon.svg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import AboutCard from "../../components/AboutCard/AboutCard";
import TeamPhoto from "../../components/TeamPhoto/TeamPhoto";
import SocialLink from "../../components/SocialLink/SocialLink";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Home() {
  document.title = "Tensor : Beyond Dimensions";
  return (
    <div className="Home">
      <div className="Home-navbar">
        <Navbar />
      </div>

      <section id="home" className="Home-hero-section">
        <div className="Home-hero-div-main">
          <h1 className="Home-hero-div-title">
            Lorem ipsum dolor sit amet
            <br />
            consectetur bibendum
            <br />
            adipiscing elit
          </h1>
          <h2 className="Home-hero-div-desc">
            Welcome to Tensor IOE Thapathali,a community where innovation meets
            passion. Here, we are dedicated to empowering students with the
            skills and knowledge to excel in the dynamic field of data
            engineering. Our club brings together like-minded individuals who
            are eager to learn, explore and create.
          </h2>
          <div className="Home-hero-div-buttons-container">
            <Link className="Home-hero-div-button-filled" to={"/apply"}>
              Apply for a role
            </Link>
            <HashLink
              className="Home-hero-div-button-unfilled"
              smooth
              to={"#about"}
            >
              Learn more
            </HashLink>
          </div>
        </div>
        <div className="Home-hero-div-image">
          <img
            className="Home-hero-image"
            src="/images/assets/hero-image-2x.webp"
            alt="Tensor"
          />
        </div>
      </section>

      <section id="about" className="Home-about">
        <SectionTitle title={"About Tensor"} />
        <div className="Home-about-content">
          <AboutCard
            title={"Innovation and Creativity"}
            image={aboutCardImg}
            description={
              "Fosters a culture of innovation and creativity by encouraging members to think outside the box, experiment with new ideas, and develop unique solutions to advance technology and engineering."
            }
          />
          <AboutCard
            title={"Cultivating Skills"}
            image={aboutCardImg}
            description={
              "Prioritizes enriching members and students through comprehensive programs and interactive workshops that foster learning, growth, and practical skills development in data science, AI and ML"
            }
          />
          <AboutCard
            title={"Driving Data-Driven Insights"}
            image={aboutCardImg}
            description={
              "Enhances members' proficiency in data science, making them more data-driven and knowledgeable about the intricacies of the field and the broader data science landscape through pioneering research."
            }
          />
          <AboutCard
            title={"Collaboration and Community"}
            image={aboutCardImg}
            description={
              "Creates a supportive environment for students to learn, grow, and collaborate on diverse tech projects, sharing knowledge and experiences to drive collective success and innovation"
            }
          />
        </div>
      </section>

      <section id="team" className="Home-team">
        <SectionTitle title={"Our Team"} />
        <div className="Home-team-content">
          <TeamPhoto
            name={"Khemraj Shrestha"}
            image={"/images/member/khemraj.jpg"}
            post={"President"}
          />
          <TeamPhoto
            name={"Prabesh Babu Adhikari"}
            image={"/images/member/prabesh.png"}
            post={"Secretary"}
          />
          <TeamPhoto
            name={"Nirika Lamichhane"}
            image={"/images/member/nirika.jpg"}
            post={"Joint Secretary"}
          />
          <TeamPhoto
            name={"Jivan Acharya"}
            image={"/images/member/jivan.png"}
            post={"Senior Research Advocate"}
          />
          <TeamPhoto
            name={"Ishwor Raj Pokhrel"}
            image={"/images/member/ishwor.jpg"}
            post={"Software Coordinator"}
          />
          <TeamPhoto
            name={"Jatin Raut"}
            image={"/images/member/jatin.jpg"}
            post={"Event and HR"}
          />
          <TeamPhoto
            name={"Shreya Adhikari"}
            image={"/images/member/shreya.jpg"}
            post={"Marketing Director"}
          />
          <TeamPhoto
            name={"Rijan Pokhrel"}
            image={"/images/member/rijan.jpg"}
            post={"Research Advocate"}
          />

          <TeamPhoto
            name={"Pankaj Kumar Mehta"}
            image={"/images/member/pankaj.jpg"}
            post={"Research Advocate"}
          />
        </div>
      </section>

      <section id="links" className="Home-links">
        <SectionTitle title={"Social Links"} />
        <div className="Home-links-content">
          <SocialLink
            icon={facebookIcon}
            name={"Facebook"}
            username={"TensorIOE"}
            link={"https://www.facebook.com/TensorIOE"}
          />
          <SocialLink
            icon={linkedinIcon}
            name={"LinkedIn"}
            username={"tensorioe"}
            link={"https://www.linkedin.com/company/tensorioe"}
          />
          <SocialLink
            icon={discordIcon}
            name={"Discord"}
            username={"tensorioe"}
            link={"https://linkedin.com/in/tensorioe"}
          />
          <SocialLink
            icon={instagramIcon}
            name={"Instagram"}
            username={"tensorioe"}
            link={"https://linkedin.com/in/tensorioe"}
          />
          <SocialLink
            icon={githubIcon}
            name={"Github"}
            username={"tensorioe"}
            link={"https://github.com/tensorioe"}
          />
        </div>
      </section>

      <section id="contact" className="Home-contact">
        <SectionTitle title={"Contact Us"} />
        <div className="Home-contact-content">
          <ContactUsForm />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.804938825806!2d85.31585581506828!3d27.692423082798054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b216de315d%3A0xc66b118d04a97efc!2sThapathali%20Engineering%20Campus!5e0!3m2!1sne!2snp!4v1668291376832!5m2!1sne!2snp"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* <section id="recent-posts" className="Home-recent-posts">
                <SectionTitle title={"Recent posts"} />
                <div className="Home-recent-posts-content">
                    <div id="fb-root"></div>
                    <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0" nonce="2h1KPOKl"></script>
                    <div class="fb-page" data-href="https://www.facebook.com/TensorIOE" data-tabs="timeline" data-width="500" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/TensorIOE" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TensorIOE">TENSOR, IOE Thapathali</a></blockquote></div>
                </div>
            </section> */}

      <Footer />
    </div>
  );
}
