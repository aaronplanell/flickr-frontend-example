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
import { fetchListOfPhotosets, selectPhotoset, fetchPhotosByPhotoset, getSizesOfAllPhotos, fetchSizesOfAPhoto } from '../actions';

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
    let { alert, photosets, selectPhotoset, fetchPhotosByPhotoset, getSizesOfAllPhotos } = this.props;
    return (
      <div id="main" className="App" style={{height: '100%'}}>
        <Navigation />
        <section style={{height: '100%'}}>
          <Header />
          <Article alert={alert} />
          <Footer />
        </section>
        <Aside photosets={photosets} selectPhotoset={selectPhotoset} fetchPhotosByPhotoset={fetchPhotosByPhotoset} getSizesOfAllPhotos={getSizesOfAllPhotos}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps, { fetchListOfPhotosets, selectPhotoset, fetchPhotosByPhotoset, getSizesOfAllPhotos, fetchSizesOfAPhoto })(App);
