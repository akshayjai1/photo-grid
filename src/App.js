import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Grid from './grid/Grid';
import Overlay from './card/Overlay';
import { defaultUrls } from './grid/defaultUrls';
import { imageUrls } from './grid/imageUrls';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.urlObjLookup = {}
    imageUrls.forEach(obj => {
      this.urlObjLookup[obj.image_url] = obj
    })
    const defaultIds = defaultUrls.map(e=>e.image_url);
    const availableUrls = imageUrls.filter(e=>!defaultIds.includes(e.image_url));
    this.state = {
      showPageOverlay: false,
      selectedUrls: defaultUrls,
      availableUrls
    };
  }
  
  setUrlToEdit = (url) => {
    this.setState({
      urlToEdit: url,
      showPageOverlay: true,
    })
  }
  hideOverlay = (event) => {
    console.log(event);
    this.setState({
      showPageOverlay: false
    })
  }
  setNewUrl = (url) => {
    this.setState((oldState) => {
      return {
        newUrl:url
      }
    })
  }
  removeImage = url => {

  }
  confirmChangeImage = () => {
    this.setState((oldState) => {
      debugger;
      const removeUrls = [oldState.urlToEdit, oldState.newUrl]
      const availableUrls =  oldState.availableUrls.filter(e => !removeUrls.includes(e.image_url) );
      availableUrls.push(this.urlObjLookup[oldState.urlToEdit]);

      const selectedUrls =  oldState.selectedUrls.filter(e => !removeUrls.includes(e.image_url) );
      selectedUrls.push(this.urlObjLookup[oldState.newUrl]);
      return {
        availableUrls,
        selectedUrls,
        showPageOverlay: false,
        urlToEdit: '',
        newUrl: ''
      }
    });
  }
  render() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Fynd Photo Grid</span>
      </header>
      <Grid setUrlToEdit={this.setUrlToEdit} 
        selectedUrls={this.state.selectedUrls}
        removeImage={this.removeImage}
      />
      <Overlay 
        currentUrl={this.state.urlToEdit} 
        show={this.state.showPageOverlay} 
        onCancel={this.hideOverlay}
        onConfirm={this.confirmChangeImage}
        setNewUrl={this.setNewUrl}
        newUrl={this.state.newUrl}
        availableUrls={this.state.availableUrls}
        />
    </div>
  );
}
}
export default App;
