import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .initials {
    font-family: 'Fontdiner Swanky', cursive;
    font-size: 1.5rem;
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Python',
    'Java',
    'C++',
    'PHP',
    'MongoDB',
    'Microsoft Azure',
    'Amazon Web Services',
    'Google Cloud Platform',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <link
        href="https://fonts.googleapis.com/css?family=Bebas+Neue|Fontdiner+Swanky|Yesteryear&display=swap"
        rel="stylesheet"></link>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p style={{ textAlign: 'justify' }}>
              <b>
                {' '}
                <span className="initials">C</span>reative • <span className="initials">A</span>
                mbitious • <span className="initials">P</span>assionate
              </b>
              <br />
              An optimist who believes in a bright future and ability to build,learn & explore every
              horizon of technology.I’m slowly attempting to stair-step my way to entrepreneurship
              while staying sane, giving back, and living well. My passion is split between my love
              for amazing Engineering-Technology and my drive to design graphics & create videos.
              Also I like working in a team, you'll learn faster and much more. As the saying goes:
              'two heads are better than one'.
            </p>
            <span>
              <b>| Focus |</b>
            </span>
            <p style={{ textAlign: 'justify' }}>
              The focus of my work shifts as the need arises for certain skills in the working
              environment. This can be both a positive and negative experience, on the one hand you
              can hone your skills in an in-demand area, but on the other hand you’re ready to
              explore different areas. This is why I explore ideas and concepts outside of my work
              so I always have something new to share.
            </p>
            <span>
              <b>| ABOVE AND BEYOND |</b>
            </span>
            <p style={{ textAlign: 'justify' }}>
              My work doesn’t end with the brief. Going above and beyond the parameters that have
              been set out is essential, not only for your own personal achievement and development
              but it reflects back into the work you produce for clients.
            </p>

            <p style={{ textAlign: 'justify' }}>Here are a few technologies I’ve worked on:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.png"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
