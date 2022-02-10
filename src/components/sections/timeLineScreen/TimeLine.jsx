import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  Java,
  C,
  WebDevelopment,
  Javascript,
  ReactIcon,
} from '../../icons/Icons';
import {
  FirstText,
  SecondText,
  ThirdText,
  FourthText,
  FifthText,
} from './Texts';
import {
  BackgroundTimeLine as Section,
  Title,
  Paragraph,
  TimelineTitle,
} from './StyledTimeLine.js';

function TimeLine() {
  return (
    <Section className="time-line">
      <TimelineTitle>
        Timeline about my developer life
      </TimelineTitle>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #EA2D2E' }}
          contentStyle={{ borderTop: '2px solid #EA2D2E', boxShadow: '0px 5px 5px #bbb' }}
          date="2017"
          iconStyle={{ background: '#eee' }}
          icon={<Java />}
        >
          <Title> First experience with programming languages </Title>
          <Paragraph>
            { FirstText }
          </Paragraph>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid #659AD3' }}
          contentStyle={{ borderTop: '2px solid #659AD3', boxShadow: '0px 5px 5px #bbb' }}
          date="2018 - 2019"
          iconStyle={{ background: '#eee' }}
          icon={<C />}
        >
          <Title> Second experience using programming languages </Title>
          <Paragraph>
            { SecondText }
          </Paragraph>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid #888' }}
          contentStyle={{ borderTop: '2px solid #888', boxShadow: '0px 5px 5px #bbb' }}
          date="2020"
          iconStyle={{ background: '#eee' }}
          icon={<WebDevelopment />}
        >
          <Title> When I met the Web Development </Title>
          <Paragraph>
            { ThirdText }
          </Paragraph>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid #F0DB4F' }}
          contentStyle={{ borderTop: '2px solid #F0DB4F', boxShadow: '0px 5px 5px #bbb' }}
          date="Nov 2020 - 2021"
          iconStyle={{ background: '#eee' }}
          icon={<Javascript />}
        >
          <Title> When I started study Web Development </Title>
          <Paragraph>
            { FourthText }
          </Paragraph>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentArrowStyle={{ borderRight: '7px solid #61DAFB' }}
          contentStyle={{ borderTop: '2px solid #61DAFB', boxShadow: '0px 5px 5px #bbb' }}
          date="Dec 2021 - currently"
          iconStyle={{ background: '#eee' }}
          icon={<ReactIcon />}
        >
          <Title> How am I currently </Title>
          <Paragraph>
            { FifthText }
          </Paragraph>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Section>
  );
}

export default TimeLine;
