'use client';
import Image from 'next/image'
import Navbar from './navbar'
import HowdyDoodie from './howdyDoodie';
import MobileNavbar from './mobileNavbar'
import ImageWithTextButton from './ImageWithTextButton'
import Background from './background'
import Gallery from './gallery';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(1280);
  const [words] = useState([
    "References",
    "Raving Reviews",
    "Voices of Wow",
    "Kudos Corner",
    "Survey Says",
    "Glowing Testimonials",
    "Happy Camper Comments",
    "Bravo Board",
    "Applause Alley",
    "High-Five Highlights",
    "Shout-Out Showcase",
    "Kaleidoscope of Kind Words",
    "Rave Review Roundup",
    "Joyful Jottings",
    "Pats on the Back",
    "Triumphant Testimonies",
    "Buzzworthy Bravos",
    "Kudos Kaboodle",
    "Radiant Referrals",
    "Hats Off",
    "Avalanche of Accolades",
    "Ripple of Raves",
    "Review Roll Call",
    "Testimonial Time Warp",
    "Endorsement Extravaganza",
    "Standing Ovation Station",
    "Thumbs-Up Theater",
    "Joyful Jibber-Jabber",
    "Salutations & Salutes"
  ])
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [opacity, setOpacity] = useState(1); // For the fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        // setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);

        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * words.length)
        } while (randomIndex === currentWordIndex);
        setCurrentWordIndex(randomIndex);

        setOpacity(1);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [words]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize()
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderComponent = () => {
    if (windowWidth <= 1280) {
      return <MobileNavbar className='position' />;
    } else {
      return <Navbar className='position' />;
    }
  };



  return (
    <div className='vertical-flex fixed-width'>
      <Background />
      {renderComponent()}
      <div className='horiz-flex-center rel-move mobile-vertical-stack'>
        <Image
          src="/header_logo.svg"
          alt="Isabeau Jackson&apos;s Logo"
          className="large-logo"
          width={100}
          height={24}
          priority
        />
        <div className='vertical-flex left-margin'>
          <Image
            src="/fish_phonetic.svg"
            alt="Cute Fish Logo"
            className="fish-text"
            width={100}
            height={24}
            priority
          />
          <Image
            src="/Name.svg"
            alt="Isabeau Jackson&apos;s Text Logo"
            className="isa-text"
            width={100}
            height={24}
            priority
          />
          <div className='vertStack-left-aligned'>
            <p className='text'>Your friendly neighborhood UI/UX designer. What&apos;s a UI/UX designer?</p>
            <ImageWithTextButton text='FIND OUT' className='fish-location' />
            <Image
              src="/scroll.svg"
              alt="scroll arrow"
              className="fish-button"
              width={100}
              height={24}
              priority
            />
          </div>
        </div>
      </div>
      <div className='center-container'>
        <div className='quote'>

          <svg className='quote-start' width="103" height="80" viewBox="0 0 103 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_18_1643)">
              <path d="M46.1438 56.9236C46.1438 69.6571 35.8337 80 23.0845 80C10.3352 80 0.678954 69.6571 0.0502914 56.9236C-1.68482 21.8937 42.9753 -9.18528 37.946 2.51651C20.2932 43.4602 46.1438 30.0975 46.1438 56.9487V56.9236Z" fill="#783608" />
              <path d="M103 56.9236C103 69.6571 92.6895 80 79.9402 80C67.191 80 57.5347 69.6571 56.8809 56.9236C55.171 21.8937 99.8311 -9.18528 94.8018 2.51651C77.149 43.4602 103 30.0975 103 56.9487V56.9236Z" fill="#783608" />
            </g>
            <defs>
              <clipPath id="clip0_18_1643">
                <rect width="103" height="80" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div>
            UI/UX stands for user interface user experience. UI/UX design means understanding the challenge, identifying the user, creating solutions for the challenge, and using visual hierarchy to create pleasing and practical aesthetics for a digital product.
            -Me
          </div>
          <svg className='quote-end' width="103" height="80" viewBox="0 0 103 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_18_1646)">
              <path d="M56.8562 23.0764C56.8562 10.3429 67.1663 -3.1326e-06 79.9155 -2.01802e-06C92.6648 -9.03447e-07 102.321 10.3429 102.95 23.0764C104.685 58.1063 60.0247 89.1853 65.054 77.4835C82.7068 36.5398 56.8562 49.9025 56.8562 23.0513L56.8562 23.0764Z" fill="#783608" />
              <path d="M0.000432222 23.0764C0.000433335 10.3429 10.3105 -1.83935e-05 23.0598 -1.72789e-05C35.809 -1.61643e-05 45.4653 10.3429 46.1191 23.0764C47.829 58.1063 3.16888 89.1853 8.19818 77.4835C25.851 36.5398 0.000429877 49.9025 0.000432224 23.0513L0.000432222 23.0764Z" fill="#783608" />
            </g>
            <defs>
              <clipPath id="clip0_18_1646">
                <rect width="103" height="80" fill="white" transform="translate(103 80) rotate(-180)" />
              </clipPath>
            </defs>
          </svg>

        </div>
      </div>
      <Gallery className='gallery' />
      <div className='centered'>
        <ImageWithTextButton text='VIEW PORTFOLIO' />
      </div>
      <HowdyDoodie className='howdy-doodie' />

      <div className="survey-quote" style={{ opacity }}>
        {words[currentWordIndex]}
      </div>

      <div className='horiz-flex-top'>
        <svg className='circle' width="720" height="977" viewBox="0 0 720 977" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_11_19)">
            <rect x="68" y="64" width="857" height="841" rx="420.5" fill="#173C33" />
          </g>
          <defs>
            <filter id="filter0_d_11_19" x="0" y="0" width="993" height="977" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="34" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.196078 0 0 0 0 0.160784 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_19" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_19" result="shape" />
            </filter>
          </defs>
        </svg>

        <div className='yellow-border'>
          <p className='reference-quote'>&quot;I had the privilege of instructing Isabeau in a web design course my first semester as an instructor. From day one, I could easily tell that Isabeau was a bright, standout student. She was always enthusiastic, eager to learn, and open to pushing her skillset beyond her comfort zone. I observed her grow over the semesters. Then as a National Student Advertising Competiton (NSAC) advisor, I saw her act as a vital team member of the District&apos;s first-place student agency. I have no doubt that Isabeau&apos;s talent, passion, and positivity will set her up for success on any team.&quot;</p>
          <p className='reference-reference-quote'>- Andy Sharpe, Owner of Sharpe Creative</p>
        </div>
        <div className='yellow-border'>
          <p className='reference-quote'>&quot;As a student at The Modern College of Design, Isa exhibited exceptional creative, organizational, and communication skills. She was a respected leader on campus and graduated as a valedictorian. She launched her professional career immediately and quickly became a valued member of the design industry.&quot;</p>
          <p className='reference-reference-quote'>- Jessica Barry, President and Owner of The Modern College of Design</p>
        </div>
        <div className='yellow-border'>
          <p className='reference-quote'>&quot;Isabeau transformed our website into a user-friendly masterpiece. Her attention to detail and user-centric design principles exceeded our expectations, improving user engagement and satisfaction. We couldn&apos;t be happier!&quot; </p>
          <p className='reference-reference-quote'>- Robert Lair, CEO of LifeQuest Studios</p>
        </div>
        <div className='yellow-border'>
          <p className='reference-quote'>&quot;Isabeau transformed our website into a user-friendly masterpiece. Her attention to detail and user-centric design principles exceeded our expectations, improving user engagement and satisfaction. We couldn&apos;t be happier!&quot; </p>
          <p className='reference-reference-quote'>- Robert Lair, CEO of LifeQuest Studios</p>
        </div>

      </div>

      <div className='chonky'> chonky</div>

    </div>
  )
}
