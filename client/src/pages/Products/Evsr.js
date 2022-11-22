import React, { useState } from 'react'
import Overview from '../../components/Overview'
import { useMutation } from '@apollo/client';
import { UPDATE_COURSE } from '../../utils/mutations';
import auth from '../../utils/auth';

const name = 'Coding - Expectations vs. Reality'
const price = '$25'
const description = `
<p>It is important to gauge expectations when learning new material. We often have an idea of what our learning process will look like, and we are often proven wrong. This video aims to give you a better idea of how learning to code actually works.</p>
`
const imgSrc = 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669136767/Course%20Images/E-Commerce_Courses_3_oap5cx.png'
const imgAlt = 'Coding Course Image'
const features = [
  'Issa video',
]

const Evsr = () => {
  const currentUserId = auth.getProfile();
  const [formState, setFormState] = useState({
    updateCourseId: currentUserId.data._id,
    evsrCart: true,
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

export default Evsr