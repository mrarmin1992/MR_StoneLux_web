'use client';

import Image from 'next/image';
import hero from '/assets/naslovna.jpg';

export default function PageLayout() {
  return (
    <div>
      {/* HERO */}
      <div style={styles.heroContainer}>
        <div style={styles.imageWrapper}>
          <Image
            src={hero}
            alt="Naslovna slika"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>

        <div style={styles.overlay}></div>

        <div style={styles.heroContent}>
          <h2 style={styles.title}>
            Kamenorezačka radnja{" "}
            <span style={styles.highlight}>MR Stonelux</span>
          </h2>

          <p style={styles.subtitle}>
            Majstori kamenorezačkog zanata
          </p>
        </div>
      </div>

      {/* RESPONSIVE STYLE */}
      <style jsx>{`
        @media (max-width: 768px) {
          h2 {
            font-size: 1.8rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.5rem !important;
          }
          p {
            font-size: 0.9rem !important;
          }
        }
      `}</style>

    </div>
  );
}

const styles = {
  heroContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  heroContent: {
    position: 'relative',
    zIndex: 2,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 15px',
    gap: '10px',
  },
  title: {
    fontSize: '3rem',
    color: 'white',
    margin: 0,
  },
  highlight: {
    color: '#ffd700',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#ffd700',
    margin: 0,
  },
};