import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader';
import { size } from 'lodash';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section test-background',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Regestries'
  };

  return (
    <div id="registry">
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <h2 style={{fontFamily: 'Roboto, sans-serif', color: '#722f37', textAlign: 'center', fontSize: '25px', marginTop: '-50px'}}>Here are our registries we have setup</h2>
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <a href="https://www.williams-sonoma.com/registry/qdjgl2ksdh/registry-list.html" target="blank">
                <Image
                  src={require('./../../assets/images/Williams-Sonoma.png')}
                  alt="Willams Sonoma"
                  width={343}
                  height={96} 
                  />
                </a>
              </div>

              <div className="tiles-item reveal-from-bottom" href="">
              <a href="https://www.zola.com/registry/stuartandhailey" target="blank">
                <Image
                  src={require('./../../assets/images/Zola-Logo.png')}
                  alt="Willams Sonoma"
                  width={343}
                  height={96} 
                  />
                </a>
              </div>

            </div>

            <h2 className='' style={{fontFamily: 'Roboto, sans-serif', color: '#722f37', textAlign: 'center', fontSize: '25px', marginTop: '30px', marginBottom: '25px'}}>Places we would love a gift card from!</h2>
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-bottom" href="">
              <a href="https://www.zola.com/registry/stuartandhailey" target="blank">
                <Image
                  src={require('./../../assets/images/REI.png')}
                  alt="Willams Sonoma"
                  width={343}
                  height={96} 
                  />
                </a>
              </div>

              <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <a href="https://www.target.com/c/gift-cards/-/N-5xsxu" target="blank">
                <Image
                  src={require('./../../assets/images/target-logo.png')}
                  alt="Willams Sonoma"
                  width={343}
                  height={96}
                  className="target-logo"
                  />
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;