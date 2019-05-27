import React from 'react';

const ViewCard = props => {
  const { imageUrl = '' } = props;
  return (
    <div className="card_image_div">
      <img className={'card_image'} src={imageUrl} alt='Image To Be changed'/>
    </div>
  )
}

export default ViewCard;