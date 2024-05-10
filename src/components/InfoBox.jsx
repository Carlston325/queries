export default function InfoBox(props) {
  return (
    <div className="info">
      <h3>{props.subHeading}</h3>
      <p>{props.descrip}</p>
      <a href={props.link}>{props.linkTitle}</a>
    </div>
  );
}
