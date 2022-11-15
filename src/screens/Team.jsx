import Title_Jumbotron from "../components/Title_Jumbotron";
import { team_page_subtitle } from '../content/subtitle_texts';
import "./Team.scss";
import { Container, Row, Col } from "react-bootstrap";
import ResponsiveCards from "./ResponsiveCards";
import { teams } from "../content/teams";
import Comingsoon from "./Comingsoon";
const Teams = () => {
    return (
        <div className="Teams">
            <Comingsoon />
             {/* <Title_Jumbotron bigHeader={"\n"} bigHeaderCaps={"Coming soon "} subtitle="The page is not up yet. Stay tuned." /> */}
            {/* <Title_Jumbotron bigHeader={"Meet the people"} bigHeaderCaps={"who made it ALL"} subtitle={team_page_subtitle} />
            {teams.map((team) =>
                <Container className="wrapper">
                    <h1 className="wrapper__heading">{team.group}<span className="dot_color">.</span></h1>
                    <ResponsiveCards cards={team.list} />
                </Container>
            )} */}
            {/* <div className='emptybox'></div> */}
        </div >
    );
}
export default Teams;