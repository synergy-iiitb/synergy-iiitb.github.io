import './Comingsoon.scss';
import { Row, Col } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Comingsoon(){
    return <div className="container-fluid title_background1">
        {/*<div className="row title_tex1">
            <div className="col-12">
                <div className="empty_space_title1">
                </div>
                <div className="row synergy_is1">
                    Synergy 2023 is
                </div>
                <div className="row synergy_is1">
                    <h1 className='synergy_is_text1'>COMING SOON</h1>
                </div>
            </div>
            <div className="col d-none d-lg-block">
            </div>
        </div> */}
        <div className="row">
            <div className="empty_space_title1"></div>
            <div className="col-1 col-lg-2"></div>
            <div className="col-11 col-lg-4">
                <h1 className="topcoming">Synergy 2023 is</h1>
            </div>
            <div className="col d-none d-lg-block"> </div>
        </div>
        <div className="row">
            <div className="col-2 d-none d-lg-block"></div>
            <div className="col-12 col-lg-4">
                <h1 className='synergy_is_text1 textcenter'>COMING</h1>
            </div>
            <div className="col-4 d-none d-lg-block">
                <h1 className='synergy_is_text2'>SOON</h1>
            </div>
            <div className="col-2 d-none d-lg-block"></div>
        </div>
        <div className="row d-block d-lg-none">
            <h1 className='synergy_is_text2 textcenter'>SOON</h1>
        </div>
        <div className="row">   
            <div className="col-4 col-lg-6"></div>
            <div className="col-7 col-lg-4 desc">2nd iteration of IIITB's</div>
            <div className="col-2"></div>
        </div>
        <div className="row">   
            <div className="col-4 col-lg-6"></div>
            <div className="col-7 col-lg-4 desc">Annual TechFest</div>
            <div className="col-2"> </div>
        </div>
        <div className="row empty_space_title1">
        </div>
        <div className="row mobilesocial">
            <h6 className ="textcenter contactuscom">Contact us here</h6>
        </div>
        <div className="row textcenter socialrow mobilesocial">
            <div className="col-2 col-lg"></div>
            <div className="col-2 col-lg-1">
            <a href="https://www.linkedin.com/company/synergy-iiitbangalore/" target="_blank" rel="noreferrer" className="footer-icon socialrow">
                <BsLinkedin style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
            </a>
            </div>
            <div className="col-2 col-lg-1">
            <a href="https://www.instagram.com/synergy_iiitb/" target="_blank" rel="noreferrer" className="footer-icon socialrow">
                <AiFillInstagram style={{ color: "white", fontSize: "2.5em" }} className="ra-icon" />
            </a>
            </div>
            <div className="col-2 col-lg-1">
            <a href="https://www.facebook.com/IIITBofficial/" target="_blank" rel="noreferrer" className="footer-icon socialrow">
                <BsFacebook style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
            </a>
            </div>
            <div className="col-2 col-lg-1">
            <a href="https://twitter.com/IIITB_official" target="_blank" rel="noreferrer" className="footer-icon socialrow">
                <FaTwitter style={{ color: "white", fontSize: "2.3em" }} className="ra-icon" />
            </a>
            </div>
            <div className="col-2 col-lg"></div>
        </div>
    </div>
}
export default Comingsoon;

