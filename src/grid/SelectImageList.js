import React from 'react';
import { imageUrls } from './imageUrls';
import SelectCard from '../card/SelectCard';
const SelectImageList = props => {
const {setNewUrl, newUrl = '', availableUrls = []} = props;

const imageList = availableUrls.map(e=><SelectCard imageUrl={e.image_url} key={e.name} 
  selected={newUrl === e.image_url}
    setNewUrl={setNewUrl}
  />);
  return <div className="select_list">{imageList}</div>
}

export default SelectImageList;