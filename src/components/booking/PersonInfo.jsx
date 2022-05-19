import PersonForm from "../booking/PersonForm";

export default function TicketDetails(props) {
  return (
    <section id="person_info">
      <h2 className="heading">Your personal information</h2>
      <PersonForm props={props} />
      <div className="booking_flow_nav">
        <button
          className="back_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setTogglePersonInfo(false);
            props.toggleComponentsArr.setToggleTicketDetails(true);
            props.setIsCurrent(props.isCurrent - 1);
          }}
        >
          Back
        </button>
        <button
          className="continue_btn shape"
          onClick={() => {
            props.toggleComponentsArr.setTogglePersonInfo(false);
            props.toggleComponentsArr.setToggleBasketOverview(true);
            props.setIsCurrent(props.isCurrent + 1);
          }}
        >
          Continue
        </button>
      </div>
    </section>
  );
}