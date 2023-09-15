import Image from 'next/image';
import ImageButtonCSS from './ImageWithTextButton.module.css'

function ImageWithTextButton(props: any) {
  return (
    <button className={`${ImageButtonCSS.imageButton} ${props.className}`}>
      <div className={`${ImageButtonCSS.imageContainer}`}>
        {/* <Image src="/fish.svg" alt="Cute Fish Logo" width={200} height={46} objectFit="cover" /> */}
        <svg className={`${ImageButtonCSS.fishColor}`} width="257" height="57" viewBox="0 0 257 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29 29C29 13.536 43.527 1 61.4471 1H193.553C211.473 1 226 13.536 226 29C226 44.464 211.473 57 193.553 57H61.4471C43.527 57 29 44.464 29 29Z" />
          <g clipPath="url(#clip0_536_15403)">
            <path d="M237.493 29.1311V28.9053C237.493 21.7358 251.477 7.84836 256.985 4.23537C253.931 2.22189 250.308 1.03638 246.421 1.03638C237.829 1.03638 230.494 6.75694 227.791 14.6603C227.791 14.6603 222.136 1.03638 212.2 1.03638H188.178C203.243 1.03638 215.444 13.5689 215.444 29.0182C215.444 44.4675 203.243 57 188.192 57H212.214C222.15 57 227.805 43.376 227.805 43.376C230.509 51.2795 237.844 57 246.436 57C250.322 57 253.946 55.8145 257 53.801C251.491 50.188 237.508 36.3006 237.508 29.1311H237.493Z" />
            <path d="M34.8763 29.0182C34.8763 13.5689 47.0772 1.03638 62.1275 1.03638H38.1201C23.0552 1.03638 0.202148 13.5689 0.202148 29.0182C0.202148 44.4675 23.0552 57 38.1201 57H62.1421C47.0919 57 34.8909 44.4675 34.8909 29.0182H34.8763ZM25.9922 27.4563C24.1949 27.4563 22.7338 25.5746 22.7338 23.26C22.7338 20.9454 24.1949 19.0637 25.9922 19.0637C27.7895 19.0637 29.2507 20.9454 29.2507 23.26C29.2507 25.5746 27.7895 27.4563 25.9922 27.4563Z" />
          </g>
          <defs>
            <clipPath id="clip0_536_15403">
              <rect width="257" height="56" fill="white" transform="translate(0 1)" />
            </clipPath>
          </defs>
        </svg>

      </div>
      <span className={ImageButtonCSS.noHover}>FIND OUT</span>
    </button>
  );
}

export default ImageWithTextButton;
