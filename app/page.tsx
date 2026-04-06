'use client';

import { useState } from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/tech-icons/typescript.svg' },
  { name: 'Java', icon: '/tech-icons/java.svg' },
  { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
  { name: 'Spring Boot', icon: '/tech-icons/springboot.svg' },
  { name: 'GraphQL', icon: '/tech-icons/graphql.svg' },
  { name: 'Tailwind CSS', icon: '/tech-icons/tailwind.svg' },
  { name: 'Docker', icon: '/tech-icons/docker.svg' },
];


export default function Home() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('Message sent! I\'ll get back to you soon.');
    event.currentTarget.reset();
  };

  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I am</p>
          <h1>Leo</h1>
          <p className="hero-description">
            Fullstack Engineer building fast, elegant, and reliable web experiences.
          </p>
          <div className="hero-actions">
            <a href="#technologies" className="button button-primary">
              Technologies
            </a>
            <a href="#contact" className="button button-secondary">
              Contact Me
            </a>
            <a href="/cv.pdf" download className="button button-secondary">
              Download My CV
            </a>
          </div>
        </div>


          <div className="photo-frame">
            <Image
              src="/profile-photo.jpeg"
              alt="Leo Palmeiro Profile Photo"
              width={260}
              height={260}
              className="profile-image"
              priority
            />
          </div>

      </section>

      <section id="technologies" className="section-block">
        <div className="section-header">
          <p className="eyebrow">Relevant tools</p>
          <h2>Technologies I Use</h2>
        </div>
        <div className="tech-grid">
          {technologies.map((tech) => (
            <div key={tech.name} className="tech-card">
              <Image
                src={tech.icon}
                alt={`${tech.name} logo`}
                width={48}
                height={48}
                className="tech-icon"
              />
              <p className="tech-name">{tech.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section-block">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2>Academic Background</h2>
        </div>
        <div className="education-grid">
          <div className="education-card">
            <p className="education-school">Universidad del Claustro Gómez</p>
            <p className="education-degree">Master Propio en Administración y Dirección Empresarial, Business Administration and Management, General</p>
            <p className="education-dates">2018 - 2019</p>
          </div>
          <div className="education-card">
            <p className="education-school">Faculdade UnYLeYa</p>
            <p className="education-degree">MBA – Executive Project Management, Project Management</p>
            <p className="education-dates">2017 - 2017</p>
          </div>
          <div className="education-card">
            <p className="education-school">Universidade Estácio de Sá</p>
            <p className="education-degree">MBA – Project Management</p>
            <p className="education-dates">2016 - 2016</p>
          </div>
          <div className="education-card">
            <p className="education-school">Universidade Estácio de Sá</p>
            <p className="education-degree">High School at Estácio de Sá - Analysis and System Development, Computer Science</p>
            <p className="education-dates">2013 - 2016</p>
          </div>
          <div className="education-card">
            <p className="education-school">Parobé School</p>
            <p className="education-degree">Electronics Technical Course, Electrical, Electronic and Communications Engineering Technology/Technician</p>
            <p className="education-dates">2000 - 2002</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-block contact-section">
        <div className="section-header">
          <p className="eyebrow">Let's talk</p>
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-info-container">
          <a 
            href="mailto:palmeiro.leonardo@gmail.com?subject=Let's talk"
            className="contact-info-link"
            title="Send me an email"
          >
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="contact-text">palmeiro.leonardo@gmail.com</span>
          </a>

          <a 
            href="tel:+34611649173"
            className="contact-info-link"
            title="Call me"
          >
            <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="contact-text">+34 611 649 173</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/leonardo-palmeiro-834a1755/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-info-link"
            title="Visit my LinkedIn profile"
          >
            <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            <span className="contact-text">LinkedIn Profile</span>
          </a>
        </div>

      </section>
    </main>
  );
}
