import React from 'react';
import classNames from 'classnames';
import { HashLink as Link } from 'react-router-hash-link';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
      <li>
        <Link smooth to="#story">Our Story</Link>
      </li>
      <li>
        <Link smooth to="#info">When & Where</Link>
      </li>
      <li>
        <Link smooth to="#registry">Registry</Link>
      </li>
      </ul>
    </nav>
  );
}

export default FooterNav;