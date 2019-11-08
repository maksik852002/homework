import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Content';
import Header from './Header';
import Footer from './Footer'
import Carousel from './Carousel'
import * as serviceWorker from './serviceWorker';
import './bootstrap.min.css';
import img from './img/Terminator.jpg'
import img1 from './img/backToFuture.jpg'
import img2 from './img/JentelmensOfLucky.jpg'



const cards = (
  <div className="container"> 
    <div className="row mt-3">
      <Main title='Terminator' year='1984' country='Великобритания, США' producer='Джеймс Кэмерон' time='108 мин. / 01:48' image={img} />
      <Main title='Back to the Future' year='1985' country='США' producer='Роберт Земекис' time='116 мин. / 01:56'  image={img1}/>
      <Main title='Джентельмены Удачи' year='1971' country='СССР' producer='Александр Серый' time='84 мин. / 01:24' image={img2}/>
    </div>
  </div>
);

ReactDOM.render(cards, document.getElementById('main'));
ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));
ReactDOM.render(<Carousel/>, document.getElementById('carousel'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
