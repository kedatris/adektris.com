import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import IconCode from "@/icons/code.svg";
import IconDesign from "@/icons/design.svg";
import * as css from "./styles";

const About = () => {
  return (
    <div id="aboutMe" className={css.aboutWrapper}>
      <Controller>
        <Scene duration={1500} triggerHook="onEnter">
          <h3 className={css.aboutTitle}>Who Am I</h3>
        </Scene>
        <div className={css.aboutProfile}>
          <div className={css.aboutProfilePhoto}>
            <Image layout="fill" src="/images/photo.jpg" alt="photo" />
          </div>
          <p className={css.aboutProfileText}>
            Just an ordinary person that have skills in programming and
            designing. Have experience more than 9 years in Tech Company as
            programmer and love to drawing from child. Currently I working on at
            one of Tech Company in Jakarta as Front-End Engineer.
          </p>
        </div>
        <div className={css.aboutBody}>
          <div className={css.aboutContent}>
            <div className={css.imageCode}>
              <IconCode />
            </div>
            <span className={css.aboutText}>Code</span>
            <div className={css.aboutDescription}>
              Code is my "language" as a programmer. Passionate to solving the
              problems like playing a puzzle game with Javascript, HTML, and
              CSS.
            </div>
          </div>
          <span className={css.aboutSeparator}>.</span>
          <div className={css.aboutContent}>
            <div className={css.imageDesign}>
              <IconDesign />
            </div>
            <span className={css.aboutText}>Design</span>
            <div className={css.aboutDescription}>
              Design is one of my hobby, especially on make a design for Web and
              illustration. And sometimes I also take the opportunity to make a
              design for freelance project.
            </div>
          </div>
        </div>
      </Controller>
    </div>
  );
};

export default About;
