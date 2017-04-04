import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Article from '../';

const alert = '';
const currentViewSize = 4;
const selectedPhotos = [
  {
    "id": "32393549123",
    "source": "https://farm1.staticflickr.com/748/32393549123_7eeaf3987f_n.jpg",
    "original": "https://farm1.staticflickr.com/748/32393549123_aa850eb989_o.jpg"
  },
  {
    "id": "33080731281",
    "source": "https://farm1.staticflickr.com/766/33080731281_bc00c16a4f_n.jpg",
    "original": "https://farm1.staticflickr.com/766/33080731281_66f6a050aa_o.jpg"
  },
  {
    "id": "33208490285",
    "source": "https://farm1.staticflickr.com/711/33208490285_7a90bc6f0d_n.jpg",
    "original": "https://farm1.staticflickr.com/711/33208490285_6c6e229e8c_o.jpg"
  },
  {
    "id": "32393539423",
    "source": "https://farm4.staticflickr.com/3767/32393539423_86561428ab_n.jpg",
    "original": "https://farm4.staticflickr.com/3767/32393539423_8d5092d68b_o.jpg"
  },
  {
    "id": "32364211744",
    "source": "https://farm4.staticflickr.com/3822/32364211744_1f17268760_n.jpg",
    "original": "https://farm4.staticflickr.com/3822/32364211744_1ee859de4d_o.jpg"
  },
  {
    "id": "33208484225",
    "source": "https://farm1.staticflickr.com/597/33208484225_dae04ffe50_n.jpg",
    "original": "https://farm1.staticflickr.com/597/33208484225_dbd65b6a8d_o.jpg"
  },
  {
    "id": "33051771402",
    "source": "https://farm4.staticflickr.com/3851/33051771402_4054d32ddf_n.jpg",
    "original": "https://farm4.staticflickr.com/3851/33051771402_eda8df9a85_o.jpg"
  },
  {
    "id": "33080707611",
    "source": "https://farm1.staticflickr.com/630/33080707611_a8ec266c8b_n.jpg",
    "original": "https://farm1.staticflickr.com/630/33080707611_7d02d99455_o.jpg"
  },
  {
    "id": "33208476055",
    "source": "https://farm1.staticflickr.com/599/33208476055_84361a4d89_n.jpg",
    "original": "https://farm1.staticflickr.com/599/33208476055_194ff6f531_o.jpg"
  }
];

const selectedPhoto = {
  id: 1234,
  original: 'http://host:port/image.jpg'
}

const selectPhoto = jest.fn();

it('Photo Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Article
      alert={alert}
      currentViewSize={currentViewSize}
      selectedPhotos={selectedPhotos}
      selectPhoto={selectPhoto}
      selectedPhoto={selectedPhoto}
    />,
    div);
});

it('Photo Snapshot matchs', () => {
  const tree = renderer.create(
    <Article
      alert={alert}
      currentViewSize={currentViewSize}
      selectedPhotos={selectedPhotos}
      selectPhoto={selectPhoto}
      selectedPhoto={selectedPhoto}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
