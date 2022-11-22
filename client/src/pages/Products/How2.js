import React, { useState } from 'react'
import Overview from '../../components/Overview'
import { useMutation } from '@apollo/client';
import { UPDATE_COURSE } from '../../utils/mutations';
import auth from '../../utils/auth';

const name = 'Where to Start Learning How To Code'
const price = '$25'
const description = `
<p>Learn important resources to use while coding with this video.</p>
`
const imgSrc = 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135963/Course%20Images/3_l7tsqs.png'
const imgAlt = 'How to Code Course Image'
const features = [
  'Issa video',
]

const How2 = () => {
  const currentUserId = auth.getProfile();
  const [formState, setFormState] = useState({
    updateCourseId: currentUserId.data._id,
    how2Cart: true,
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

export default How2