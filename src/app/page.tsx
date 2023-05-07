'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState('')
  const [textColor, setTextColor] = useState('text-white')
  const [openMenu, setOpenMenu] = useState('hidden')
  const [effectMenu, setEffectMenu] = useState('')
  let isValid: boolean;

  const handleInput = (e: any) => {
    const regex = (/^(?!-)[A-Za-z0-9-]+([\-\.]{1}[a-z0-9]+)*\.[A-Za-z]{2,6}$/);
    const textInput = e.target.value
    setText('')

    if (textInput.match(regex)) {
      isValid = true
      setTextColor('text-white')
      setText(textInput)
    } else {
      isValid = false
    }
  }

  const handleSend = (event: any) => {
    event.preventDefault();

    if (text === '' || isValid === false) {
      setTextColor('text-red')
      setText('Please insert a valid domain')
    }
  }

  const handleOpenMenu = () => {
    setOpenMenu('flex')
    setEffectMenu('open')

    if (openMenu === 'flex') {
      setOpenMenu('hidden')
      setEffectMenu('')
    }
  }

  return (
    <>
      <nav className="relative container mx-auto p-6">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* flex container for logo/menu */}
          <div className="flex items-center space-x-20">
            <Image width={100} height={100} src="/images/logo.svg" alt="" />
            {/* lef menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <a href="" className="text-grayisViolet hover:text-veryDarkViolet">
                Features
              </a>
              <a href="" className="text-grayisViolet hover:text-veryDarkViolet">
                Pricing
              </a>
              <a href="" className="text-grayisViolet hover:text-veryDarkViolet">
                Resources
              </a>
            </div>
          </div>

          {/* right buttons menu */}
          <div className="hidden items-center space-x-6 font-bold text-grayisViolet lg:flex">
            <a href="/" className="hover:text-veryDarkViolet">Login</a>
            <a href="/" className="
              px-8 
              py-3 
              font-bold 
              text-white 
              bg-cyan 
              rounded-full 
              hover:opacity-70
            ">
              Sign Up
            </a>
          </div>

          {/* TODO: hamburger menu */}
          <button 
            id="menu-btn" 
            onClick={handleOpenMenu}
            className={`
              ${effectMenu}
              block 
              hamburger 
              lg:hidden 
              focus:outline-none`}
            type="button"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>

        </div>

          {/* mobile menu */}
          <div id="menu" className={`absolute ${openMenu} p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100`}>
            <div className="flex flex-col items-center justify-center w-full space-y-6 font-cold text-white rounded-sm">
              <a href="" className="w-full text-center">Features</a>
              <a href="" className="w-full text-center">Pricing</a>
              <a href="" className="w-full text-center">Resouces</a>
              <a href="" className="w-28 py-3 text-center hover:rounded-full hover:bg-cyan">Login</a>
              <a href="" className="w-28 py-3 text-center rounded-full bg-cyan hover:bg-white hover:text-veryDarkViolet">Sign up</a>
            </div>
          </div>
      </nav>

      <section id="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
          {/* content container */}
          <div className="flex flex-col space-y-10 mb-44 lg:w-1/2 lg:mt-16 xl:mb-52">
            <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:max-x-md lg:text-left">
              More than just shorter links
            </h1>
            <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
              Build your brand&apos;s recognition and detailed insights on how your
              links are performing.
            </p>
            <div className="mx-auto lg:mx-0">
              <a href="" className="
                py-5 
                px-10 
                text-2xl 
                font-bold
              text-white 
              bg-cyan 
                rounded-full 
                lg:py-4 
                hover:opacity-70
              ">Get Started</a>
            </div>
          </div>

            <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
              <Image width={512} height={100} src="/images/illustration-working.svg" alt="" />
            </div>
        </div>
      </section>

      {/* shorten section */}
      <section id="shorten" className="relative bg-gray-100">
        {/* shorten container */}
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* form */}
          <form id="link-form" className="
            relative 
            flex 
            flex-col 
            w-full 
            p-10 
            -mt-20 
            space-y-4 
            bg-darkViolet 
            rounded-lg 
            md:flex-row 
            md:space-y-0 
            md:space-x-3
          ">
            <input type="text" 
              className="
                flex-1 
                p-3 
                border-2 
                rounded-lg 
                placehold-yellow-500 
                focus:outline-none
              " 
              placeholder="Shorten a link here"
              id="link-input"
              onChange={handleInput}
            />

            <button
              onClick={handleSend}
              className="
                px-10 
                py-3 
                text-white 
                bg-cyan 
                rounded-lg 
                hover:bg-cyanLight 
                hover:text-veryDarkBlue 
                focus:outline-none 
                md:py-2
              "
            >
              Shorten It!
            </button>

            {/* error message */}
            <div id="error-msg" 
              className={`
                absolute left-7 bottom-3 ${textColor} text-sm font-bold
              `}>
              { text }
            </div>
          </form>

          {/* link 1 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://www.linkedin.com/in/wellpinho/
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">
                https://rel.ink/k4IKyk
              </div>
              <button className="p-2 px-8 text-white bg-cyan rounded-md hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* link 2 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://github.com/wellpinho
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">
                https://rel.ink/HJ4fscc
              </div>
              <button className="p-2 px-8 text-white bg-darkViolet rounded-md hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>

          {/* link 3 */}
          <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
              https://wellpinho.com
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
              <div className="font-bold text-cyan">
                https://rel.ink/k4ttF4
              </div>
              <button className="p-2 px-8 text-white bg-cyan rounded-md hover:opacity-70 focus:outline-none">
                Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* stats section */}
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced statistics dashboard.
          </p>
        </div>
      </section>

      {/* feature box section */}
      <section id="features" className="pb-32 bg-gray-100">
        <div className="
          relative 
          container 
          flex 
          flex-col 
          items-start 
          px-6 
          mx-auto 
          md:flex-row 
          md:space-x-7
        ">
          {/* horizontal line */}
          <div className="
            hidden 
            absolute 
            top-24 
            w-10/12 
            left-16 
            h-3 
            bg-cyan 
            md:block
          "></div>
          {/* vertical line */}
          <div className="
            absolute 
            w-2 
            h-full 
            -ml-1 
            left-1/2 
            bg-cyan 
            md:hidden
          "></div>

          {/* box 1 */}
          <div className="
            relative 
            flex 
            flex-col 
            p-6 
            space-y-6 
            bg-white 
            rounded-lg 
            md:w-1/3
          ">
            {/* image positionng */}
            <div className="
              absolute 
              -ml-10 
              -top-10 
              left-1/2 
              md:left-16
            ">
              {/* image container for background & center */}
              <div className="
                flex 
                items-center 
                justify-center 
                w-20 
                h-20 
                p-4 
                rounded-full 
                bg-veryDarkBlue
              ">
                <Image 
                  src="/images/icon-brand-recognition.svg" 
                  alt=""
                  width={100}
                  height={100} 
                />
              </div>
            </div>
            <h5 className="
              pt-6 
              text-xl 
              font-bold 
              text-center 
              captalize 
              md:flex-left
            ">
              Brand Recognition
            </h5>
            <p className="
              text-center 
              text-gray-400 
              md:text-left
            ">
              Boost your brand recognition with each click, Generic links don&apos;t mean a thing.
              Brand links help instil confidence in your content.
            </p>
          </div>

          {/* box 2 */}
          <div className="
            relative 
            flex 
            flex-col 
            mt-24 
            p-6 
            space-y-6 
            bg-white 
            rounded-lg 
            md:mt-8 
            md:w-1/3
          ">
            {/* image positionng */}
            <div className="
              absolute 
              -ml-10 
              -top-10 
              left-1/2 
              md:mt-8 
              md:left-16
            ">
              {/* image container for background & center */}
              <div className="
                flex 
                items-center 
                justify-center 
                w-20 
                h-20 
                p-4 
                rounded-full 
                bg-veryDarkBlue
              ">
                <Image
                  src="/images/icon-detailed-records.svg" 
                  alt="" 
                  width={100}
                  height={100} 
                />
              </div>
            </div>
            <h5 className="
              pt-6 
              text-xl 
              font-bold 
              text-center 
              captalize 
              md:flex-left
            ">
              Detailed records
            </h5>
            <p className="
              text-center 
              text-gray-400 
              md:text-left
            ">
              Gain insights into who is clicking your links. Knows when and where people engage with your 
              content helps inform better decisions.
            </p>
          </div>

          {/* box 3 */}
          <div className="
            relative 
            flex 
            flex-col 
            mt-24 
            p-6 
            space-y-6 
            bg-white 
            rounded-lg 
            md:mt-16 
            md:w-1/3
          ">
            {/* image positionng */}
            <div className="
              absolute 
              -ml-10 
              -top-10 
              left-1/2 
              md:mt-8 
              md:left-16
            ">
              {/* image container for background & center */}
              <div className="
                flex 
                items-center 
                justify-center 
                w-20 
                h-20 
                p-4 
                rounded-full 
                bg-veryDarkBlue
              ">
                <Image
                  src="/images/icon-fully-customizable.svg" 
                  alt="" 
                  width={100}
                  height={100} 
                />
              </div>
            </div>
            <h5 className="
              pt-6 
              text-xl 
              font-bold 
              text-bold 
              text-center 
              captalize 
              md:flex-left
            ">
              Fully customized
            </h5>
            <p className="
              text-center 
              text-gray-400 
              md:text-left
            ">
              Improve brand awarendess and content discoverability through
              customized links, superchanging audience engagement.
            </p>
          </div>
        </div>
      </section>

      {/* section CTA */}
      <section id="cta" className="py-24 bg-darkViolet">
        <div className="flex flex-col p-2 space-6">
          <h5 className="mx-auto space-y-10 text-4xl font-bold- text-center text-white">
            Boost your links today.
          </h5>
          <button className="
            px-10 
            py-5 
            mx-auto 
            text-2xl 
            font-bold 
            text-white 
            rounded-full 
            bg-cyan 
            hover:bg-cyanLight 
            md:text-base 
            md:py-3 
            focus:outline-none
          ">
            Get started
          </button>
        </div>
      </section>

      <footer className="py-16 bg-veryDarkViolet">
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
          <Image width={100} height={100} src="/images/logo.svg" alt="" />

          {/* menu container */}
          <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
            {/* menu 1 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white captalize">Features</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="" className="captalize text-grayisViolet hover:text-cyan">Link shortening</a>
                <a href="" className="captalize text-grayisViolet hover:text-cyan">Branded links</a>
                <a href="" className="captalize text-grayisViolet hover:text-cyan">Analitics</a>
              </div>
            </div>

            {/* menu 2 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white captalize">Resources</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="" className="captalize text-grayisViolet hover:text-cyan">Blog</a>
                <a href="" className="captalize text-grayisViolet hover:text-cyan">BDevelopers</a>
                <a href="" className="captalize text-grayisViolet hover:text-cyan">Support</a>
              </div>
            </div>

            {/* menu 3 */}
            <div className="flex flex-col items-center w-full md:items-start">
              <div className="mb-5 font-bold text-white captalize">Company</div>
              <div className="flex flex-col items-center space-y-3 md:items-start">
                <a href="" className="captalize text-grayisViolet hover:text-cyan">About</a>
                <a href="" className="captalize text-grayisViolet hover:text-cyan">Our team</a>
                <a href="" className="captalize text-grayisViolet hover:text-cyan">Careers</a>
                <a href="" className="captalize text-grayisViolet hover:text-cyan">Contact</a>
              </div>
            </div>
          </div>

          {/* social container */}
          <div className="flex space-x-6">
            <a href="">
              <Image 
                src="/images/icon-facebook.svg"
                width={25} 
                height={25} 
                alt=""
                className="socialIcon"
              />
            </a>
            <a href="">
              <Image 
                src="/images/icon-twitter.svg"
                width={25} 
                height={25} 
                alt=""
                className="socialIcon"
              />
            </a>
            <a href="">
              <Image 
                src="/images/icon-pinterest.svg"
                width={25} 
                height={25} 
                alt=""
                className="socialIcon"
              />
            </a>
            <a href="">
              <Image 
                src="/images/icon-instagram.svg"
                width={25} 
                height={25} 
                alt=""
                className="socialIcon"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
