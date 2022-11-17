import React from 'react'
import Overview from '../../components/Overview'

const name = 'HTML & CSS Tutorial for beginners'
const price = '$15'
const description = `
<p>A seamless tansition into HTML and CSS for beginners.</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Issa video',
]

const Hcb = () => {
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

export default Hcb