import React from 'react';

const skillIcons = {
  HTML: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path fill="#E34F26" d="M19 3.6h90l-8.5 93.5L63.9 122 27.5 97.1 19 3.6z"/>
      <path fill="#F06529" d="M64 112.3l36.2-16.3 7.6-85.5H64v101.8z"/>
      <path fill="#EBEBEB" d="M63.9 63.7H44.6l2.1 24.2L63.9 92l18.5-4.1 1.2-13.4H63.9V63.7z"/>
      <path fill="#fff" d="M63.9 35.5h35.5l-.5 5.5H63.9V35.5zM63.9 78.4l-.1 0-14.3-3.9-1-11.1h7.1l.4 4.5 7.8 2.2 7.8-2.2.5-5.1H40.4l-1.4 15.2L63.9 89l24.2-8.6 1.5-16.7H63.9v4.7z"/>
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path fill="#1572B6" d="M19 3.6h90l-8.5 93.5L63.9 122 27.5 97.1 19 3.6z"/>
      <path fill="#33A9DC" d="M64 112.3l36.2-16.3 7.6-85.5H64v101.8z"/>
      <path fill="#fff" d="M63.9 35.5h35.5l-.5 5.5H63.9V35.5zM63.9 78.4l-.1 0-14.3-3.9-1-11.1h7.1l.4 4.5 7.8 2.2 7.8-2.2.5-5.1H40.4l-1.4 15.2L63.9 89l24.2-8.6 1.5-16.7H63.9v4.7z"/>
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
      <path d="M84.2 96.5c-1.5 2.5-3.5 4.5-6.3 4.5-3.3 0-5.1-1.6-6.1-3.6l6.2-3.8c.9 1.6 1.8 3 3.9 3 2 0 3.2-.8 3.2-3.9V48.5h7.2v48zM66.5 90.4c0 3.5-2.1 6.4-5.2 6.4-2.8 0-4.4-1.1-5.3-2.4l6.1-3.8c.5.9 1.1 1.6 2.3 1.6 1.1 0 1.8-.4 1.8-2V72.5h7.2v17.9z" fill="#000"/>
    </svg>
  ),
  React: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <circle cx="64" cy="64" r="14" fill="#61DAFB"/>
      <g fill="none" stroke="#61DAFB" strokeWidth="8">
        <ellipse cx="64" cy="64" rx="40" ry="16"/>
        <ellipse cx="64" cy="64" rx="40" ry="16" transform="rotate(60 64 64)"/>
        <ellipse cx="64" cy="64" rx="40" ry="16" transform="rotate(120 64 64)"/>
      </g>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="16" fill="#3178C6"/>
      <path d="M44 40h40v10H54v20h22v10H54v25H44V40zm45 0h19v10H89v5h9v10h-9v20h11v10H89v15H79V40h10z" fill="#fff"/>
    </svg>
  ),
  'Node.js': (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 4L14 26v76l50 22 50-22V26L64 4z" fill="#83CD29"/>
      <path d="M64 16l40 17v62L64 112 24 95V33l40-17z" fill="#3C873A"/>
      <path d="M64 40l18.7 10.6v21L64 72l-18.7.6v-21L64 40z" fill="#fff" opacity="0.9"/>
    </svg>
  ),
  Express: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#000"/>
      <path d="M32 44h64v12H32v-12zm0 28h64v12H32v-12zm0 28h40v12H32v-12z" fill="#fff"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 12C36 12 12 35.6 12 64s24 52 52 52 52-23.6 52-52S92 12 64 12z" fill="#00758F"/>
      <path d="M64 24c-22 0-40 17.8-40 40s18 40 40 40 40-17.8 40-40-18-40-40-40zm0 64c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24z" fill="#fff"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 14c-16 14-24 30-24 47 0 12 7 21 12 25 6-8 16-13 24-15 7 2 17 7 23 15 5-4 12-13 12-25 0-17-8-33-24-47-8 9-16 15-24 15s-16-6-24-15z" fill="#47A248"/>
      <path d="M64 12c-18 16-26 34-26 54 0 14 11 25 24 34 13-9 24-20 24-34 0-20-8-38-22-54z" fill="#3FA037"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="24" fill="#F05133"/>
      <path d="M86 40a14 14 0 11-9.2 25.4l-26 16a14 14 0 11-4.6-8.6l26-16A14 14 0 86 40zm-10.3 26.2L52.9 64.7a14 14 0 010-5.4l23.1-14.2a14 14 0 112.7 5.4l-16.4 10.1 16.4 10.1a14 14 0 11-2.7 5.4z" fill="#fff"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
      <path fill="#181717" d="M64 4C29.8 4 4 29.8 4 64c0 25.4 16.5 46.9 39.4 54.5 2.9.5 4-.1 4.82-.5v-2.2c-16 3.5-19.4-7.7-19.4-7.7-2.7-6.9-6.7-8.8-6.7-8.8-5.5-3.8.4-3.7.4-3.7 6 .4 9.1 6.2 9.1 6.2 5.4 9.2 14.1 6.6 17.6 5 0-3.9 2.1-6.6 3.8-8.1-12.8-1.5-26.3-6.4-26.3-28.5 0-6.3 2.2-11.4 5.8-15.4-.6-1.4-2.5-7.6.6-15.8 0 0 4.7-1.5 15.5 5.9 4.5-.27 9.3-.4 14.1-.4 4.8 0 9.6.14 14.1.4 10.8-7.4 15.5-5.9 15.5-5.9 3.1 8.2 1.2 14.4.6 15.8 3.6 4 5.8 9.2 5.8 15.4 0 22.1-13.5 27-26.4 28.4 2.2 1.9 4.2 5.6 4.2 11.2v16.6c0 1.5 1.1 3.2 4 2.7 22.9-7.6 39.4-29.1 39.4-54.5C124 29.8 98.2 4 64 4z"/>
    </svg>
  ),
};

function SkillIcon({ name, showLabel = true }) {
  const icon = skillIcons[name];
  
  return (
    <div className="skill-icon-wrapper">
      <div className="skill-icon">
        {icon || <span className="skill-icon-fallback">{name.slice(0, 2).toUpperCase()}</span>}
      </div>
      {showLabel && <span className="skill-icon-label">{name}</span>}
    </div>
  );
}

export default SkillIcon;
