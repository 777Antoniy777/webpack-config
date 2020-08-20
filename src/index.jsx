import * as $ from "jquery";
import React from 'react';
import {render} from 'react-dom';
import Post from "@/js/post";
import "@/js/babel";
import "@/styles/style.css";
import "@/styles/box.less";
import "@/styles/box.scss";
import img from "@/assets/images/vinyl.png";

const post = new Post('Start webpack config', img);

$('.json-wrapper').html(post.toString());

const App = () => {
  return (
    <div className="container">
      <h1>Webpack config</h1>

      {/* <div className="logo"></div> */}

      <pre className="json-wrapper"></pre>
    </div>
  )
};

render(<App />, document.getElementById('app'))
