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
  const [referenceWords] = useState([
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

  const [contactWords] = useState([

    "I'd Love To Hear From You",
    "Hit Me Up: I'm Ready to Chat",
    "Say Hello: I Promise Not to Bite",
    "Contact Me, or Send a Carrier Pigeon",
    "Telepathic Communication - Optional",
    "Reach Out and High-Five My Inbox",
    "Ping Me, Email Me, Morse Code Me",
    "I'm All Ears - So Let's Talk!",
    "Yelling Into The Void Gets Tiring",
  ])

  const [aboutmeWords] = useState([
    "Howdy Doody, Pardner, I'm Isabeau",
    "Who Am I? Somebody Tell Me",
    "Meet The Human Behind The Pixels",
    "Dive Into The Wonderland Of Me",
    "The Wild And Whimsical World Of Isabeau",
    "Unraveling The Enigma: Who Am I, Really?",
    "Buckle Up For A Journey Into My Mind",
    "Bio Deconstructed: The Story of Isabeau",
  ])


  const [currentReferenceWordIndex, setCurrentReferenceWordIndex] = useState(0);
  const [currentContactWordIndex, setCurrentContactWordIndex] = useState(0);
  const [currentAboutmeWordIndex, setCurrentAboutmeWordIndex] = useState(0);
  const [opacity, setOpacity] = useState(1); // For the fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        // setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);

        let randomIndex;
        do {
          randomIndex = Math.floor(Math.random() * referenceWords.length)
        } while (randomIndex === currentReferenceWordIndex);
        setCurrentReferenceWordIndex(randomIndex);

        do {
          randomIndex = Math.floor(Math.random() * contactWords.length)
        } while (randomIndex === currentContactWordIndex);
        setCurrentContactWordIndex(randomIndex);

        do {
          randomIndex = Math.floor(Math.random() * aboutmeWords.length)
        } while (randomIndex === currentAboutmeWordIndex);
        setCurrentAboutmeWordIndex(randomIndex);

        setOpacity(1);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, [referenceWords, contactWords, aboutmeWords]);

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
      <HowdyDoodie className='howdy-doodie' titleWords={aboutmeWords[currentAboutmeWordIndex]} />

      <div className="survey-quote" style={{ opacity }}>
        {referenceWords[currentReferenceWordIndex]}
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

      <div className='contact'>
        <svg className='rust-wave' width="1512" height="879" viewBox="0 0 1512 879" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_534_15192)">
            <path d="M1871.33 482.712C1962.79 367.059 2040.75 250.612 1880.48 344.047C1880.48 344.047 1885.74 403.545 1807.18 301.241L1795.89 301.114C1790.69 292.647 1785.28 284.243 1779.62 275.929C1760.22 247.444 1737.97 218.97 1708.71 194.446C1669.36 161.471 1630.46 157.854 1567.26 158.695C1453.61 160.207 1330.29 158.15 1240.91 110.853C1216.61 97.9962 1195.39 82.0032 1167.57 72.9489C1122.85 58.3997 1069.09 64.4711 1023.1 77.0899C974.363 90.465 930.371 110.578 882.704 125.593C835.037 140.607 780.79 150.486 729.856 141.591C648.751 127.433 590.311 68.6703 506.528 68.9401C416.966 69.2257 380.23 131.162 304.262 150.095C240.222 166.056 169.993 144.145 111.427 120.494C83.4626 109.203 54.7917 97.0918 22.4222 94.4421C-10.0337 91.7872 -41.4374 99.1914 -69.5193 109.573C-84.6989 115.184 -98.7241 121.748 -111.776 129.051C-163.722 158.092 -200.45 198.788 -234.728 237.634C-246.303 250.755 -257.478 264.045 -268.26 277.489L-375.451 276.262C-375.451 276.262 -463.262 260.216 -381.145 420.247C-378.514 425.377 -375.821 430.491 -373.088 435.6C-375.828 440.709 -378.514 445.823 -381.145 450.953C-404.751 496.949 -422.278 515.549 -432 522.308C-418.022 522.366 -386.571 533.05 -333.517 591.262L-269.65 591.966C-258.444 606.007 -246.806 619.885 -234.728 633.572C-200.45 672.417 -163.722 713.109 -111.776 742.154C-98.7162 749.452 -84.6989 756.016 -69.5193 761.632C-41.4374 772.014 -10.0416 779.418 22.4222 776.763C54.7917 774.114 83.4626 762.003 111.427 750.711C169.993 727.06 240.214 705.149 304.262 721.11C380.23 740.044 416.974 801.98 506.528 802.265C590.311 802.535 648.751 743.772 729.856 729.615C780.798 720.719 835.037 730.598 882.704 745.613C930.371 760.627 974.363 780.746 1023.1 794.115C1069.08 806.734 1122.85 812.806 1167.57 798.256C1195.4 789.202 1216.62 773.215 1240.91 760.352C1330.29 713.056 1453.61 710.993 1567.26 712.511C1630.46 713.352 1669.36 709.734 1708.71 676.759C1731.29 657.831 1747.84 635.92 1764.57 614.3L1837.92 615.104C1868.9 574.767 1885.02 570.097 1892.03 572.323C1889.01 565.951 1884.8 552.713 1880.48 527.147C1877.98 512.328 1874.92 497.499 1871.33 482.712Z" fill="#783608" />
          </g>
          <defs>
            <filter id="filter0_d_534_15192" x="-500" y="0.482422" width="2541" height="878.241" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="34" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.196078 0 0 0 0 0.160784 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_534_15192" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_534_15192" result="shape" />
            </filter>
          </defs>
        </svg>
        <div className="bottom-survey-quote" style={{ opacity }}>
          {contactWords[currentContactWordIndex]}
        </div>
        <p className='contact-reference-quote'>If you have any questions, are interested in working with me, or if you want to talk about any old hullabaloo, feel free to reach out!</p>
        <ImageWithTextButton className='get-in-touch' text='GET IN TOUCH' />
      </div>

      <div className='chonky'> chonky</div>

    </div>
  )
}
