import React from 'react';

const SelectCard = (props) => {
  const { imageUrl = '', selected = false, setNewUrl } = props;
  return (
    <div className={`${selected? 'selectedForUpdate': ''} card_image_div`}>
      <img className={'card_image'} src={imageUrl} alt='Image To Be changed'
        onClick={setNewUrl.bind(null,imageUrl)}
      />
    </div>
  )
}

export default SelectCard;