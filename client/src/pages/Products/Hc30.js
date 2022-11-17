import React from 'react'
import Overview from '../../components/Overview'

const name = 'Learn HTML & CSS in 30 min'
const price = '$15'
const description = `
<p>Learn HTML and CSS, but faster.</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Issa video',
]

const Hc30 = () => {
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

export default Hc30