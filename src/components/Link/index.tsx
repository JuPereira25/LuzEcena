import React from 'react';
import styles from './Link.module.css';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
};

const Link = ({ children, ...rest }: LinkProps): React.ReactElement => {
  return (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  );
};

export default Link;
