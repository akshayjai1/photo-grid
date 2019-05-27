import React from 'react';
import CardOverlay from './CardOverlay';

const Card = props => {
  const { imageUrl = 'https://picsum.photos/id/0/400/200', setUrlToEdit, removeImage } = props;
  const [ isImageOverlayVisible, setIsImageOverlayVisible] = React.useState(false);
  const onHover = (event) => {

  }
  
  return (
    <div className="card_image_div" 
      onMouseEnter={()=>{setIsImageOverlayVisible(true)}}
      onMouseLeave={()=>{setIsImageOverlayVisible(false)}}>
      <img className={'card_image'} src={imageUrl} alt=''/>
      <CardOverlay show={(isImageOverlayVisible)}  
        onEdit={setUrlToEdit.bind(null,imageUrl)}
        removeImage={removeImage.bind(null, imageUrl)} />
    </div>
  )
}
export default Card;