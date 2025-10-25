import React from 'react';
import styles from './Banner.module.css';

type BannerProps = {
  src: string;
  alt: string;
};

const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.banner} />;
};

export default Banner;
