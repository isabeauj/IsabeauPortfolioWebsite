'use client';
import Image from 'next/image';
import BackgroundCSS from './background.module.css'
import { useState, useEffect } from 'react';


function Background(props: any) {
    const [scrollPosition, setScrollPosition] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY * 0.4);
            console.log(window.scrollY)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <div className={`${BackgroundCSS.backgroundHolder}`}>
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.sun}`}>
                <svg width="586" height="786" viewBox="0 0 586 786" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <path d="M392.97 5.96228V780.038" stroke="#CF7B0C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M780.038 392.97H5.9624" stroke="#CF7B0C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M667 667L179 179" stroke="#CF7B0C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M119.304 666.636L666.636 119.304" stroke="#CF7B0C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M472.804 212.196L313.136 573.804" stroke="#CF7B0C" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M573.804 472.804L212.195 313.136" stroke="#CF7B0C" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M464.397 577.263L321.602 208.678" stroke="#CF7B0C" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M208.678 464.398L577.262 321.602" stroke="#CF7B0C" strokeMiterlimit="10" strokeLinecap="round" />
                    </g>
                </svg>
            </div>
            <div className={`${BackgroundCSS.waveHolder}`}>

                <div className={`${BackgroundCSS.waveFront}`}>
                    {/* {#173c33 } */}
                    <svg style={{ position: 'relative', left: scrollPosition}} className={`${BackgroundCSS.waves}`} width="412" height="83" viewBox="0 0 412 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="f2" x="0" y="0" width="150%" height="150%">
                                <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
                                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                            </filter>
                        </defs>
                        <path d="M89.3399 9.21995C97.8699 5.72995 106.58 2.16995 116.47 2.97995C129.73 4.06995 131.67 11.93 141.97 10.58C151.72 9.29995 152.49 1.92995 162.04 1.08995C171.81 0.22995 173.25 7.73995 184.28 9.22995C199.53 11.2899 204.49 -2.03005 219.27 0.27995C229.69 1.89995 227.78 8.60995 240.43 11.4C249.27 13.35 262.41 12.77 273.52 8.95995C275.92 8.13995 278.17 7.17995 281.66 7.05995C289.84 6.77995 292.12 11.53 298.75 12.49C308.8 13.94 311.21 4.12995 322.08 4.61995C331.1 5.02995 331.61 11.87 340.8 12.49C351.06 13.17 352.91 4.78995 364.4 4.34995C373.45 4.00995 374.21 9.12995 386.64 10.32C398.04 11.41 400.79 7.41995 405.38 10.17C413.62 15.09 413.35 33.04 408.81 45.2299C403.03 60.7199 390.05 67.71 387.73 68.91C375.47 75.25 363.3 73.9499 356.81 73.2499C343.56 71.8299 341.67 67.4899 330.5 68.0999C318.96 68.7199 318 73.5099 308.53 73.5299C293.82 73.5499 292.29 62.0299 279.23 61.0499C262.13 59.7699 256.22 78.8799 238.27 77.0499C227.92 75.9899 227.6 69.3999 217.65 69.4499C203.07 69.5299 198.8 83.7299 187 82.7399C176.17 81.8399 176.72 69.6199 164.49 65.6499C147.5 60.1399 136.88 80.5899 117.02 75.6899C105.9 72.9499 104.59 65.3899 94.5099 65.9199C83.3399 66.5099 80.2899 76.0199 71.1799 74.8699C61.6199 73.6599 61.6499 62.78 51.6499 60.49C40.5899 57.97 34.4399 69.8699 21.8099 68.3599C11.6599 67.1399 5.53988 58.74 4.88988 57.83C-4.90012 44.19 0.809879 20.61 15.0199 10.85C26.1299 3.21995 41.9799 4.35995 52.1799 8.67995C60.0399 12.01 62.6699 16.4199 70.3499 16.5499C76.8799 16.6599 78.8099 13.53 89.3399 9.22995V9.21995Z" fill="#173c33" />
                    </svg>

                </div>

                <div className={`${BackgroundCSS.waveMiddle}`}>
                    {/* #1a4037 */}
                    <svg style={{ position: 'relative', left: -scrollPosition}} className={`${BackgroundCSS.waves}`} width="409" height="101" viewBox="0 0 409 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="f2" x="0" y="0" width="150%" height="150%">
                                <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
                                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                            </filter>
                        </defs>
                        <path d="M91.9001 8.65956C108.43 2.73956 112.4 4.82956 114.4 5.05956C125.1 6.24956 125.62 13.6796 135.23 14.9796C147.65 16.6596 150.98 4.80956 165.32 4.72956C177.9 4.65956 178.86 13.7696 191.44 13.6596C206.03 13.5296 211.24 1.21956 221.53 4.39956C228.43 6.52956 227.39 12.4796 236.41 16.2996C243.99 19.5196 251.62 18.2396 257.24 17.2896C268.24 15.4396 268.88 11.8796 277.08 11.6696C286.7 11.4296 287.09 16.2996 296.59 16.6296C308.92 17.0596 311.93 8.97956 323.04 10.6796C330.61 11.8396 329.84 15.6896 337.26 16.9596C349.62 19.0796 353.46 8.69956 366.68 10.0196C373.87 10.7296 373.93 13.9196 384.86 15.6396C394.54 17.1696 396.22 14.9396 400.04 16.8996C409.92 21.9496 409.89 42.4296 407.73 54.1396C406.67 59.8796 404 74.3996 391.13 85.0096C378.19 95.6796 363.12 95.6496 358.74 95.6396C343.16 95.6096 342.01 88.7096 327.33 89.6896C313.02 90.6496 309.25 97.5396 299.56 94.6496C290.07 91.8196 287.19 87.4196 277.74 85.0596C265.93 82.1096 256.8 87.7996 253.94 89.6896C246.84 94.3796 243.76 97.3096 239.24 97.9496C230.53 99.1996 226.35 93.1796 216.25 90.6796C201.12 86.9296 193.61 102.58 176.91 99.9196C164.99 98.0196 169.77 87.2196 156.74 85.3896C144.64 83.6896 128.61 90.6196 122.36 93.3196C118.51 94.9796 115.18 96.7196 110.46 96.2996C102.88 95.6196 101.74 90.2796 94.9201 88.3696C83.9601 85.2896 78.4801 96.7096 68.1401 93.9896C59.2201 91.6396 60.4201 82.3796 51.2801 79.7696C42.0501 77.1296 37.3801 85.5896 25.1601 84.7296C17.4401 84.1896 10.1801 80.1596 6.28009 75.8696C-11.3099 56.5496 11.5501 1.22956 32.8701 0.0195602C38.8401 -0.32044 47.5501 3.41956 53.5601 7.69956C60.8401 12.8796 63.3401 17.1296 68.4901 18.9596C74.0201 20.9196 73.5801 15.2196 91.9001 8.65956Z" fill="#1a4037" />
                    </svg>

                </div>

                <div className={`${BackgroundCSS.waveBack}`}>
                    {/* #1F443B */}
                    <svg style={{ position: 'relative', left: (scrollPosition* 0.7)}} className={`${BackgroundCSS.waves}`} width="405" height="117" viewBox="0 0 405 117" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="f2" x="0" y="0" width="150%" height="150%">
                                <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
                                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                            </filter>
                        </defs>
                        <path d="M34.84 3.85016C46.32 2.75016 49.89 15.2302 61.95 16.4402C71.62 17.4102 72.48 9.70016 90.7 5.04016C98.28 3.10016 106.47 1.01016 115.63 3.73016C127.2 7.17016 124.55 13.9202 133.01 14.5202C143.8 15.2902 149.11 4.16016 161.88 2.40016C174.13 0.710165 178.44 10.6402 192.58 11.8302C207.86 13.1202 210.96 -1.37984 223.97 0.0901646C236.36 1.49016 237.52 13.5802 249.95 14.3702C260.8 15.0602 262.5 6.01016 275.67 5.47016C287.53 4.98016 289.3 12.1902 301.39 11.4002C312.62 10.6702 313.18 4.30016 323.84 3.98016C335.52 3.63016 337.51 11.2102 349.3 10.9702C360.65 10.7402 361.69 3.66016 371.12 3.98016C388.48 4.56016 399.66 29.0702 400.23 30.3502C404.22 39.3702 404.53 47.3502 404.52 50.7202C404.44 69.4002 393.71 82.3002 388.93 88.0502C382.4 95.9002 371.02 109.58 355.2 110.2C343.63 110.65 339.58 103.72 325.84 104.22C315.86 104.58 314.4 110.77 302.88 111.79C293.72 112.6 286.06 110.58 283.35 109.22C272.28 103.66 268.7 97.9302 260.83 98.4102C254.66 98.7802 250.64 102.95 241.6 108.43C237.67 110.81 233.09 112.08 227.86 112.84C214.06 114.84 210.08 106.93 197.47 107.27C183.42 107.65 182.08 117.63 171.25 116.44C157.45 114.92 152.77 100.07 139.71 98.5002C126.86 96.9502 126.55 110.7 110.53 110.42C98.92 110.22 97.65 102.05 84.56 102.06C72.19 102.06 69.26 109.35 60 107.14C50.04 104.76 50.26 95.5602 40.77 93.5002C29.83 91.1202 24.18 102.19 15.55 99.9302C3.07002 96.6602 0.540021 69.7302 0.300021 67.0802C-2.04998 42.0802 9.88002 20.1302 23.72 9.24016C29.65 4.57016 33.32 4.00016 34.84 3.85016Z" fill="#1F443B" />
                    </svg>

                </div>

            </div>
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />
            <div className={`${BackgroundCSS.background}`} />

            <div className='background' />
        </div>

    );
}

export default Background;
