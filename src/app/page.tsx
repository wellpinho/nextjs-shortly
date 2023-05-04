import Image from "next/image";

export default function Home() {
  return (
    // nav container
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
  )
}
