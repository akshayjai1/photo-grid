import React from 'react';
import Card from '../card/Card';
import { imageUrls } from './imageUrls';
import CardOverlay from '../card/CardOverlay';
import Overlay from '../card/Overlay';

const Grid = props => {
  const { setUrlToEdit, selectedUrls = [], removeImage } = props;
  
  const grids = selectedUrls.map(e => <Card key={e.name} 
    imageUrl={e.image_url} 
    setUrlToEdit={setUrlToEdit}
    removeImage={removeImage}
    />)
  return <>
  <div className="grid">
  <div className="parentForCenterAlign">{grids}</div></div>
  
  </>
}
export default Grid;