import Title_Jumbotron from "../components/Title_Jumbotron";
import { events_page_subtitle } from '../content/subtitle_texts';
import EventCard from "../components/event_card";
import './Events.scss'
import Comingsoon from "./Comingsoon";

function Events(){
    return (
    <div className="Events">
        <Comingsoon />
         {/* <Title_Jumbotron bigHeader={"Discover"} bigHeaderCaps={"Synergy"} subtitle= {events_page_subtitle}/> */}
         {/* <EventCard eventid = "1"/> */}
         {/* <EventCard title = "Another event"
         eventid = "2" imgsrc = "../assets/rectangle55.png"/> */}
    {/* <div className='emptybox'></div> */}
    </div>
    );  
}
export default Events;