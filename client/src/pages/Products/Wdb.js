import React from 'react'
import Overview from '../../components/Overview'

const name = 'Learn Web Development as a Beginner'
const price = '$25'
const description = `
<p>Learn beginner steps to further your knowledge as a junior web developer.</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Issa video',
]

const Wdb = () => {
  return (
    <Overview
      name={name}
      price={price}
      description={description}
      imageSrc={imgSrc}
      imageAlt={imgAlt}
      features={features} />
  )
}

export default Wdb