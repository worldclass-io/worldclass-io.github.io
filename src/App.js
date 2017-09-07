import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h2><a href="#">WorldClass.io</a></h2>
          <nav>
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
          </nav>
        </header>
        <section className="hero">
          <div className="background-image" style={{backgroundImage: 'url(https://www.worldclass.io/wp-content/uploads/2016/06/main-home-1-e1467298797194.jpeg)'}} />
          <div style={{maxWidth: 700}}>
            <h1>The Easiest Way to Make Online Courses</h1>
            <h3>It's super easy to create, publish and sell courses online.
  Get your branded site and mobile apps today!</h3>
<a href="https://tutorialzine.com/2016/06/freebie-landing-page-template-with-flexbox/" className="btn">Try it for free</a>
          </div>

        </section>
        <section className="our-work">
          <h3 className="title">Some of our work</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
          <hr />
          <ul className="grid">
            <li className="small" style={{backgroundImage: 'url(assets/img/coast.jpg)'}} />
            <li className="large" style={{backgroundImage: 'url(assets/img/island.jpg)'}} />
            <li className="large" style={{backgroundImage: 'url(assets/img/balloon.jpg)'}} />
            <li className="small" style={{backgroundImage: 'url(assets/img/mountain.jpg)'}} />
          </ul></section>
        <section className="features">
          <h3 className="title">Features and services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
          <hr />
          <ul className="grid">
            <li>
              <i className="fa fa-camera-retro" />
              <h4>Photography</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
            </li>
            <li>
              <i className="fa fa-cubes" />
              <h4>Web Development</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
            </li>
            <li>
              <i className="fa fa-newspaper-o" />
              <h4>Content Editing</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices vitae pulvinar velit.</p>
            </li>
          </ul></section>
        <section className="reviews">
          <h3 className="title">What others say:</h3>
          <p className="quote">Mauris sit amet mauris a arcu eleifend ultricies eget ut dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <p className="author">— Patrick Farrell</p>
          <p className="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
          <p className="author">— George Smith</p>
          <p className="quote">Donec commodo dolor augue, vitae faucibus tortor tincidunt in. Aliquam vitae leo quis mi pulvinar ornare. Integer eu iaculis metus.</p>
          <p className="author">— Kevin Blake</p>
        </section>
        <section className="contact">
          <h3 className="title">Join our newsletter</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id felis et ipsum bibendum ultrices. Morbi vitae pulvinar velit. Sed aliquam dictum sapien, id sagittis augue malesuada eu.</p>
          <hr />
          <form>
            <input type="email" placeholder="Email" />
            <a href="#" className="btn">Subscribe now</a>
          </form>
        </section>
        <footer>
          <ul>
            <li><a href="#"><i className="fa fa-twitter-square" /></a></li>
            <li><a href="#"><i className="fa fa-facebook-square" /></a></li>
            <li><a href="#"><i className="fa fa-snapchat-square" /></a></li>
            <li><a href="#"><i className="fa fa-pinterest-square" /></a></li>
            <li><a href="#"><i className="fa fa-github-square" /></a></li>
          </ul>
          <p>Made by <a href="https://tutorialzine.com/" target="_blank">tutorialzine</a>. images courtesy to <a href="https://unsplash.com/" target="_blank">unsplash</a>.</p>
          <p>No attribution required. you can remove this footer.</p>
        </footer>
      </div>
    );
  }
}

export default App;
