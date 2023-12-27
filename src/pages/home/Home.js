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
            Imperdiet aliquam, quam amet aenean quis bibendum augue elementum.
            Id id posuere ultrices sapien nisl.
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
            title={"Lorem ipsum"}
            image={aboutCardImg}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing eliquet nibh libero aliquet integer. Lorem ipsum dolor sit amet, consectetur adipiscing eliquet nibh libero aliquet."
            }
          />
          <AboutCard
            title={"Lorem ipsum"}
            image={aboutCardImg}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing eliquet nibh libero aliquet integer. Lorem ipsum dolor sit amet, consectetur adipiscing eliquet nibh libero aliquet."
            }
          />
          <AboutCard
            title={"Lorem ipsum"}
            image={aboutCardImg}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing eliquet nibh libero aliquet integer. Lorem ipsum dolor sit amet, consectetur adipiscing eliquet nibh libero aliquet."
            }
          />
          <AboutCard
            title={"Lorem ipsum"}
            image={aboutCardImg}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing eliquet nibh libero aliquet integer. Lorem ipsum dolor sit amet, consectetur adipiscing eliquet nibh libero aliquet."
            }
          />
        </div>
      </section>

      <section id="team" className="Home-team">
        <SectionTitle title={"Our Team"} />
        <div className="Home-team-content">
          <TeamPhoto
            name={"John Doe"}
            image={"/images/member/team-member-photo-2.jpg"}
            post={"Coordinator"}
          />
          <TeamPhoto
            name={"John Doe"}
            image={"/images/member/team-member-photo-2.jpg"}
            post={"Coordinator"}
          />
          <TeamPhoto
            name={"John Doe"}
            image={"/images/member/team-member-photo-2.jpg"}
            post={"Coordinator"}
          />
          <TeamPhoto
            name={"John Doe"}
            image={"/images/member/team-member-photo-2.jpg"}
            post={"Coordinator"}
          />
          <TeamPhoto
            name={"John Doe"}
            image={"/images/member/team-member-photo-2.jpg"}
            post={"Coordinator"}
          />
          <TeamPhoto
            name={"John Doe"}
            image={"/images/member/team-member-photo-2.jpg"}
            post={"Coordinator"}
          />
          <TeamPhoto
            name={"John Doe"}
            image={"/images/member/team-member-photo-2.jpg"}
            post={"Coordinator"}
          />
          <TeamPhoto
            name={"John Doe"}
            image={"/images/member/team-member-photo-2.jpg"}
            post={"Coordinator"}
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
