function InfoBox({ children, ...props }) {
  return (
    <div className="bg-light p-4 rounded-4 text-start shadow w-75 mx-5">
      <h3>{props.title}</h3>
      <h5>{props.subTitle}</h5>
      <p className="mt-3 fw-light">{props.description}</p>
    </div>
  );
}

export default InfoBox;
