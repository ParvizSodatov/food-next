import Link from 'next/link'
// import { Button } from '../ui/button'

export default function Nav() {
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 z-50 text-black bg-opacity-90 backdrop-blur-sm'>
        {/* Background overlay */}
       

        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo */}
            <div className='flex-shrink-0'>
              <h1 className='text-orange-400 text-2xl font-bold tracking-wider'>
                <Link href={'/'}>FOOD</Link>
              </h1>
            </div>

            {/* Navigation Links */}
            <div className='hidden md:block'>
              <div className='ml-10 flex items-baseline space-x-8'>
               
                <Link
                  href='/menu'
                  className='text-black hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200'
                >
                  Меню
                </Link>
                <a
                  href='/dostavka'
                  className='text-black hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200'
                >
                  Доставка
                </a>
					 <a
                  href='/dostavka'
                  className='text-black hover:text-orange-400 px-3 py-2 text-sm font-medium transition-colors duration-200'
                >
                  оплата
                </a>
                
              </div>
            </div>

            {/* Booking Button */}
            <div className='flex items-center'>
              <Link
                href='/bron'
                className='bg-orange-400 hover:bg-orange-500 text-black px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200'
              >
                Бронь столика
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className='  md:hidden'>
              <button className='text-white hover:text-orange-400 p-2'>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-80 rounded-lg mt-2 flex justify-between'>
              <a
                href='/menu'
                className='text-white hover:text-orange-400 block px-3 py-2 text-base font-medium transition-colors duration-200'
              >
                Меню
              </a>
              <a
                href='/delivery'
                className='text-white hover:text-orange-400 block px-3 py-2 text-base font-medium transition-colors duration-200'
              >
                Доставка
              </a>
              <a
                href='/payment'
                className='text-white hover:text-orange-400 block px-3 py-2 text-base font-medium transition-colors duration-200'
              >
                Оплата
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}