import React, { useState } from 'react'
import Overview from '../../components/Overview'
import { useMutation } from '@apollo/client';
import { UPDATE_COURSE } from '../../utils/mutations';
import auth from '../../utils/auth';

const name = 'How to Program'
const price = '$25'
const description = `
<p>Learn to start programming with this video.</p>
`
const imgSrc = 'https://res.cloudinary.com/dycrfr57i/image/upload/v1669135963/Course%20Images/1_owrrzb.png'
const imgAlt = 'How to Program Course Image'
const features = [
  'Issa video',
]

const H2p = () => {
  const currentUserId = auth.getProfile();
  const [formState, setFormState] = useState({
    updateCourseId: currentUserId.data._id,
    h2pCart: true,
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

export default H2p