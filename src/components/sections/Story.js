import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import storyImage from './../../assets/images/StoryImage.jpg'

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const Story = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: 'Our Story'
  };

  return (
    <div id="story">
      <section
        {...props}
        className={outerClasses}
        >
        <SectionHeader data={sectionHeader} className="center-content section-header-font header-style mt-32" />
        <div className="story-background">
          <div className="container">
            <div className={innerClasses}>
              <div style={{display: 'flex'}} className="story-container">
                <img alt='story image' src={storyImage} className="story-image"></img>
                <div className="p-card">
                  <p className="content-center story-section">Girl meets Boy.<br />Boy meets Girl. <br />Boy likes Girl.<br />Boy ask Girl out. <br />Girls says no because she is busy that weekend. 
                  <br />Girl shares with Friends.<br />Friends yell at Girl that Boy wanted her to be his Girlfriend, not his Date.<br />Girl calls back Boy and asks if it's too late.<br />Boy says no. 
                  <br />Fast forward 11 years.<br />Boy and Girl get married.<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Story.propTypes = propTypes;
Story.defaultProps = defaultProps;

export default Story;