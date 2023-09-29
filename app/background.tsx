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
            <div className={`${BackgroundCSS.bird}`}>
                <svg style={{ position: 'relative', left: -scrollPosition }} className={`${BackgroundCSS.mobileBird}`} width="292" height="158" viewBox="0 0 292 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_16_1144)">
                        <path d="M60.9449 87.1813C51.0211 62.6229 31.3293 72.6459 22.7239 80.7272C20.7708 82.0675 17.8483 83.1599 21.7833 76.8073C26.7021 68.8666 36.9242 59.5793 46.6609 61.1435C54.6211 62.4223 61.8357 70.4279 64.1632 76.1408C64.3303 79.1408 63.1856 82.1056 67.5234 77.1203C72.2225 71.7196 80.7035 78.3583 79.0244 84.1186C87.8028 73.6573 98.8096 74.6089 103.383 75.5949C113.673 77.8133 116.969 90.8048 119.387 101.092C121.805 111.38 118.995 110.179 117.288 108.293C107.075 76.1503 87.3111 84.2773 78.7057 92.3586C67.5396 104.936 62.2126 94.1478 60.9449 87.1813Z" fill="#173C33" />
                        <path d="M167.506 33.6567C157.583 9.09819 137.891 19.1212 129.285 27.2025C127.332 28.5428 124.41 29.6353 128.345 23.2827C133.264 15.3419 143.486 6.05469 153.222 7.61886C161.183 8.89764 168.397 16.9032 170.725 22.6162C170.892 25.6162 169.747 28.581 174.085 23.5957C178.784 18.195 187.265 24.8337 185.586 30.5939C194.364 20.1326 205.371 21.0842 209.945 22.0702C220.235 24.2886 223.531 37.2801 225.949 47.5678C228.366 57.8554 225.557 56.6545 223.85 54.7681C213.637 22.6256 193.873 30.7527 185.267 38.834C174.101 51.4117 168.774 40.6232 167.506 33.6567Z" fill="#173C33" />
                        <path d="M213.506 103.657C203.583 79.0982 183.891 89.1212 175.285 97.2025C173.332 98.5428 170.41 99.6353 174.345 93.2827C179.264 85.3419 189.486 76.0547 199.222 77.6189C207.183 78.8976 214.397 86.9032 216.725 92.6162C216.892 95.6162 215.747 98.581 220.085 93.5957C224.784 88.195 233.265 94.8337 231.586 100.594C240.364 90.1326 251.371 91.0842 255.945 92.0702C266.235 94.2886 269.531 107.28 271.949 117.568C274.366 127.855 271.557 126.654 269.85 124.768C259.637 92.6256 239.873 100.753 231.267 108.834C220.101 121.412 214.774 110.623 213.506 103.657Z" fill="#173C33" />
                    </g>
                    <defs>
                        <filter id="filter0_d_16_1144" x="0.833984" y="0.444946" width="291.055" height="156.59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="12" />
                            <feGaussianBlur stdDeviation="9.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.196078 0 0 0 0 0.160784 0 0 0 0.7 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_1144" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_1144" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className={`${BackgroundCSS.boatBack}`}>
                <svg style={{ position: 'relative', left: scrollPosition * 0.4 }} width="133" height="119" viewBox="0 0 133 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_16_1188)">
                        <path d="M36.4983 62.7625C26.7829 40.0771 42.1707 16.235 51.079 7.14963C44.0344 18.4269 54.6265 44.5659 60.8031 56.2257C55.6021 47.0951 42.4328 56.7792 36.4983 62.7625Z" fill="#173C33" />
                        <path d="M53.2976 12.3302C57.5948 22.3641 64.0908 44.062 66.8016 53.6567C67.8624 48.2978 82.5375 48.9611 89.7425 49.9626C83.4368 35.239 47.9261 -0.212209 53.2976 12.3302Z" fill="#173C33" />
                        <path d="M51.4088 87.0305C42.9018 90.6738 26.8357 77.1186 19.866 69.8856C36.8151 72.6941 86.9879 59.1015 109.956 51.9542C111.203 48.8387 113.603 44.1968 113.228 50.5529C112.852 56.909 104.421 69.1674 100.252 74.5021C87.5155 77.1602 59.9158 83.3872 51.4088 87.0305Z" fill="#173C33" />
                    </g>
                    <defs>
                        <filter id="filter0_d_16_1188" x="0.866211" y="0.149658" width="131.4" height="118.491" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="12" />
                            <feGaussianBlur stdDeviation="9.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.196078 0 0 0 0 0.160784 0 0 0 0.7 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_1188" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_1188" result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>
            <div className={`${BackgroundCSS.boatMid}`}>
                <svg style={{ position: 'relative', left: -scrollPosition * 0.6 }} width="198" height="175" viewBox="0 0 198 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_16_1187)">
                        <path d="M49.5 83.5C49.5 41.9 89.1667 15.1667 109 7C90.6 19.8 89.6667 67.3333 91.5 89.5C89.5 71.9 62.6667 78.1667 49.5 83.5Z" fill="#0D3229" />
                        <path d="M109 16.5C109 34.9 104.667 72.8333 102.5 89.5C107.7 81.9 130 92.6667 140.5 99C140.5 72 109 -6.5 109 16.5Z" fill="#0D3229" />
                        <path d="M56.5 131C40.9 131 25 99.3333 19 83.5C43.4 99.1 130.167 111.333 170.5 115.5C174.5 111.5 181.3 105.9 176.5 115.5C171.7 125.1 150.5 138.5 140.5 144C119 139.667 72.1 131 56.5 131Z" fill="#0D3229" />
                    </g>
                    <defs>
                        <filter id="filter0_d_16_1187" x="0" y="0" width="197.151" height="175" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="12" />
                            <feGaussianBlur stdDeviation="9.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.196078 0 0 0 0 0.160784 0 0 0 0.7 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16_1187" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16_1187" result="shape" />
                        </filter>
                    </defs>
                </svg>

            </div>


            <div className={`${BackgroundCSS.boatFront}`}>
                <svg style={{ position: 'relative', left: scrollPosition * 0.8 }} width="193" height="179" viewBox="0 0 193 179" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_18_1653)">
                        <path d="M143.764 74.9047C138.174 33.6821 95.2742 12.5216 74.5234 7.09425C94.4765 17.3055 101.789 64.2823 102.951 86.4943C102.568 68.7852 130 71.3891 143.764 74.9047Z" fill="#1F443B" />
                        <path d="M75.8 16.5081C78.2726 34.7412 87.6641 71.7481 92.0508 87.9725C85.8767 81.1402 65.2258 94.8059 55.6721 102.493C52.0438 75.7377 72.7092 -6.28331 75.8 16.5081Z" fill="#1F443B" />
                        <path d="M143.21 122.915C158.669 120.818 170.169 87.3021 173.987 70.8061C151.905 89.5435 67.569 113.326 28.1615 122.875C23.6602 119.448 16.1694 114.813 22.2159 123.681C28.2624 132.549 51.0708 142.978 61.7192 147.085C82.4419 139.901 127.752 125.011 143.21 122.915Z" fill="#1F443B" />
                    </g>
                    <defs>
                        <filter id="filter0_d_18_1653" x="0.953125" y="0.0942383" width="192.034" height="177.99" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="12" />
                            <feGaussianBlur stdDeviation="9.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.196078 0 0 0 0 0.160784 0 0 0 0.7 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18_1653" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18_1653" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div className={`${BackgroundCSS.sun}`}>
                <svg width="786" height="786" viewBox="0 0 786 786" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <path d="M392.97 5.96222V780.038" stroke="#CF7B0C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M780.037 392.97H5.96191" stroke="#CF7B0C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M667 667L179 179" stroke="#CF7B0C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M119.304 666.636L666.636 119.304" stroke="#CF7B0C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M472.804 212.196L313.136 573.804" stroke="#CF7B0C" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M573.804 472.804L212.195 313.136" stroke="#CF7B0C" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M464.398 577.263L321.603 208.678" stroke="#CF7B0C" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M208.678 464.398L577.262 321.602" stroke="#CF7B0C" strokeMiterlimit="10" strokeLinecap="round" />
                    </g>
                </svg>

            </div>

            <div className={`${BackgroundCSS.waveHolder}`}>

                <div className={`${BackgroundCSS.waveFront}`}>
                    {/* {#173c33 } */}
                    <svg style={{ position: 'relative', left: scrollPosition }} className={`${BackgroundCSS.waves}`} width="412" height="83" viewBox="0 0 412 83" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg style={{ position: 'relative', left: -scrollPosition }} className={`${BackgroundCSS.waves}`} width="409" height="101" viewBox="0 0 409 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg style={{ position: 'relative', left: (scrollPosition * 0.7) }} className={`${BackgroundCSS.waves}`} width="405" height="117" viewBox="0 0 405 117" fill="none" xmlns="http://www.w3.org/2000/svg">
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
