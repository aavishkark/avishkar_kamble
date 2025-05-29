'use client';
import './skills.css';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from '@react-spring/web';

const skills = [
  { name: 'HTML', img: 'https://img.icons8.com/?size=50&id=20909&format=png&color=000000' },
  { name: 'CSS', img: 'https://img.icons8.com/?size=50&id=21278&format=png&color=000000' },
  { name: 'JavaScript', img: 'https://img.icons8.com/?size=50&id=108784&format=png&color=000000' },
  { name: 'React', img: 'https://img.icons8.com/?size=50&id=123603&format=png&color=000000' },
  { name: 'Redux', img: 'https://img.icons8.com/?size=50&id=jD-fJzVguBmw&format=png&color=000000' },
  { name: 'Node.js', img: 'https://img.icons8.com/?size=50&id=54087&format=png&color=000000' },
  { name: 'Express.js', img: 'https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png&color=FF3700' },
  { name: 'MongoDB', img: 'https://img.icons8.com/?size=50&id=kg46nzoJrmTR&format=png&color=61FF00' },
  { name: 'Wordpress', img: 'https://img.icons8.com/?size=50&id=12472&format=png&color=00BDFF' }
];

function AnimatedSkill({ name, img }: { name: string; img: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 220, friction: 20 },
  });

  return (
    <animated.div className="skill" ref={ref} style={animation}>
      <div className="skill_image">
        <img src={img} alt={name} />
      </div>
      <span>{name}</span>
    </animated.div>
  );
}

export default function Skills() {

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(40px)',
    config: { tension: 220, friction: 20 },
  });
  return (
    <animated.div ref={ref} style={animation} id="skills" className="skills-container">
      <div className="skills-header">My Skills</div>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <AnimatedSkill key={index} name={skill.name} img={skill.img} />
        ))}
      </div>
    </animated.div>
  );
}
