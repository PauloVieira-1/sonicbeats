import Tick from "../../assets/svg/check-circle.svg";

function CompleteCheckout() {
  return (
    <div className="text-center p-5 my-5" style={{ minHeight: "75vh" }}>
      <h1 className="mt-5">Checkout Completed</h1>
      <h6>Thank you for your purchase!</h6>
      <img alt="" src={Tick} className="img-fluid"></img>
    </div>
  );
}

export default CompleteCheckout;
