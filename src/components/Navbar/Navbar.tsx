import React from 'react'
import Link from 'next/link'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Inter from 'next/font/google'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
      <nav className="flex justify-between my-5 py-4 px-5 bg-slate-900 rounded-lg text-white md:container md:mx-auto lg:container lg:mx-auto md:w-80 lg:w-2/3 xl:w-2/3 transition-opacity duration-500 ease-in-out">
        <div className="flex items-center">
          <StorefrontIcon className="text-blue-400" />
          <Link href="/" className="ml-2">
            Volk Mobiles
          </Link>
        </div>
        <div className="flex items-center">
          <ShoppingCartIcon className="text-blue-400" />
          <Link href="/cart" className="ml-2"> 0 </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar