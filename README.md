<div align="center">

# 🎬 Navision - Movie & TV Tracker 🍿

<div class="banner" style="margin-bottom: 2rem;">
  <svg width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes gradientShift {
        0% { stop-color: #FF5F6D; }
        50% { stop-color: #FFC371; }
        100% { stop-color: #FF5F6D; }
      }
      @keyframes textFloat {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      @keyframes textGlow {
        0% { text-shadow: 0 0 5px rgba(255,255,255,0.8); }
        50% { text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,95,109,0.4); }
        100% { text-shadow: 0 0 5px rgba(255,255,255,0.8); }
      }
      @keyframes iconSpin {
        from { transform: rotate(0deg) translateY(0); }
        to { transform: rotate(360deg) translateY(0); }
      }
      .gradient-bg-start {
        animation: gradientShift 8s ease-in-out infinite;
      }
      .gradient-bg-end {
        animation: gradientShift 8s ease-in-out infinite reverse;
      }
      .title-text {
        animation: textGlow 3s ease-in-out infinite, textFloat 6s ease-in-out infinite;
      }
      .subtitle-text {
        animation: textFloat 6s ease-in-out infinite reverse;
      }
      .icon-left {
        animation: iconSpin 10s linear infinite;
      }
      .icon-right {
        animation: iconSpin 10s linear infinite reverse;
      }
    </style>
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" class="gradient-bg-start" stop-color="#FF5F6D" />
        <stop offset="100%" class="gradient-bg-end" stop-color="#FFC371" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#000" flood-opacity="0.3" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad)" rx="15" filter="url(#shadow)" />
    <circle cx="60" cy="90" r="20" fill="#ffffff" opacity="0.2" class="icon-left" />
    <circle cx="740" cy="90" r="20" fill="#ffffff" opacity="0.2" class="icon-right" />
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="60" font-weight="bold" fill="white" text-anchor="middle" class="title-text">NAVISION</text>
    <text x="50%" y="75%" font-family="Arial, sans-serif" font-size="20" fill="white" text-anchor="middle" class="subtitle-text">Your Ultimate Movie & TV Show Companion</text>
  </svg>
</div>

<div class="badges" style="margin: 1.5rem 0;">
  <a href="https://github.com/preetam-90/Navision/stargazers">
    <img src="https://img.shields.io/github/stars/preetam-90/Navision?style=for-the-badge&logo=github&color=gold" alt="GitHub stars" />
  </a>
  <a href="https://github.com/preetam-90/Navision/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/preetam-90/Navision?style=for-the-badge&logo=github&color=blue" alt="GitHub license" />
  </a>
  <a href="https://bhaiflix.vercel.app/">
    <img src="https://img.shields.io/badge/vercel-deployed-success?style=for-the-badge&logo=vercel&color=black" alt="Vercel Deploy" />
  </a>
  <a href="https://github.com/preetam-90/Navision/commits/main">
    <img src="https://img.shields.io/github/last-commit/preetam-90/Navision?style=for-the-badge&logo=git&color=informational" alt="Last Commit" />
  </a>
  <a href="https://prettier.io/">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4?style=for-the-badge&logo=prettier&color=ff69b4" alt="Code Style" />
  </a>
</div>

<div class="profile-badges" style="margin-bottom: 2rem;">
  <a href="https://github.com/preetam-90">
    <img src="https://komarev.com/ghpvc/?username=preetam-90&label=Profile%20Views&color=0e75b6&style=for-the-badge" alt="Profile Views" />
  </a>
  <a href="https://github.com/preetam-90?tab=followers">
    <img src="https://img.shields.io/github/followers/preetam-90?style=for-the-badge&logo=github&label=Follow" alt="GitHub followers" />
  </a>
</div>

<div class="description" style="margin: 0 auto; max-width: 800px;">
  <h3 style="font-style: italic; margin-bottom: 2rem;">
    Your ultimate movie and TV show tracking companion with a sleek, modern interface
  </h3>

  <a href="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&duration=4000&pause=1000&color=FFC107&center=true&vCenter=true&width=1000&lines=Lights...+Camera...+%F0%9F%8E%A5+Action!;Experience+cinema+like+never+before;Track+everything+you+watch+effortlessly">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&duration=4000&pause=1000&color=FFC107&center=true&vCenter=true&width=1000&lines=Lights...+Camera...+%F0%9F%8E%A5+Action!;Experience+cinema+like+never+before;Track+everything+you+watch+effortlessly" alt="Typing SVG" />
  </a>
</div>

<div class="quick-links" style="margin: 2rem 0;">
  <a href="https://bhaiflix.vercel.app/" style="text-decoration: none; margin: 0 10px; padding: 8px 16px; background-image: linear-gradient(to right, #FF5F6D, #FFC371); color: white; border-radius: 20px; font-weight: bold; display: inline-block; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
    🌐 View Demo
  </a>
  <a href="#features" style="text-decoration: none; margin: 0 10px; padding: 8px 16px; background-image: linear-gradient(to right, #3F5EFB, #FC466B); color: white; border-radius: 20px; font-weight: bold; display: inline-block; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
    ✨ Features
  </a>
  <a href="#tech-stack" style="text-decoration: none; margin: 0 10px; padding: 8px 16px; background-image: linear-gradient(to right, #11998e, #38ef7d); color: white; border-radius: 20px; font-weight: bold; display: inline-block; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
    🛠️ Tech Stack
  </a>
  <a href="#installation" style="text-decoration: none; margin: 0 10px; padding: 8px 16px; background-image: linear-gradient(to right, #8E2DE2, #4A00E0); color: white; border-radius: 20px; font-weight: bold; display: inline-block; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
    🚀 Installation
  </a>
  <a href="#contributing" style="text-decoration: none; margin: 0 10px; padding: 8px 16px; background-image: linear-gradient(to right, #FF8008, #FFC837); color: white; border-radius: 20px; font-weight: bold; display: inline-block; transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
    🤝 Contribute
  </a>
</div>

</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 📋 Table of Contents

<div class="toc" style="background-color: #f8f9fa; border-left: 4px solid #FF5F6D; padding: 15px; border-radius: 0 10px 10px 0; margin-bottom: 2rem;">

- [🔍 Quick Start](#-quick-start)
- [✨ Features](#-features)
- [🎬 Demo](#-demo)
- [📸 Screenshots](#-screenshots)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Installation](#️-installation)
- [📱 Usage](#-usage)
- [🔮 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👋 Connect with Me](#-connect-with-me)

</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FFC371, #FF5F6D, transparent); margin: 2rem 0;"></div>

## 🔍 Quick Start

<div class="quick-links-section" style="display: flex; justify-content: space-around; margin: 2rem 0;">
  <a href="https://bhaiflix.vercel.app/" style="display: inline-block; padding: 10px 20px; background: linear-gradient(135deg, #FF5F6D 0%, #FFC371 100%); color: white; text-decoration: none; border-radius: 50px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
    🌐 View Live Demo
  </a>
  <a href="https://github.com/preetam-90/Navision" style="display: inline-block; padding: 10px 20px; background: linear-gradient(135deg, #3F5EFB 0%, #FC466B 100%); color: white; text-decoration: none; border-radius: 50px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;">
    ⭐ Star on GitHub
  </a>
</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## ✨ Features

<div class="features-container" style="background: linear-gradient(120deg, rgba(255,95,109,0.05), rgba(255,195,113,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">

### Core Features

<div class="feature-columns" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 1.5rem 0;">

<div class="feature-card" style="background-color: white; border-radius: 10px; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
  <h3 style="color: #FF5F6D; margin-top: 0;">🎬 Comprehensive Tracking</h3>
  <p>Track all your favorite movies and TV shows in one place with detailed information.</p>
</div>

<div class="feature-card" style="background-color: white; border-radius: 10px; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
  <h3 style="color: #FF5F6D; margin-top: 0;">🌙 Dark & Light Modes</h3>
  <p>Enjoy browsing with a theme that matches your preference and reduces eye strain.</p>
</div>

<div class="feature-card" style="background-color: white; border-radius: 10px; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
  <h3 style="color: #FF5F6D; margin-top: 0;">📱 Fully Responsive</h3>
  <p>Perfectly optimized for all devices - desktop, tablet, and mobile.</p>
</div>

</div>

### Additional Features

<div class="feature-columns" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 1.5rem 0;">

<div class="feature-card" style="background-color: white; border-radius: 10px; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
  <h3 style="color: #FFC371; margin-top: 0;">⚡ Lightning Fast</h3>
  <p>Optimized performance with Next.js for quick loading and smooth navigation.</p>
</div>

<div class="feature-card" style="background-color: white; border-radius: 10px; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
  <h3 style="color: #FFC371; margin-top: 0;">🔍 Advanced Search</h3>
  <p>Find exactly what you're looking for with powerful filtering options.</p>
</div>

<div class="feature-card" style="background-color: white; border-radius: 10px; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
  <h3 style="color: #FFC371; margin-top: 0;">🚀 Vercel Hosted</h3>
  <p>Reliable and super-fast hosting ensures the best user experience.</p>
</div>

</div>

</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 🛠️ Tech Stack

<div class="tech-stack" style="background: linear-gradient(120deg, rgba(63,94,251,0.05), rgba(252,70,107,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">

<div class="tech-badges" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin: 1.5rem 0;">
  <img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"/>
  <img src="https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js" alt="Next.js" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"/>
  <img src="https://img.shields.io/badge/-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"/>
  <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"/>
  <img src="https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel" alt="Vercel" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'"/>
</div>

<div class="tech-description" style="text-align: center; max-width: 800px; margin: 0 auto;">
  <p>Built with modern technologies to ensure the best performance, developer experience, and user satisfaction.</p>
</div>

</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 🎬 Demo

<div class="demo-container" style="position: relative; background: linear-gradient(120deg, rgba(17,153,142,0.05), rgba(56,239,125,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem; text-align: center;">

<div class="demo-decoration-top" style="position: absolute; top: -10px; left: 20px; font-size: 24px;">🎞️</div>
<div class="demo-decoration-bottom" style="position: absolute; bottom: -10px; right: 20px; font-size: 24px;">🍿</div>

<a href="https://bhaiflix.vercel.app/" style="display: block; margin: 0 auto; max-width: 90%; border-radius: 10px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='translateY(-10px)'; this.style.boxShadow='0 15px 40px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 10px 30px rgba(0,0,0,0.1)'">
  <img src="https://i.postimg.cc/L6Fq1gg1/navison.gif" alt="Navision Demo" style="width: 100%; height: auto; display: block;" />
</a>

<p style="margin-top: 20px; font-style: italic;">Experience the seamless interface and smooth navigation of Navision</p>

<a href="https://bhaiflix.vercel.app/" style="display: inline-block; margin-top: 20px; padding: 12px 30px; background: linear-gradient(135deg, #11998e, #38ef7d); color: white; text-decoration: none; border-radius: 50px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 10px rgba(0,0,0,0.1)'">
  Try Live Demo
</a>

</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 📸 Screenshots

<details>
<summary style="cursor: pointer; background: linear-gradient(135deg, #FF5F6D, #FFC371); color: white; padding: 10px 20px; border-radius: 30px; display: inline-block; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin-bottom: 20px; transition: all 0.3s ease;" onmouseover="this.style.boxShadow='0 6px 15px rgba(0,0,0,0.2)'; this.style.transform='translateY(-3px)'" onmouseout="this.style.boxShadow='0 4px 10px rgba(0,0,0,0.1)'; this.style.transform='translateY(0)'">
  📷 Click to view Screenshot Gallery
</summary>

<div class="gallery-container" style="background: linear-gradient(120deg, rgba(142,45,226,0.05), rgba(74,0,224,0.05)); padding: 30px; border-radius: 15px; margin: 20px 0;">

<table style="width: 100%; border-collapse: separate; border-spacing: 15px; margin: 0 auto;">
  <tr>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/DzYzx8jn/Screenshot-20250705-134320.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/DzYzx8jn/Screenshot-20250705-134320.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Home Page">
        <div style="text-align: center; font-weight: bold; color: #FF5F6D;">Home Page</div>
      </a>
    </td>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/kgqDGrR3/Screenshot-20250705-135044-1.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/kgqDGrR3/Screenshot-20250705-135044-1.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Movie Details">
        <div style="text-align: center; font-weight: bold; color: #FF5F6D;">Movie Details</div>
      </a>
    </td>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/xTKc9jC3/Screenshot-20250705-135021-2.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/xTKc9jC3/Screenshot-20250705-135021-2.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="TV Show Browser">
        <div style="text-align: center; font-weight: bold; color: #FF5F6D;">TV Show Browser</div>
      </a>
    </td>
  </tr>
  <tr>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/Vs0JHWPT/Screenshot-20250705-134934-2.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/Vs0JHWPT/Screenshot-20250705-134934-2.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Search Results">
        <div style="text-align: center; font-weight: bold; color: #FFC371;">Search Results</div>
      </a>
    </td>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/HxRVkVXB/Screenshot-20250705-134914.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/HxRVkVXB/Screenshot-20250705-134914.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Dark Mode">
        <div style="text-align: center; font-weight: bold; color: #FFC371;">Dark Mode</div>
      </a>
    </td>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/Ls4qCdmB/Screenshot-20250705-134849-1.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/Ls4qCdmB/Screenshot-20250705-134849-1.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Watch History">
        <div style="text-align: center; font-weight: bold; color: #FFC371;">Watch History</div>
      </a>
    </td>
  </tr>
  <tr>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/28vB3FHv/Screenshot-20250705-134836-1.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/28vB3FHv/Screenshot-20250705-134836-1.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Real-Time Updates">
        <div style="text-align: center; font-weight: bold; color: #3F5EFB;">Real-Time Updates</div>
      </a>
    </td>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/wv71zhy1/Screenshot-20250705-134703-1.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/wv71zhy1/Screenshot-20250705-134703-1.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="No Account Required">
        <div style="text-align: center; font-weight: bold; color: #3F5EFB;">No Account Required</div>
      </a>
    </td>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/PNGhBDYn/Screenshot-20250705-134400.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/PNGhBDYn/Screenshot-20250705-134400.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Responsive Design">
        <div style="text-align: center; font-weight: bold; color: #3F5EFB;">Responsive Design</div>
      </a>
    </td>
  </tr>
  <tr>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/SQHMytGk/Screenshot-20250705-134341-1.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/SQHMytGk/Screenshot-20250705-134341-1.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Advanced Search">
        <div style="text-align: center; font-weight: bold; color: #FC466B;">Advanced Search</div>
      </a>
    </td>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease;" onmouseover="this.style.transform='scale(1.03)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 5px 15px rgba(0,0,0,0.05)'">
      <a href="https://i.postimg.cc/x8fLLkcY/Screenshot-20250705-135201.png" target="_blank" style="text-decoration: none;">
        <img src="https://i.postimg.cc/x8fLLkcY/Screenshot-20250705-135201.png" style="width: 100%; border-radius: 5px; margin-bottom: 10px;" alt="Lightning Fast Performance">
        <div style="text-align: center; font-weight: bold; color: #FC466B;">Lightning Fast Performance</div>
      </a>
    </td>
    <td style="width: 33%; background-color: white; border-radius: 10px; padding: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); transition: opacity 0.3s ease;" onmouseover="this.style.opacity='0.5'" onmouseout="this.style.opacity='1'">
      <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #aaa; font-style: italic;">Coming soon...</div>
    </td>
  </tr>
</table>

</div>
</details>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## ⚙️ Installation

<div class="installation-container" style="background: linear-gradient(120deg, rgba(255,128,8,0.05), rgba(255,200,55,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">

<div class="installation-steps" style="margin: 1.5rem 0;">

### 1. Clone the Repository

<div class="code-block" style="background-color: #282a36; padding: 15px; border-radius: 10px; margin: 15px 0; box-shadow: 0 5px 15px rgba(0,0,0,0.1); position: relative;">
<div class="code-language" style="position: absolute; top: -10px; right: 15px; background: linear-gradient(135deg, #FF5F6D, #FFC371); color: white; padding: 3px 10px; border-radius: 15px; font-size: 12px; font-weight: bold;">bash</div>

```bash
git clone https://github.com/preetam-90/Navision.git
cd Navision
```

</div>

### 2. Install Dependencies

<div class="installation-command" style="margin: 20px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
  <div class="command-header" style="background-color: #282a36; color: #50fa7b; padding: 10px 15px; text-align: center; font-weight: bold; border-bottom: 3px solid #50fa7b;">pnpm (recommended)</div>
  <div class="command-content" style="background-color: #282a36; padding: 15px; color: #f8f8f2;">
    <pre style="margin: 0; overflow-x: auto; color: #f8f8f2;">pnpm install</pre>
  </div>
</div>

### 3. Set Up Environment Variables

<p>Create a <code style="background-color: #f1f1f1; padding: 2px 5px; border-radius: 3px;">.env.local</code> file in the root directory:</p>

<div class="code-block" style="background-color: #282a36; padding: 15px; border-radius: 10px; margin: 15px 0; box-shadow: 0 5px 15px rgba(0,0,0,0.1); position: relative;">
<div class="code-language" style="position: absolute; top: -10px; right: 15px; background: linear-gradient(135deg, #FF5F6D, #FFC371); color: white; padding: 3px 10px; border-radius: 15px; font-size: 12px; font-weight: bold;">env</div>

```
TMDB_API_KEY='your_tmdb_api_key'
NEXT_PUBLIC_TMDB_BASEURL="https://api.themoviedb.org/3"
TMDB_HEADER_KEY='your_tmdb_header_key'
NEXT_PUBLIC_BASE_URL='http://localhost:3000'
NEXT_PUBLIC_STREAMING_MOVIES_API_URL='https://vidsrc.to/embed'
NEXT_PUBLIC_SEARCH_ACTOR_GOOGLE='https://www.google.com/search?q='
NEXT_PUBLIC_IMAGE_CACHE_HOST_URL='https://image.tmdb.org/t/p'
GOOGLE_GTM_ID='your_google_gtm_id'
GOOGLE_MEASUREMENT_ID='your_google_measurement_id'
NEXT_PUBLIC_POSTHOG_KEY='your_posthog_key'
NEXT_PUBLIC_POSTHOG_HOST='https://eu.posthog.com'
```

</div>

<div class="important-note" style="background-color: #ffe8e8; border-left: 5px solid #FF5F6D; padding: 15px; border-radius: 0 10px 10px 0; margin: 20px 0;">
  <strong>⚠️ Important:</strong> Never commit sensitive API keys to a public repository. Obtain your keys from <a href="https://www.themoviedb.org/documentation/api" target="_blank">TMDB</a>, Google, and PostHog.
</div>

</div>

</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 📱 Usage

<div class="usage-container" style="background: linear-gradient(120deg, rgba(63,94,251,0.05), rgba(252,70,107,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">

### 1. Start Development Server

<div class="usage-command" style="margin: 20px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
  <div class="command-header" style="background-color: #282a36; color: #50fa7b; padding: 10px 15px; text-align: center; font-weight: bold; border-bottom: 3px solid #50fa7b;">pnpm</div>
  <div class="command-content" style="background-color: #282a36; padding: 15px; color: #f8f8f2;">
    <pre style="margin: 0; overflow-x: auto; color: #f8f8f2;">pnpm dev</pre>
  </div>
</div>

### 2. Open Your Browser

<div class="browser-step" style="background-color: white; border-radius: 10px; padding: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); margin: 20px 0; position: relative; transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
  <div style="position: absolute; top: 10px; right: 15px; display: flex;">
    <span style="height: 12px; width: 12px; background-color: #FF5F6D; border-radius: 50%; margin-right: 6px;"></span>
    <span style="height: 12px; width: 12px; background-color: #FFC371; border-radius: 50%; margin-right: 6px;"></span>
    <span style="height: 12px; width: 12px; background-color: #50fa7b; border-radius: 50%;"></span>
  </div>
  <div style="margin-top: 15px;">
    <p style="margin: 0; font-family: monospace; color: #333;">Navigate to <a href="http://localhost:3000" style="color: #3F5EFB; text-decoration: none; font-weight: bold;">http://localhost:3000</a> to see the application running.</p>
  </div>
</div>

### 3. Build for Production

<div class="usage-command" style="margin: 20px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1);">
  <div class="command-header" style="background-color: #282a36; color: #50fa7b; padding: 10px 15px; text-align: center; font-weight: bold; border-bottom: 3px solid #50fa7b;">pnpm</div>
  <div class="command-content" style="background-color: #282a36; padding: 15px; color: #f8f8f2;">
    <pre style="margin: 0; overflow-x: auto; color: #f8f8f2;">pnpm build</pre>
  </div>
</div>

</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 🔮 Roadmap

<div class="roadmap-container" style="background: linear-gradient(120deg, rgba(17,153,142,0.05), rgba(56,239,125,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">

<table style="width: 100%; border-collapse: separate; border-spacing: 0; margin: 1.5rem 0;">
  <tr style="background: linear-gradient(135deg, rgba(255,95,109,0.1), rgba(255,195,113,0.1));">
    <td style="padding: 15px; border-radius: 10px 0 0 0; width: 60px;">
      <img src="https://raw.githubusercontent.com/preetam-90/assets/main/roadmap-icon.png" width="40" height="40" alt="Roadmap Icon" style="display: block; margin: 0 auto;">
    </td>
    <td style="padding: 15px; border-radius: 0 10px 0 0;">
      <h3 style="margin: 0; color: #FF5F6D;">Future Plans</h3>
    </td>
  </tr>
</table>

<div class="roadmap-items" style="padding: 0 20px;">
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #50fa7b; text-decoration: line-through;">✅</div>
    <div style="text-decoration: line-through; color: #888;">Basic movie and TV show tracking</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #50fa7b; text-decoration: line-through;">✅</div>
    <div style="text-decoration: line-through; color: #888;">Dark mode implementation</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #50fa7b; text-decoration: line-through;">✅</div>
    <div style="text-decoration: line-through; color: #888;">Responsive design for all devices</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #FFC371;">⬜</div>
    <div>User authentication system</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #FFC371;">⬜</div>
    <div>Personalized recommendations</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #FFC371;">⬜</div>
    <div>Social sharing features</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #FFC371;">⬜</div>
    <div>Customizable watchlists</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #FFC371;">⬜</div>
    <div>Notifications for new episodes/releases</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #FFC371;">⬜</div>
    <div>Integration with more streaming platforms</div>
  </div>
  
  <div class="roadmap-item" style="display: flex; align-items: center; margin: 15px 0; padding: 10px; border-radius: 10px; background-color: #f8f9fa; box-shadow: 0 2px 5px rgba(0,0,0,0.05); transition: transform 0.3s ease;" onmouseover="this.style.transform='translateX(10px)'" onmouseout="this.style.transform='translateX(0)'">
    <div style="font-size: 22px; margin-right: 15px; color: #FFC371;">⬜</div>
    <div>Mobile app version</div>
  </div>
</div>

</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 🤝 Contributing

<div class="contributing-container" style="background: linear-gradient(120deg, rgba(142,45,226,0.05), rgba(74,0,224,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">

<p style="margin-top: 0;">Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>.</p>

<div class="contribution-steps" style="margin: 1.5rem 0;">
  <div class="contribution-step" style="display: flex; margin: 15px 0; align-items: flex-start;">
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
      <div style="font-size: 22px; margin-right: 15px; color: #FF5F6D;">📝</div>
      <div>Fork the repository</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
      <div style="font-size: 22px; margin-right: 15px; color: #FF5F6D;">🌱</div>
      <div>Create your feature branch (<code>git checkout -b feature/amazing-feature</code>)</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
      <div style="font-size: 22px; margin-right: 15px; color: #FF5F6D;">🔄</div>
      <div>Commit your changes (<code>git commit -m 'Add some amazing feature'</code>)</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
      <div style="font-size: 22px; margin-right: 15px; color: #FF5F6D;">⬆️</div>
      <div>Push to the branch (<code>git push origin feature/amazing-feature</code>)</div>
    </div>
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
      <div style="font-size: 22px; margin-right: 15px; color: #FF5F6D;">🚀</div>
      <div>Open a Pull Request</div>
    </div>
  </div>
</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 📄 License

<div class="license-container" style="background: linear-gradient(120deg, rgba(255,95,109,0.05), rgba(255,195,113,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">
  <div class="license-header" style="display: flex; align-items: center; margin-bottom: 20px;">
    <img src="https://img.icons8.com/color/96/000000/open-source--v1.png" alt="Open Source" style="width: 60px; height: 60px; margin-right: 20px;"/>
    <div>
      <h3 style="margin: 0; color: #FF5F6D;">MIT License</h3>
      <p style="margin: 5px 0 0;">Distributed under the MIT License. See <a href="https://github.com/preetam-90/Navision/blob/main/LICENSE.md" style="color: #3F5EFB; font-weight: bold;">LICENSE.md</a> for more information.</p>
    </div>
  </div>
  
  <div class="license-detail" style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;">
    <div class="license-badge" style="flex: 0 0 auto;">
      <img src="https://img.shields.io/github/license/preetam-90/Navision?style=for-the-badge&logo=github&color=blue" alt="License Badge"/>
    </div>
    <div class="license-summary" style="flex: 1 1 400px;">
      <p style="margin-top: 0;">The MIT License is a permissive free software license that allows you to:</p>
      <ul style="padding-left: 20px;">
        <li style="margin-bottom: 8px;">✅ Use the software commercially</li>
        <li style="margin-bottom: 8px;">✅ Modify the source code</li>
        <li style="margin-bottom: 8px;">✅ Distribute modified versions</li>
        <li style="margin-bottom: 8px;">✅ Include in proprietary software</li>
      </ul>
      <p>With the condition that the original copyright and license notice are included in any copy of the software/source.</p>
    </div>
  </div>
</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

## 👤 Connect with Me

<div class="connect-container" style="background: linear-gradient(120deg, rgba(63,94,251,0.05), rgba(252,70,107,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">
  <div class="connect-header" style="display: flex; align-items: center; margin-bottom: 20px;">
    <img src="https://i.postimg.cc/R03LypvV/PXL-20230705-131447762-PORTRAIT.jpg" alt="Preetam Kumar" class="connect-avatar" style="width: 80px; height: 80px; border-radius: 50%; margin-right: 20px; border: 3px solid #FF5F6D;"/>
    <div class="connect-intro">
      <h3 style="margin: 0; color: #FF5F6D;">Preetam Kumar</h3>
      <p style="margin: 5px 0 0;">Full Stack Developer & Movie Enthusiast</p>
    </div>
  </div>
  
  <div class="social-links" style="display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0;">
    <a href="https://github.com/preetam-90" class="social-link" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
      <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
    </a>
    <a href="https://www.instagram.com/preetam_90/" class="social-link" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
      <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
    </a>
    <a href="mailto:preetam@engineer.com" class="social-link" style="transition: transform 0.3s ease;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
      <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=mail.ru&logoColor=white" alt="Email" />
    </a>
  </div>
  
  <div class="connect-message" style="background-color: white; border-radius: 10px; padding: 15px; box-shadow: 0 5px 15px rgba(0,0,0,0.05);">
    <p style="margin: 0;">I'd love to hear your feedback on Navision! Feel free to reach out with questions, suggestions, or just to chat about movies.</p>
  </div>
</div>

<div style="height: 2px; background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent); margin: 2rem 0;"></div>

<div align="center" class="footer-container" style="background: linear-gradient(120deg, rgba(255,128,8,0.05), rgba(255,200,55,0.05)); padding: 20px; border-radius: 15px; margin-bottom: 2rem;">
  <div class="star-message" style="margin-bottom: 20px;">
    <h3 style="color: #FF5F6D; margin-top: 0;">⭐ If you like this project, please star it! ⭐</h3>
    <p style="margin-bottom: 20px;">Your support keeps me motivated to improve Navision</p>
    <a href="https://github.com/preetam-90/Navision/stargazers" class="star-button" style="display: inline-block; padding: 10px 30px; background: linear-gradient(135deg, #FF5F6D 0%, #FFC371 100%); color: white; text-decoration: none; border-radius: 50px; font-weight: bold; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 15px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 10px rgba(0,0,0,0.1)'">
      Star on GitHub
    </a>
  </div>
  
  <div class="footer-note" style="margin-top: 30px;">
    <p style="margin-bottom: 5px;">Made with ❤️ by <a href="https://github.com/preetam-90" style="color: #3F5EFB; font-weight: bold;">Preetam Kumar</a></p>
    <p class="footer-date" style="margin-top: 5px; color: #666; font-size: 0.9em;">Last updated: July 2025</p>
  </div>
</div>

<style>
  /* Base Styles */
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
  }

  a {
    color: #FF5F6D;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  a:hover {
    color: #FFC371;
  }
  
  /* Header and Navigation */
  .nav-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
  }
  
  .nav-button {
    background: linear-gradient(135deg, #FF5F6D 0%, #FFC371 100%);
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-block;
    text-decoration: none;
  }
  
  .nav-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 7px 14px rgba(0,0,0,0.15);
    color: white;
  }
  
  /* Gradient Horizontal Rule */
  .gradient-hr {
    height: 2px;
    background-image: linear-gradient(to right, transparent, #FF5F6D, #FFC371, transparent);
    border: none;
    margin: 2rem 0;
  }
</style>
</rewritten_file>
