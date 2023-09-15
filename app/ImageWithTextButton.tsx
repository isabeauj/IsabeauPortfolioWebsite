import Image from 'next/image';
import ImageButtonCSS from './ImageWithTextButton.module.css'

function ImageWithTextButton(props:any) {
  return (
    <button className={`${ImageButtonCSS.imageButton} ${props.className}`}>
      <div className={`${ImageButtonCSS.imageContainer}`}>
        <Image src="/fish.svg" alt="Cute Fish Logo" width={200} height={46} objectFit="cover" />
      </div>
      <span>FIND OUT</span>
    </button>
  );
}

export default ImageWithTextButton;
