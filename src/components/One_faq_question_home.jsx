import "./One_faq_question_home.scss";

function OneFaqQuestionHome(props) {
  const headingid = "heading" + props.id;
  const divid = "collapse" + props.id;
  return (
    <div class="accordion-item homeac">
      <div class="accordion-header container homeac" id={headingid}>
        <button
          type="button"
          class = "accordion-button acbtn homeacbtn"
          data-bs-toggle="collapse"
          data-bs-target={"#" + divid}
          aria-expanded="true"
          aria-controls={divid}
        >
          {props.heading}
        </button>
      </div>
      <div
        id={divid}
        class="accordion-collapse collapse collapse acc homeac"
        aria-labelledby={headingid}
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body acbdy homeac">
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default OneFaqQuestionHome;
