import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Modal from '../elements/Modal';
import header1 from './../../assets/images/Header.jpg'
import header2 from './../../assets/images/Header2.jpg'
import header3 from './../../assets/images/Header3.jpg'

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="header-section" data-reveal-value="20px" data-reveal-delay="800" style={{position: 'relative'}}>
        <Carousel autoPlay={true} interval={7000} infiniteLoop={true} showArrows={false} showStatus={false} style={{maxHeight: '416px'}}>
          <div className="header-section-1">
            <Image style={{transform: 'translateY(-26%)'}} alt="Happy Couple" src={header1} />
          </div>
          <div className="header-section-2">
            <Image style={{transform: 'translateY(-26%)'}} alt="Happy Couple" src={header2} />
          </div>
          <div className="header-section-3">
            <Image style={{transform: 'translateY(-27%)'}} alt="Happy Couple" src={header3} />
          </div>
        </Carousel>
        <div>
          <div className="centered-header reveal-from-bottom underline-header" data-reveal-delay="200">After <i>10</i> years it's finally happening!<br /><br /><span className="under-title" style={{fontFamily: "Montserrat, sans-serif"}}>H / S</span></div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;