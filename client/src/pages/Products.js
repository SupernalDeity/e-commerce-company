import React from 'react';
// import Overview from './components/Overview';
import { useQuery } from '@apollo/client';
// Utilities
import Auth from '../utils/auth';
import { QUERY_USERS } from '../utils/queries';

const products = [
  {
    id: 1,
    name: 'Express.js The Complete Guide',
    href: '/product/Efull',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669136430/Course%20Images/E-Commerce_Courses_2_rextbg.png',
    imageAlt: 'Express.js Complete Course Image',
  },
  {
    id: 2,
    name: 'Coding - Expectations vs. Reality',
    href: '/product/Evsr',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669136767/Course%20Images/E-Commerce_Courses_3_oap5cx.png',
    imageAlt: 'Coding Course Image',
  },
  {
    id: 3,
    name: 'How to Program',
    href: '/product/H2p',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135963/Course%20Images/1_owrrzb.png',
    imageAlt: 'How to Program Course Image',
  },
  {
    id: 4,
    name: 'Learn HTML & CSS in 30 min',
    href: '/product/Hc30',
    price: '$15',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135964/Course%20Images/19_af6tek.png',
    imageAlt: 'HTML & CSS Course Image',
  },
  {
    id: 5,
    name: 'HTML & CSS Tutorial for beginners',
    href: '/product/Hcb',
    price: '$15',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135963/Course%20Images/18_lawuv7.png',
    imageAlt: 'HTML & CSS Beginners Course Image',
  },
  {
    id: 6,
    name: 'HTML & CSS Full Course',
    href: '/product/Hcfull',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1668798980/Course%20Images/HCFull_czsgpg.png',
    imageAlt: 'HTML & CSS Course Image',
  },
  {
    id: 7,
    name: 'Where to Start Learning How To Code',
    href: '/product/How2',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135963/Course%20Images/3_l7tsqs.png',
    imageAlt: 'How to Code Course Image',
  },
  {
    id: 8,
    name: 'Basics of JavaScript 10 minutes',
    href: '/product/Js10',
    price: '$5',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1668794844/Course%20Images/2_iggkua.png',
    imageAlt: 'JavaScript Basics Course Image',
  },
  {
    id: 9,
    name: 'JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour',
    href: '/product/Jsb',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135963/Course%20Images/6_cuffal.png',
    imageAlt: 'JavaScript Beginners Course Image',
  },
  {
    id: 10,
    name: 'MongoDB Tutorial for beginners',
    href: '/product/Mdbb',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135963/Course%20Images/9_rkn46k.png',
    imageAlt: 'MongoDB Beginners Course Image',
  },
  {
    id: 11,
    name: 'Node.js The Complete Guide',
    href: '/product/Nfull',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1668794832/Course%20Images/16_bxlawu.png',
    imageAlt: 'Node.js Complete Course Image',
  },
  {
    id: 12,
    name: 'Python Basics in 30 minutes',
    href: '/product/P30',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1668794844/Course%20Images/4_occagv.png',
    imageAlt: 'Python Basics Course Image',
  },
  {
    id: 13,
    name: 'Python Tutorial: Full Course For Beginners',
    href: '/product/Pfull',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1668798490/Course%20Images/Python_Full_ima15n.png',
    imageAlt: 'Python Full Course Image',
  },
  {
    id: 14,
    name: 'React.js Tutorial For Beginners: Learn React in 1 Hour',
    href: '/product/R60',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1668794844/Course%20Images/6_pvzcns.png',
    imageAlt: 'React.js Course Image',
  },
  {
    id: 15,
    name: 'Learn Web Development as a Beginner',
    href: '/product/Wdb',
    price: '$25',
    imageSrc: 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135963/Course%20Images/2_hsfmo2.png',
    imageAlt: 'Web Development Course Image',
  },
  // More products...
]

const Products = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
 )
}

export default Products;