function Info(props) {
  return (
    <div>
      <h3>
        {props.info.name}&nbsp;&nbsp;
        {props.info.email}&nbsp;&nbsp;
        {props.info.pin}
      </h3>
    </div>
  );
}

export default Info;
