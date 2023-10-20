import { Card, Col, Row } from "antd";
import React from "react";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import "./services.css";

const Services: React.FC = () => {
  return (
    <>
      <Container>
        <Row
          //  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          gutter={[16, 16]}
        >
          <Col span={8}>
            <Card className="service-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_scrum_board_re_wk7v.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>
              <h3>Program/Project Manager</h3>

              <p
                style={{
                  fontSize: "15px",
                }}
              >
                A program/project manager defines what success looks like for a
                program and project and gathers a team to make that vision a
                reality. A program/project manager finds the customer need and
                the bigger company objectives that a project or feature will
                satisfy.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="service-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_dev_productivity_re_fylf.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>
              <h3>Release Training Engineer</h3>
              <p
                style={{
                  fontSize: "15px",
                }}
              >
                A product manager(RTE) is a person who identifies the customer
                need and the larger business objectives that a product or
                feature will fulfill articulates what success looks like for a
                product, and rallies a team to turn that vision into a reality.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="service-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_scrum_board_re_wk7v.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>
              <h3>Scrum Master</h3>

              <p
                style={{
                  fontSize: "15px",
                }}
              >
                A facilitator for an Agile development team is a scrum master.
                They are in charge of overseeing information sharing among team
                members. A team can communicate and self-organize using the
                Scrum project management framework to make changes fast, in
                accordance with Agile principles.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="service-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_analysis_dq08.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>
              <h3>Security Analyst</h3>

              <p
                style={{
                  fontSize: "15px",
                }}
              >
                Security Analysts direct the security tasks of associations.
                They foster security systems, execute security methodology, and
                direct security officials. They might be utilized in different
                settings, going from organizations and distribution centers to
                private turns of events.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="service-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_services_re_hu5n.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>
              <h3>Security Auditor</h3>

              <p
                style={{
                  fontSize: "15px",
                }}
              >
                Security auditors create and execute audits based on
                organizational policies and governmental regulations. To inspect
                and assess security controls and practices, security auditors
                work closely with IT professionals, managers, and executives.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card className="service-card">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <SvgIcon
                  src="undraw_instant_analysis_re_mid5.svg"
                  aria-label="homepage"
                  width="200px"
                  height="200px"
                />
              </div>
              <h3>Vulnerability and Risk Analyst</h3>

              <p
                style={{
                  fontSize: "15px",
                }}
              >
                Say something interesting about your business here.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
