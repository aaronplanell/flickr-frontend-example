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
import { fetchListOfGalleries } from '../actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isListOfGalleriesLoading: false
    }
    fetchListOfGalleries();
  }

  componentDidMount() {
    const { isListOfGalleriesLoaded } = this.state;
    const { fetchListOfGalleries } = this.props;
    if (!isListOfGalleriesLoaded) {
      this.setState({...this.state, isListOfGalleriesLoaded: true});
      fetchListOfGalleries();
    }
  }

  render() {
    let { alert, collections } = this.props;
    return (
      <div id="main" className="App" style={{height: '100%'}}>
        <Navigation />
        <section style={{height: '100%'}}>
          <Header />
          <Article alert={alert}/>
          <Footer />
        </section>
        <Aside collections={collections}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
    collections: state.collections
  }
}

export default connect(mapStateToProps, { fetchListOfGalleries })(App);
