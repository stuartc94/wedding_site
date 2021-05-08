import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Info = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner grunge-back',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'When & Where'
  };

  return (
    <div id="info">
      <section
        {...props}
        className={outerClasses}
        >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left info-blurb" data-reveal-container=".split-item">
                <div className="text-md fw-600 tt-u mb-8">
                    When
                    </div>
                  <h3 className="mt-0 mb-12 info-header">
                    October 15th
                    </h3>
                  <p className="m-0">
                    More info to come as to exact times for guest to arrive at the venue. Check back soon for more info!
                    </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                    <a href="https://www.drakewoodfarm.com/" target='blank'>
                      <Image
                        src={require('./../../assets/images/drakewood2.jpg')}
                        alt="Features split 01"
                        width={528}
                        height={396}
                        style={{transform: 'rotate(5deg)', border: 'solid 20px white'}} />
                    </a>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-right info-blurb" data-reveal-container=".split-item">
                <div className="text-md fw-600 tt-u mb-8">
                    Where
                    </div>
                  <h3 className="mt-0 mb-12 info-header">
                    Drakewood Farms
                    </h3>
                  <p className="m-0">
                  Drakewood Farm is a beautiful historic all-inclusive venue 15 minutes from downtown Nashville. 40 acres of rolling farmland, and an 1850 mansion.
                    </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                                        <a href="https://www.drakewoodfarm.com/" target='blank'>
                      <Image
                        src={require('./../../assets/images/drakewood.jpg')}
                        alt="Features split 01"
                        width={528}
                        height={396}
                        style={{transform: 'rotate(-2deg)', border: 'solid 20px white'}} />
                    </a>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left info-blurb" data-reveal-container=".split-item">
                <div className="text-md fw-600 tt-u mb-8">
                    How
                    </div>
                  <h3 className="mt-0 mb-12 info-header">
                    Directions
                    </h3>
                  <p className="m-0">
                    Drakewood Farms is located on<br /> <a href="https://goo.gl/maps/ipyyDBVPYgrpppm49" target="blank" style={{color: "#aa5518"}}>5508 Brick Church Pike, Goodlettsville, TN 37072 <FontAwesomeIcon style={{color: 'blue'}} icon="coffee" /></a>
                    </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile reveal-from-bottom',
                    imageFill && 'split-item-image-fill'
                    )}
                    data-reveal-container=".split-item">
                      <a href="https://goo.gl/maps/ipyyDBVPYgrpppm49" target="blank">
                        <Image
                          src={require('./../../assets/images/drakenest.jpg')}
                          alt="Features split 01"
                          width={528}
                          height={396}
                          style={{transform: 'rotate(5deg)', border: 'solid 20px white'}} />
                      </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Info.propTypes = propTypes;
Info.defaultProps = defaultProps;

export default Info;