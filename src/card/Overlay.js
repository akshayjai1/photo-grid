import React from 'react';
import ViewCard from './ViewCard';
import SelectImageList from '../grid/SelectImageList';

const Overlay = props => {
  const { show = false, onCancel, onConfirm, currentUrl = '', setNewUrl, newUrl = '', availableUrls =[] } = props;
  const hideOverlay = (event) => {
    if(event.target.className.includes("page_overlay")){
      onCancel();
    }
  }
  const beforeConfirm = () => {
    debugger;
    if(newUrl == '') {
      alert('Please select new Image');
    } else {
      onConfirm();
    }
  }
  return (show && <div className="page_overlay" onClick={hideOverlay}>
    <div className="modal">
      <div className="modal_header">Change Image</div>
      <div className="modal_body">
        <div className="current_image">
          <div className="body_label">Current Image</div>
          <div>
            <ViewCard imageUrl={currentUrl}/>
           </div>
           <div className="body_label">New Image</div>
          <div>
            <ViewCard imageUrl={newUrl}/>
           </div>
            {/* <ViewCard imageUrl={newUrl}/> */}
        </div>
        <div className="image_list">
          <div className="body_label">Choose New Image</div>
          <SelectImageList 
            setNewUrl={setNewUrl}
            availableUrls={availableUrls}
            newUrl={newUrl}/>
        </div>
      </div>
      <div className="modal_footer">
        <button onClick={beforeConfirm}>Change Image</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  </div>)
}

export default Overlay;