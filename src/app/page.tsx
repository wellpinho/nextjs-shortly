import Image from "next/image";

export default function Home() {
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

        </div>

          {/* mobile menu */}
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
              <Image width={500} height={100} src="/images/illustration-working.svg" alt="" />
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
            />

            <button className="
              px-10 
              py-3 
              text-white 
              bg-cyan 
              rounded-lg 
              hover:bg-cyanLight 
              hover:text-veryDarkBlue 
              focus:outline-none 
              md:py-2
            ">
              Shorten It!
            </button>
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
    </>
  )
}
