import React, { useState } from 'react'
import Overview from '../../components/Overview'
import { useMutation } from '@apollo/client';
import { UPDATE_COURSE } from '../../utils/mutations';

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
  const [formState, setFormState] = useState({
    updateCourseId: '636e9c69dab6c2650414da4c',
    hcbCart: true,
  });
  const [updateCourse, { error, data }] = useMutation(UPDATE_COURSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateCourse({
        variables: { ...formState },
      });

    } catch (e) {
      console.error(e);
    }
  };

  const renderForm = () => {
    if (data) {
      return (
        <p>
          Success! Product had been added to Cart!
        </p>
      )
    }
  };

  return (
    <>
      <Overview
        handleFormSubmit={handleFormSubmit}
        name={name}
        price={price}
        description={description}
        imageSrc={imgSrc}
        imageAlt={imgAlt}
        features={features} />
      <div className="flex justify-center">{renderForm()}</div>
    </>
  )
}

export default Hcb