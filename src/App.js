import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} />
    </div>
  );
}

const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://img.lovepik.com/photo/40119/9065.jpg_wh860.jpg',
  },
  {
    name: 'Samgyeopsal',
    image: 'https://t1.daumcdn.net/cafefile/pds55/6_cafe_2007_11_30_12_07_474f7e3da2562',
  },
  {
    name: 'Doncasu',
    image: 'https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/19va/image/06OwPbc7NgBrmczZwRDHX2cXXoM.png',
  },
  {
    name: 'Kimbap',
    image: 'https://cdn.xxl.thumbs.canstockphoto.co.kr/%EA%B0%80%EC%8A%A4-%EC%84%B1%EC%9A%B4-%EB%B0%96%EC%9D%B4%EB%8B%A4-%EA%B5%AC%EB%A6%84-%EA%B3%B5%EA%B0%84-%EA%B7%B8%EB%A6%BC_csp8576320.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (<Food name={dish.name} picture={dish.image} />))}
    </div>
  );
}

export default App;