import LinkBox from "./LinkBox";
import InfoBox from "./InfoBox";

function Body(props) {
  // List INFO (ROW 1)
  const informativeListItems = [props.informativeOne, props.informativeTwo];

  const info1 = props.infoBox1;
  const info2 = props.infoBox2;

  const Links1 = props.linkBox1;
  const Links2 = props.linkBox2;

  return (
    <>
      <div className="pageBody">
        <div className="adsOne">
          <a href=""></a>
        </div>
        <div className="mainArea">
          {/* LIST ITEMS */}
          {info1 === true ? (
            <div className="informativeList">
              <ul>
                {informativeListItems.map((items) => (
                  <li>{items}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {/* LINK BOX 1 */}
          {Links1 === true ? (
            <div className="links">
              <LinkBox link={props.linkOne} linkName={props.linkNameOne} />
              <LinkBox link={props.linkTwo} linkName={props.linkNameTwo} />
            </div>
          ) : null}
          {/* INFOBOX INFORMATION */}
          {info2 === true ? (
            <InfoBox
              subHeading={props.infoBoxHeading}
              descrip={props.infoDescrip}
              link={props.infoLink}
              linkTitle={props.infoLinkTitle}
            />
          ) : null}
          {/* LINK BOX 2 */}
          {Links2 === true ? (
            <div className="links">
              <LinkBox link={props.linkThree} linkName={props.linkNameThree} />
              <LinkBox link={props.linkFour} linkName={props.linkNameFour} />
            </div>
          ) : null}
        </div>
        <div className="adsTwo">
          <a href=""></a>
        </div>
      </div>
    </>
  );
}
export default Body;
