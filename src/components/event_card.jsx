import "./event_card.scss";
import OneFaqQuestion from "./One_faq_question";
import eventmap from "../content/events";


function EventCard(props) {
  const mp = eventmap[props.eventid];
  const faqitems = [];
  for(var i = 0; i < mp['faqques'].length; i++){
    faqitems.push(<OneFaqQuestion heading = {mp['faqques'][i]} body = {mp['faqans'][i]}
    id = {i + props.eventid}
    />);
  }

  return (
    <div className="EventCard container">
      <div className="row">
        <div className="col-5 d-none d-md-block imagecol">
        <div className="row">
            <div className="col-10 offset-2">
            <img src={mp["imgsrc"]} alt="" className="sideimg sideimgmd"/>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row title_row">{mp["title"]}</div>
          <div className="row d-block d-md-none">
            <div className="col-6 offset-3">
            <img src={mp["imgsrc"]} alt="" className="sideimg"/>
            </div>
          </div>
          <div className="row">
            <div className="event_desc">
              {mp['desc']}
            </div>

            <div class="accordion accordion-flush eventac" id="accordionExample">
              {faqitems}
            </div>

          </div>
          <div className="row btn-row">
            <button className="btn btn-purple">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  
}



export default EventCard;
