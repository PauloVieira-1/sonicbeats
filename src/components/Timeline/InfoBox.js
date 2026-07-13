function InfoBox({ children, ...props }) {
  return (
    <div className="bg-white border p-4 rounded-4 text-start shadow w-75 mx-auto">
      <h4 className="fw-bold">{props.title}</h4>
      <h6 className="text-muted">{props.subTitle}</h6>
      <p className="mt-3 mb-0 fw-light">{props.description}</p>
    </div>
  );
}

export default InfoBox;
