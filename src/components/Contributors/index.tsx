import React from 'react';
import styles from './styles.module.css';

const CONTRIBUTORS = [
  {
    name: 'Himanshu Saini',
    avatar: 'https://github.com/Misterr-H.png',
    url: 'https://github.com/Misterr-H',
    role: 'Creator & Maintainer',
  },
  {
    name: 'Dilpreet Grover',
    avatar: 'https://github.com/dfordp.png',
    url: 'https://github.com/dfordp',
    role: 'Contributor',
  },
];

export default function Contributors() {
  return (
    <section className={styles.contributorsSection}>
      <h2 className={styles.title}>Builders</h2>
      <div className={styles.list}>
        {CONTRIBUTORS.map((contrib) => (
          <a
            key={contrib.name}
            href={contrib.url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={contrib.avatar} alt={contrib.name} className={styles.avatar} />
            <div>
              <div className={styles.name}>{contrib.name}</div>
              <div className={styles.role}>{contrib.role}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
