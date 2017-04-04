import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
  }

  fetchListOfPhotosets() {
    const { fetchListOfPhotosets } = this.props;
    fetchListOfPhotosets();
  }

  componentDidMount() {
    const { isListOfPhotosetsLoaded } = this.state;
    if (!isListOfPhotosetsLoaded) {
      this.setState({...this.state, isListOfPhotosetsLoaded: true});
      this.fetchListOfPhotosets();
    }
  }

  getSizesOfAllPhotos(value) {
    const { getSizesOfAllPhotos } = this.props;
    getSizesOfAllPhotos(value);
  }

  componentWillReceiveProps(nextProps) {
    const { params, photos, fetchSizesOfAPhoto } = nextProps;
    const { updateSizesOfPhotos } = params;
    if (updateSizesOfPhotos) {
      photos.map( (photo) => {
        const { id } = photo;
        return fetchSizesOfAPhoto(id);
      });
      this.getSizesOfAllPhotos(false);
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
          <Header
            photosets={photosets}
            idPhotoset={params.idPhotoset}
            selectedPhoto={params.selectedPhoto}            
          />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchListOfPhotosets,
    selectPhotoset,
    fetchPhotosByPhotoset,
    getSizesOfAllPhotos,
    fetchSizesOfAPhoto,
    selectViewSize,
    selectPhoto
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
