import React, { Component } from 'react';
import { connect } from 'react-redux';

// CSS
import './App.css';

// Components
import Navigation from './sections/Navigation';
import Header from './sections/Header';
import Article from './sections/Article';
import Footer from './sections/Footer';
import Aside from './sections/Aside';

// Actions
import {
  fetchListOfPhotosets,
  selectPhotoset,
  fetchPhotosByPhotoset,
  getSizesOfAllPhotos,
  fetchSizesOfAPhoto,
  selectViewSize,
  selectPhoto
} from '../actions';

// selectorOfPhotosBySize
import { selectorOfPhotosBySize } from '../reducers/photos';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isListOfPhotosetsLoading: false
    }
    fetchListOfPhotosets();
  }

  componentDidMount() {
    const { isListOfPhotosetsLoaded } = this.state;
    const { fetchListOfPhotosets } = this.props;
    if (!isListOfPhotosetsLoaded) {
      this.setState({...this.state, isListOfPhotosetsLoaded: true});
      fetchListOfPhotosets();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { params, photos, getSizesOfAllPhotos, fetchSizesOfAPhoto } = nextProps;
    const { updateSizesOfPhotos } = params;
    if (updateSizesOfPhotos) {
      photos.map( (photo) => {
        const { id } = photo;
        return fetchSizesOfAPhoto(id);
      });
      getSizesOfAllPhotos(false);
    };
  }

  render() {
    const {
      alert,
      params,
      photosets,
      selectPhotoset,
      fetchPhotosByPhotoset,
      getSizesOfAllPhotos,
      selectedPhotos,
      selectViewSize,
      selectPhoto
    } = this.props;
    const { currentViewSize, selectedPhoto } = params;

    return (
      <div id="main" className="App" style={{height: '100%'}}>
        <Navigation
          selectViewSize={selectViewSize}
          currentViewSize={currentViewSize}
        />
        <Aside
          photosets={photosets}
          selectPhotoset={selectPhotoset}
          fetchPhotosByPhotoset={fetchPhotosByPhotoset}
          getSizesOfAllPhotos={getSizesOfAllPhotos}
          selectPhoto={selectPhoto}
        />
        <section style={{height: '100%'}}>
          <Header />
          <Article
            alert={alert}
            selectedPhotos={selectedPhotos}
            currentViewSize={currentViewSize}
            selectPhoto={selectPhoto}
            selectedPhoto={selectedPhoto}
          />
          <Footer />
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    selectedPhotos: selectorOfPhotosBySize(state.photos, state.params.currentViewSize)
  }
}

export default connect(mapStateToProps, {
  fetchListOfPhotosets,
  selectPhotoset,
  fetchPhotosByPhotoset,
  getSizesOfAllPhotos,
  fetchSizesOfAPhoto,
  selectViewSize,
  selectPhoto
})(App);
