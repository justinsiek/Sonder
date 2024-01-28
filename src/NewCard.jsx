import React from 'react'

const NewCard = ({ text, image }) => {
  return (
    <div>
        <p>{text}</p>
        <img src={image} alt="card" />
    </div>
  )
}

export default NewCard