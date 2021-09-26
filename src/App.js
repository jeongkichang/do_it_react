import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={picture} alt={name}/>
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://img.lovepik.com/photo/40119/9065.jpg_wh860.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://t1.daumcdn.net/cafefile/pds55/6_cafe_2007_11_30_12_07_474f7e3da2562',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Doncasu',
    image: 'https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/19va/image/06OwPbc7NgBrmczZwRDHX2cXXoM.png',
    rating: 1.4,
  },
  {
    id: 4,
    name: 'Kimbap',
    image: 'https://cdn.xxl.thumbs.canstockphoto.co.kr/%EA%B0%80%EC%8A%A4-%EC%84%B1%EC%9A%B4-%EB%B0%96%EC%9D%B4%EB%8B%A4-%EA%B5%AC%EB%A6%84-%EA%B3%B5%EA%B0%84-%EA%B7%B8%EB%A6%BC_csp8576320.jpg',
    rating: 3,
  },
];

function App() {
  return (
    <div>
      {
        foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />))
      }
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}

export default App;