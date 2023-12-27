import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ProgramItem from "../../components/ProgramItem/ProgramItem";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import "./Programs.css";

export default function Programs() {
  document.title = "Tensor : Programs";
  return (
    <div className="Programs">
      <Navbar from={"Programs"} />
      <section className="Programs-section">
        <SectionTitle title={"Programs by Tensor"} />
        <div className="Programs-content">
          <ProgramItem
            title={"Lorem ipsum dolor"}
            description={
              "Imperdiet aliquam, quam amet aenean quis bibendum augue elementum. Id id posuere ultrices sapien nisl a. Enim nunc, est quis volutpat malesuada. In ut pretium ipsum augue est aliquam. In malesuada montes, aliquet consectetur. Cursus amet egestas non sed orci. Blandit vitae suspendisse massa vehicula amet blandit quis. Mattis consequat nisl iaculis habitasse malesuada nisi gravida at. Neque at in ultricies dolor ut convallis. Proin justo, metus dui orci ipsum sollicitudin egestas consectetur amet. Nec sit at consectetur hac sem tincidunt. Volutpat vulputate orci donec duis amet senectus sed ornare porttitor. Vitae sodales tortor vitae placerat ut."
            }
            links={[
              {
                type: "GITHUB",
                link: "https://www.github.com/tensorioe/program-code",
              },
              {
                type: "DISCORD",
                link: "https://www.discord.com/TensorIOE",
              },
              {
                type: "FACEBOOK",
                link: "https://www.facebook.com/TensorIOE",
              },
              {
                type: "LINKEDIN",
                link: "https://www.linkedin.com/TensorIOE",
              },
            ]}
          />
          <ProgramItem
            title={"Lorem ipsum dolor"}
            description={
              "Imperdiet aliquam, quam amet aenean quis bibendum augue elementum. Id id posuere ultrices sapien nisl a. Enim nunc, est quis volutpat malesuada. In ut pretium ipsum augue est aliquam. In malesuada montes, aliquet consectetur. Cursus amet egestas non sed orci. Blandit vitae suspendisse massa vehicula amet blandit quis. Mattis consequat nisl iaculis habitasse malesuada nisi gravida at. Neque at in ultricies dolor ut convallis. Proin justo, metus dui orci ipsum sollicitudin egestas consectetur amet. Nec sit at consectetur hac sem tincidunt. Volutpat vulputate orci donec duis amet senectus sed ornare porttitor. Vitae sodales tortor vitae placerat ut."
            }
            links={[
              {
                type: "GITHUB",
                link: "https://www.github.com/tensorioe/program-code",
              },
              {
                type: "DISCORD",
                link: "https://www.discord.com/TensorIOE",
              },
              {
                type: "FACEBOOK",
                link: "https://www.facebook.com/TensorIOE",
              },
              {
                type: "LINKEDIN",
                link: "https://www.linkedin.com/TensorIOE",
              },
            ]}
          />
          <ProgramItem
            title={"Lorem ipsum dolor"}
            description={
              "Imperdiet aliquam, quam amet aenean quis bibendum augue elementum. Id id posuere ultrices sapien nisl a. Enim nunc, est quis volutpat malesuada. In ut pretium ipsum augue est aliquam. In malesuada montes, aliquet consectetur. Cursus amet egestas non sed orci. Blandit vitae suspendisse massa vehicula amet blandit quis. Mattis consequat nisl iaculis habitasse malesuada nisi gravida at. Neque at in ultricies dolor ut convallis. Proin justo, metus dui orci ipsum sollicitudin egestas consectetur amet. Nec sit at consectetur hac sem tincidunt. Volutpat vulputate orci donec duis amet senectus sed ornare porttitor. Vitae sodales tortor vitae placerat ut."
            }
            links={[
              {
                type: "GITHUB",
                link: "https://www.github.com/tensorioe/program-code",
              },
              {
                type: "DISCORD",
                link: "https://www.discord.com/TensorIOE",
              },
              {
                type: "FACEBOOK",
                link: "https://www.facebook.com/TensorIOE",
              },
              {
                type: "LINKEDIN",
                link: "https://www.linkedin.com/TensorIOE",
              },
            ]}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
