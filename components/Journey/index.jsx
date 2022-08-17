import Image from "next/image";
import * as css from "./styles";

const LEFT = "L";
const RIGHT = "R";

const Journey = () => {
  const journeys = [
    {
      company: "PT. Tokopedia",
      role: "Senior Front-End Engineer",
      year: "Dec 2017 - Present ",
      position: LEFT,
    },
    {
      company: "PT. Reservasi Global Digital",
      role: "Front-End Engineer",
      year: "Aug 2016 - Nov 2017 ",
      position: RIGHT,
    },
    {
      company: "PT. Jati Piranti Travelindo Pratama",
      role: "Senior Software Engineer",
      year: "Nov 2013 - Aug 2016 ",
      position: LEFT,
    },
    {
      company: "PT. Datindo Infonet Prima",
      role: "Software Engineer",
      year: "Oct 2012 - Nov 2013 ",
      position: RIGHT,
    },
  ];

  const renderJourneyItem = () => {
    return journeys.map((journey, index) => {
      return (
        <div key={index}>
          {journey.position === LEFT ? (
            <div className={css.journeyBoxLeft}>
              <div className={css.journeyBoxContent}>
                <h3 className={css.journeyBoxTitle}>{journey.company}</h3>
                <p className={css.journeyBoxText}>{journey.role}</p>
              </div>
              <h3 className={css.journeyYear()}>{journey.year}</h3>
            </div>
          ) : (
            <div className={css.journeyBoxRight}>
              <div className={css.journeyBoxContent}>
                <h3 className={css.journeyBoxTitle}>{journey.company}</h3>
                <p className={css.journeyBoxText}>{journey.role}</p>
              </div>
              <h3 className={css.journeyYear(true)}>{journey.year}</h3>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div id="journey" className={css.journeyWrapper}>
      <h3 className={css.journeyTitle}>My Journey</h3>
      <div className={css.journeyContent}>
        <span className={css.journeyLine} />
        {renderJourneyItem()}
      </div>
      <div className={css.journeyFooter}>
        <Image src="/images/background.jpg" layout="fill" />
      </div>
    </div>
  );
};

export default Journey;
