import "./One_faq_question.scss";
function OneFaqQuestion(props) {
  const headingid = "heading" + props.id;
  const divid = "collapse" + props.id;
  return (
    <div class="accordion-item eventac">
      <div class="accordion-header eventac container" id={headingid}>
        <button
          type="button"
          class = "accordion-button acbtn eventacbtn"
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
        class="accordion-collapse collapse collapse acc eventac"
        aria-labelledby={headingid}
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body acbdy eventac">
          <p>{props.body}</p>
        </div>
      </div>
    </div>
  );
}

export default OneFaqQuestion;
