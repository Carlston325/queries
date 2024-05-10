function LinkBox(props) {
  return (
    <a href={props.link}>
      <div>
        <h4>{props.linkName}</h4>
      </div>
    </a>
  );
}

export default LinkBox;
