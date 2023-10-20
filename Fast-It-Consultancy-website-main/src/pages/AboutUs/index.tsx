import React from "react";
import Container from "../../common/Container";
import { Divider } from "antd";

const AboutUs: React.FC = () => {
  return (
    <>
      <Container>
        <p>
          Born In 2002 out of a need to give small businesses the services given
          to the larger business. We started to build clients by helping them
          find the right people, select the ideal technologies, and plan for the
          digitalization of their businesses are committed to their success,
          working together as One Team with One Message to transform
          environments, enhance operations, Secure business data and their
          reputation and exceed expectations.
        </p>

        <p>
          {" "}
          FAST through our Talent Solutions, Advanced Technology Strategy, and
          Security Training to support the evolving needs of our customers. As a
          result, we have become an IT solutions provider in a truer sense; we
          make it possible for our clients to achieve the outcomes. We have
          diligently worked to build a company that can solve problems and
          supports every aspect of its IT environment.{" "}
        </p>

        <p>
          We have the capability to provide IT professionals for all your
          software development, maintenance & networking needs. Highly talented
          staff, a huge pool of consultants & our focused approach towards our
          clients result in providing the right fit candidate, at right time &
          at a reasonable cost.
        </p>

        <p>
          We do understand that the most important component of success for any
          business is the people working there. Our team helps our clients by
          providing the best-fit Talent for their IT needs so that they just
          must concentrate on their business & IT-related concerns for us.
        </p>

        <p>
          Our recruiters have been using a high-end application for providing
          you with the best possible consultant to fulfill your needs very
          quickly. In 80% of the cases, we submit the right candidate within 6
          hours of receipt of any IT requirement.{" "}
        </p>

        <h2>OUR STAFF</h2>
        <Divider />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>EXECUTIVE</h3>
        </div>
      </Container>
    </>
  );
};

export default AboutUs;
