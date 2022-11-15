import "./Card.scss";
import { BsLinkedin } from "react-icons/bs";
import { Row,Col } from "react-bootstrap";

const Card = (props) => {
    return (
        <>
            <div className="card-main">
                <div className="cont">
                    <img className="cardimg" src={props.img} alt="" />
                    <Row>
                        <Col xs={9}>
                            <p className="team-title">{props.content}</p>
                        </Col>
                        <Col xs={3}>
                            <a href="https://www.linkedin.com/company/synergy-iiitbangalore/" target="_blank" rel="noreferrer" className="footer-icon">
                                <BsLinkedin style={{ color: "white", fontSize: "2em" }} className="ra-icon" />
                            </a>
                        </Col>
                    </Row>
                    <div className="second-name">
                        <p className="team-subtitle">Organizer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;