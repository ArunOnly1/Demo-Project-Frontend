import React, { useState } from 'react'
import styled from 'styled-components'
import {
  ImageContainer,
  ImageWrapper,
  MainImageWrapper,
  SubImageContainer,
} from './SingleCourse-Wrap'

const imageArray = [
  'https://image.shutterstock.com/image-illustration/hands-young-man-on-keyboard-260nw-134102588.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwq8UveKU4kpBXmnFUbL8xH6unIwcYh07GIg&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-EeeXqgvbTx5m4j9vp_8fTyJ5S8WbX9nCQ&usqp=CAU',
  'https://image.shutterstock.com/image-vector/vector-hand-circle-tech-on-260nw-662754781.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomzpbd0s1JsJDCQOS0j14UfeBpWGTVTsp0w&usqp=CAU',
]
const CourseImage = () => {
  const [images, setImages] = useState(imageArray)
  const [currentImage, setCurrentImage] = useState(imageArray[0])

  return (
    <ImageContainer>
      <MainImageWrapper bgurl={currentImage} />
      <SubImageContainer>
        {images.map((item, index) => (
          <ImageWrapper
            key={index}
            src={item}
            alt='sub '
            className={`${item === currentImage ? 'active' : null}`}
            onClick={() => setCurrentImage(item)}
          />
        ))}
      </SubImageContainer>
    </ImageContainer>
  )
}

export default CourseImage
