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
    </>
  )
}
