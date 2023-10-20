import { Card, Col, Row } from "antd";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { SvgIcon } from "../../common/SvgIcon";

import "./aboutus.css";

const AboutUs: React.FC = () => {
  return (
    <>
      <Slide direction="up">
        <h2>About us</h2>

        <Row
          // gutter={[16, 16]}
          gutter={16}
        >
          <Col span={8}>
            <Card className="about-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_done_re_oak4.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>

              <h3>Our Experience</h3>
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                For the last 20 years Fast IT Consulting is serving as a
                business and Technology consulting firm that enables companies
                to achieve world-class business performance levels and realize a
                greater return.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="about-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_scientist_ft0o.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>

              <h3>Our Approach</h3>
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                Our service includes a comprehensive consult to help identify
                gaps and opportunities, a comprehensive report that includes a
                project plan with timelines and milestones, a project manager,
                and a . We also offer a suite of quality products that will help
                you get there quickly and smoothly.{" "}
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="about-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_projections_re_ulc6.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>

              <h3>Why Us?</h3>
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                Business mentors are key—that’s why when it comes to client
                selection, we’re choosy. We want to give each of you the time
                and guidance they deserve. We didn’t get there alone. And
                neither will you. Call us today.
              </p>
            </Card>
          </Col>
        </Row>
      </Slide>
    </>
  );
};

export default AboutUs;
