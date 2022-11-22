import React, { useState } from 'react'
import Overview from '../../components/Overview'
import { useMutation } from '@apollo/client';
import { UPDATE_COURSE } from '../../utils/mutations';
import auth from '../../utils/auth';

const name = 'Basics of JavaScript 10 minutes'
const price = '$5'
const description = `
<p>Learn the basics of Javascript, but faster.</p>
`
const imgSrc = 'https://res.cloudinary.com/dycrfr57i/image/upload/v1668794844/Course%20Images/2_iggkua.png'
const imgAlt = 'JavaScript Basics Course Image'
const features = [
  'Issa video',
]

const Js10 = () => {
  const currentUserId = auth.getProfile();
  const [formState, setFormState] = useState({
    updateCourseId: currentUserId.data._id,
    js10Cart: true,
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

export default Js10