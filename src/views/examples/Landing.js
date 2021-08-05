/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import cardImg1 from "assets/img/theme/book-store.png";
import cardImg2 from "assets/img/theme/cookie-stand.PNG";
import cardImg3 from "assets/img/theme/loading.jpg";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                  
                      <h1 className="display-3 text-white">
                        <span>About</span>
                      </h1>
                      <p className="lead text-white">
                      Lana is an enthusiastic fresher with highly motivated and leadership skills having bachelors of engineering degree in Communication Engineering from Hashemite University with a GPA of 3.41 out of 4 .

She have completed several training courses in networking and hacking such as : CCNA , MCSA , MCSE and CEH , from Pioneers Academy  and Currently, she got a scholarship from Luminus College in the field of web development and databases management by using several programming languages : HTML , CSS , JavaScript and Python.

So , she is very eager to learn new technologies and methodologies, and always willing to innovate the new things which can improve the existing technology . Also , she is seeking an internship or co-op in cybersecurity, IT, or a related field where she can use the skills which are learned in real world scenarios.                      </p>
                  
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">

                        <CardBody className="py-5">
                          <img src={cardImg1} width='280px' height='280px'/>
                          <h6 className="text-primary text-uppercase">
                            Biblomania
                          </h6>
                          <p className="description mt-3">
                            Code201-Final project , Biblomania is a website that provide the several kind of books and allow to the clients to book and buy books online by using credit card .
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Products
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Knowledge
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <img src={cardImg2} width='280px' height='280px'/>

                          <h6 className="text-success text-uppercase">
                            Cookie - Stand 
                          </h6>
                          <p className="description mt-3">
                            Cookie - Stand is a code201 weekly project , that calculate the average number of cookies in each location of the shop .
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Marketing
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <img src={cardImg3} width='280px' height='280px'/>

                          <h6 className="text-warning text-uppercase">
                          301 Final - Project
                          </h6>
                          <p className="description mt-3">
                            LOADING ....... 
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Succees 
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Vision
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
