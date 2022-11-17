import React from 'react'
import Overview from '../../components/Overview'

const name = 'JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour'
const price = '$25'
const description = `
<p>Learn the basics of Javascript.</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Issa video',
]

const Jsb = () => {
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

export default Jsb