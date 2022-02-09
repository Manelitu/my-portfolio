import React from 'react';
import { Parallax } from 'react-parallax';
import TypeAnimation from 'react-type-animation';
import { Intro, ArrowIcon } from './StyledStartScreen';

import introBackground from '../../../../public/img/intro-background.jpg';
import arrowIcon from '../../../../public/icon/arrow.png';

function StartScreen() {
  return (
    <div>
      <section>
        <Parallax bgImage={introBackground} bgImageAlt="dev pc" blur={0.5} strength={500}>
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
            <ArrowIcon src={arrowIcon} />
          </Intro>
        </Parallax>
      </section>
    </div>
  );
}

export default StartScreen;
