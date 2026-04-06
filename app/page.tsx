'use client';

import { useState } from 'react';
import Image from 'next/image';

const technologies = [
  { name: 'React', icon: '/tech-icons/react.svg' },
  { name: 'Next.js', icon: '/tech-icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/tech-icons/typescript.svg' },
  { name: 'Node.js', icon: '/tech-icons/nodejs.svg' },
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
          <h1>Leo Palmeiro</h1>
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

      <section id="contact" className="section-block contact-section">
        <div className="section-header">
          <p className="eyebrow">Let's talk</p>
          <h2>Get In Touch</h2>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="your@email.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="How can I help?" required />
          </label>
          <button type="submit" className="button button-primary">
            Send Message
          </button>
          {formStatus ? <p className="form-status">{formStatus}</p> : null}
        </form>
      </section>
    </main>
  );
}
