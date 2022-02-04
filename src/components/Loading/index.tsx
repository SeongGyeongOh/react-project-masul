import React, { useEffect } from 'react';
import $ from 'jquery';
import { LoadingStyle } from './style';

const Loading = () => {
  var worker: any = null;
  var loaded = 0;

  function increment() {
    $('#counter').html(loaded + '%');
    $('#drink').css('top', 100 - loaded * 0.9 + '%');
    if (loaded == 25) $('#cubes div:nth-child(1)').fadeIn(100);
    if (loaded == 50) $('#cubes div:nth-child(2)').fadeIn(100);
    if (loaded == 75) $('#cubes div:nth-child(3)').fadeIn(100);
    if (loaded == 100) {
      $('#lemon').fadeIn(100);
      $('#straw').fadeIn(300);
      loaded = 0;
      stopLoading();
      setTimeout(startLoading, 1000);
    } else loaded++;
  }

  function startLoading() {
    $('#lemon').hide();
    $('#straw').hide();
    $('#cubes div').hide();
    worker = setInterval(increment, 30);
  }
  function stopLoading() {
    clearInterval(worker);
  }

  useEffect(() => {
    startLoading();
  }, []);
  return (
    <LoadingStyle>
      <div id="loader">
        <div id="lemon"></div>
        <div id="straw"></div>
        <div id="glass">
          <div id="cubes">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div id="drink"></div>
          <span id="counter"></span>
        </div>
        <div id="coaster"></div>
      </div>
    </LoadingStyle>
  );
};

export default Loading;
