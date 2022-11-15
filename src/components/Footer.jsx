import "./Footer.scss";
import { Row, Col } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import iiitbLogo from "../assets/iiitblogo.png";
import synergylogo from "../assets/synergy-footer.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="col-sm">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-sm d-none d-sm-block">
                                <span>
                                    <img src={synergylogo} alt="synergy logo" className="synergyfooter" />
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <span>
                                    <h1 className="footer-logo">
                                        <img src={iiitbLogo} alt="iiitb logo" className="iiitbfooter"/>
                                    </h1>
                                </span>
                                <p className="footer-c" >© Synergy 2023, IIIT Bangalore</p>
                            </div>


                            <div className="col-sm d-sm-none">
                                <div className="row">
                                    <div className="col justify-center">
                                        <span>
                                        <img src={synergylogo} alt="" className="synergyfooter" />
                                        </span>
                                    </div>
                                    <div className="col justify-center">
                                        <span>
                                            <img src={iiitbLogo} alt="" className="iiitbfooter"/>
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <p className="footer-c" style={{ textAlign: "center",fontSize : "3.5vmin"}}>© Synergy 2023, IIIT Bangalore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {!isMobile &&
                    <div className="col-sm mobile d-none d-sm-block">
                        <div className="footer-content">
                            <Row>
                                <Col md={5} className="headersFooter">
                                    <div className="col-md wrapperHeadings">
                                        <div className="socialHandles">
                                        <h1 className="footer-heading">Social</h1>
                                        <h1 className="footer-subheading">Handles</h1>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} >
                                    <div className="foot-icon-list">
                                        <div className="row">
                                            <Col>
                                                <a href="https://www.linkedin.com/company/synergy-iiitbangalore/" target="_blank" rel="noreferrer" className="footer-icon">
                                                    <BsLinkedin style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://www.instagram.com/synergy_iiitb/" target="_blank" rel="noreferrer" className="footer-icon">
                                                    <AiFillInstagram style={{ color: "white", fontSize: "2.5em" }} className="ra-icon" />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://www.facebook.com/IIITBofficial/" target="_blank" rel="noreferrer" className="footer-icon">
                                                    <BsFacebook style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
                                                </a>
                                            </Col>
                                            <Col>
                                                <a href="https://twitter.com/IIITB_official" target="_blank" rel="noreferrer" className="footer-icon">
                                                    <FaTwitter style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
                                                </a>
                                            </Col>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                }
            </div>
        </div >
    )
}
export default Footer;