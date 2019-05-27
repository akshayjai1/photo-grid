import React from 'react';
import edit from '../assets/images/edit.png';
import cross from '../assets/images/cross.png';

const CardOverlay = props => {
  const { show = true, onEdit, removeImage } = props;
  return (show && <div className="overlay">
    <img className="edit_icon" src={edit} alt='' onClick={onEdit}/>
    <img className="cross_icon" src={cross} alt='' onClick={removeImage} />
  </div>)
}

export default CardOverlay;