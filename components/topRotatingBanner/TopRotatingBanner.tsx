'use client';
import { useRef } from 'react';
import styles from './TopRotatingBanner.module.css';
import Image from 'next/image';

const messages = [
  'Lorem ipsum dolor',
  'Lorem ipsum dolor',
  'Lorem ipsum dolor'
];

export default function TopRotatingBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.scrollingTrack} ref={bannerRef}>
        {Array(2)
          .fill(messages)
          .flat()
          .map((msg, index) => (
            <div className={styles.item} key={index}>
              <span className={styles.icon}>
                <Image src="/images/banner-icon.svg" width={100} height={100} alt='Top banner'/>
              </span>
              <span className={styles.text}>{msg}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
