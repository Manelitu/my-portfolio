import React from 'react';
import { Parallax } from 'react-parallax';
import TypeAnimation from 'react-type-animation';
import { scroller } from 'react-scroll';
import { Intro, ArrowIcon } from './StyledStartScreen';

import introBackground from '../../../../public/img/intro-background.jpg';
import arrowIcon from '../../../../public/icon/arrow.png';

function StartScreen() {
  const scrollToSection = () => {
    scroller.scrollTo('time-line', {
      duration: 1500,
      delay: 300,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div>
      <section>
        <Parallax bgImage={introBackground} bgImageAlt="dev pc" blur={0.5} strength={440}>
          <Intro>
            <TypeAnimation
              cursor={false}
              sequence={['', 2000, 'Eman ', 600, 'Vict ', 400, 'Emanuel ']}
              className="type-animation"
            />
            <TypeAnimation
              className="type-animation orange"
              sequence={['', 5200, 'victor. ']}
            />
            <ArrowIcon src={arrowIcon} onClick={scrollToSection} />
          </Intro>
        </Parallax>
      </section>
    </div>
  );
}

export default StartScreen;
