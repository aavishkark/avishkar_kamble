'use client';
import './footer.css';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const footerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { tension: 200, friction: 20 },
  });

  return (
    <animated.footer
      ref={ref}
      style={footerAnimation}
      className="footer-container"
    >
      <div className="footer-text">
        <p>&copy; 2025 Avishkar Kamble</p>
      </div>
    </animated.footer>
  );
}