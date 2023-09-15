import Image from 'next/image'
import Navbar from './navbar'
import ImageWithTextButton from './ImageWithTextButton'
import Background from './background'

export default function Home() {
  return (
    <div className='vertical-flex fixed-width'>
      <Background/>
      <Navbar className='position' />
      <div className='horiz-flex-center rel-move'>
        <Image
          src="/header_logo.svg"
          alt="Isabeau Jackson's Logo"
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
            alt="Isabeau Jackson's Text Logo"
            className="isa-text"
            width={100}
            height={24}
            priority
          />
          <div className='vertStack-left-aligned'>
            <p className='text'>Your friendly neighborhood UI/UX designer. What&apos;s a UI/UX designer?</p>
            <ImageWithTextButton className='fish-location' />
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
      <div className='chonky'> chonky</div>

    </div>
  )
}
