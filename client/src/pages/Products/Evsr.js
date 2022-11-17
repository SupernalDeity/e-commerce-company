import React from 'react'
import Overview from '../../components/Overview'

const name = 'Coding - Expectations vs. Reality'
const price = '$25'
const description = `
<p>It is important to gauge expectations when learning new material. We often have an idea of what our learning process will look like, and we are often proven wrong. This video aims to give you a better idea of how learning to code actually works.</p>
`
const imgSrc = 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg'
const imgAlt = 'Angled front view with bag zipped and handles upright.'
const features = [
  'Issa video',
]

const Evsr = () => {
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

export default Evsr