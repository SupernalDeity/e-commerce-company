import React, { useState } from 'react'
import Overview from '../../components/Overview'
import { useMutation } from '@apollo/client';
import { UPDATE_COURSE } from '../../utils/mutations';
import auth from '../../utils/auth';

const name = 'Node.js The Complete Guide'
const price = '$25'
const description = `
<p>A comprehensive guide to Node.js.</p>
`
const imgSrc = 'https://res.cloudinary.com/dycrfr57i/image/upload/v1668794832/Course%20Images/16_bxlawu.png'
const imgAlt = 'Node.js Complete Course Image'
const features = [
  'Issa video',
]

const Nfull = () => {
  const currentUserId = auth.getProfile();
  const [formState, setFormState] = useState({
    updateCourseId: currentUserId.data._id,
    nfullCart: true,
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

export default Nfull