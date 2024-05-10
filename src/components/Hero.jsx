function Hero(props) {
  return (
    <div className="hero">
      {props.title}
      {props.lineOne}
      {props.lineTwo}
    </div>
  );
}

export default Hero;
