import Image from 'next/image'

export default function Home() {
  return (
    <div className='background'>


        <div className='header'>
          <Image
            src="/nav_logo.svg"
            alt="Isabeau Jackson's Logo"
            className=""
            width={100}
            height={24}
            priority
          />
          <h1 className='flex-item open-sans-bold'>PORTFOLIO</h1>
          <h1 className='flex-item open-sans-bold'>RESUME</h1>
          <h1 className='flex-item open-sans-bold'>CONTACT</h1>


        </div>

        <Image
          src="/header_logo.svg"
          alt="Vercel Logo"
          className=""
          width={100}
          height={24}
          priority
        />
        <Image
          src="/Name.svg"
          alt="Vercel Logo"
          className=""
          width={100}
          height={24}
          priority
        />
    </div>
  )
}
