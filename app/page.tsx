import Image from 'next/image'
import Navbar from './navbar'

export default function Home() {
  return (
    <div className='vertical-flex'>
      <div className='background' />
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
            <p className='text'>Your friendly neighborhood UI/UX designer. What's a UI/UX designer?</p>
            {/* <button> */}
              {/* <p className='button-text'>FIND OUT</p> */}
              <Image
                src="/fish.svg"
                alt="fish button"
                className="fish-button"
                width={100}
                height={24}
                priority
              />
            {/* </button> */}

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
    </div>
  )
}
