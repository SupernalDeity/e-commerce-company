import React from 'react'
import Overview from '../../components/Overview'

const name = 'Where to Start Learning How To Code'
const price = '$25'
const description = `
<p>Learn important resources to use while coding with this video.</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Issa video',
]

const How2 = () => {
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

export default How2