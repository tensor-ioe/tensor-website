import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import RolesCard from "../../components/rolesCard/RolesCard";

const RolesAndResponsibility = () => {
  return (
    <>
      <div className="flex flex-col w-screen">
        <Navbar />
        <div className="flex flex-col self-center w-4/5">

        <RolesCard
          title={"Social Media Manager"}
          description={"The role of the social media manager is to share posts on our Facebook, Instagram,and LinkedIn pages."}
          
          responsibilities={["Posting information on our social media.", "Communicating with graphic designers and content writers before posting."]}
          advantages={["You are the one who will post every design or video on socialMedia. This means you will also have basic ideas of every work done in TENSOR.","Join all the workshops, events, and competitions of TENSOR free of cost.","Learn how to collaborate with a team which is very important for your future endeavors."]}
          requirements={["An active personality","Motivated enough to learn"]}
          />
          <RolesCard 
          title={"Event Manager"}
          description={"The event manager is anyone who is responsible for planning, managing, and coordinating all the competitive and non-competitive events conducted by TENSOR."}

          responsibilities={["Planning event schedules","Create registration forms","Selecting the appropriate venue/application for the event","Developing protocols for the event","During the online events, reply to comments and help in audience interaction","Ensure the event runs smoothly"]}
          advantages={["Learn how to manage events","Develop communication skills","Since you are the manager of the events, you will surely gain knowledge from different domains throughout the events"]}
          requirements={["Active personality","Willing to give full energy"]}
          note="N.B: Event Manager will manage events but not limited to it. They shall work
with HR to handle the insides of the team and support the team however they
can."
          />
          <RolesCard 
          title={"Junior Research Advocate"}
          description={"The role of Junior Research Advocate is to assist Research Advocate(RA) with the research in the field of data. They work strictly under RA and are supervised by the RAs."}

          responsibilities={["Assisting RA with their researches","Coordinating with SMM to summarize findings Relating to AI/ML but not limited to it."]}
          advantages={["Learn how to manage data","Interpersonal skills development","Deep learning about the AI and ML field"]}
          requirements={["Has some basics on AI and ML","Active personality","Willing to give full energy"]}
          />
          <RolesCard 
          title={"Graphics Designer"}
          description={"The Graphics Designer handles all the designing-related stuff."}

          responsibilities={["Design banners and flyers for different events organized by TENSOR.","Design certificates for the participants of the events."]}
          advantages={["You will be able to uplift your level of skills through continuous work and receive precious pieces of advice from our design team specialist.","You will be able to join every workshop organized by TENSOR free of cost."]}
          requirements={["Active participation.","The mentality to learn."]}
          />
          <RolesCard 
          title={"Software Coordinator"}
          description={"he primary roles include handling and guiding participants with coding or related tasks during technical workshops or events. The Software Coordinator should be the primary point of contact for any software-related tasks, including, at times, project documentation."}

          responsibilities={["Guiding participants during workshops and events.","Resolving conflicts and fostering a positive environment","Handling documentation tasks (often)","Managing technical tasks such as the internet, sound, or related issues (often)"]}
          advantages={["Learning to be a mentor","Enhancing communication and collaboration skills","Receiving proper guidance from seniors and IT experts","Gaining better exposure and thinking outside the box"]}
          requirements={["Active personality.","Eagerness to learn.","Creativity is a plus"]}
          />
          <RolesCard 
          title={"Web Developer"}
          description={""}

          responsibilities={["Keep our website up and running","Update the content on the website frequently","Maintain and handle form requests when hiring"]}
          advantages={["Opportunity to gain hands-on experience in real-world applications","Interact with and gain insights from developers","Improve collaboration skills","Enhance punctuality"]}
          requirements={["Active participation.","Have a passion to learn new things.","Basic knowledge of HTML, CSS, JavaScript, and React"]}
          />
          <RolesCard 
          title={"Marketing"}
          description={""}

          responsibilities={["Seeking sponsors for organising events and workshops","Branding and promoting our organisation effectively to the outside world","Effectively communicating with event managers and other teams","Managing events and workshops (often)"]}
          advantages={["Networking","YUplifting communication skills","Join all the workshops, events, and competitions of TENSOR free of cost."]}
          requirements={["Active participation.","Have a passion to learn new things."]}
          />
          <RolesCard 
          title={"General Member"}
          description={""}

          responsibilities={["Publicity of TENSOR in social media and colleges","Take responsibility for any specific tasks as per interest"]}
          advantages={["Networking with industry people","Improving communication skills along with confidence","Gaining knowledge to sell your skills","Leadership skills development"]}
          requirements={["Efficient and fluent communication","Efficient and fluent communication","Ability to effectively deliver ideas in layman's terms"]}
          />
          </div>
        <Footer />
      </div>
    </>
  );
};

export default RolesAndResponsibility;
