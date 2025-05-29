import React, { useEffect } from 'react';
import queryString from 'query-string';
// import './CovidSafety.css';

function AdCookie (props) {
  // console.log(window.location)
  const setCook = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `; expires=${date.toGMTString()}`;
    document.cookie = `${name}=${value}${expires};path=/`;
  };
  const getCookie = name => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts
        .pop()
        .split(';')
        .shift();
    }
    return 'undefined';
  };

  useEffect(() => {
    if (!getCookie('gclid') || getCookie('gclid') === 'undefined') {
      const gclidVal = queryString.parse(window.location.search).gclid;
      setCook('gclid', gclidVal, 30);
    }
    if (!getCookie('ad') || getCookie('ad') === 'undefined') {
      const adVal = queryString.parse(window.location.search).ad;
      setCook('ad', adVal, 30);
    }
    if (!getCookie('ag') || getCookie('ag') === 'undefined') {
      const agVal = queryString.parse(window.location.search).ag;
      setCook('ag', agVal, 30);
    }
    if (!getCookie('c') || getCookie('c') === 'undefined') {
      const cVal = queryString.parse(window.location.search).c;
      setCook('c', cVal, 30);
    }
    if (!getCookie('k') || getCookie('k') === 'undefined') {
      const kVal = queryString.parse(window.location.search).k;
      setCook('k', kVal, 30);
    }
    if (!getCookie('m') || getCookie('m') === 'undefined') {
      let mVal = queryString.parse(window.location.search).m;
      // console.log(getCookie('m'));
      if (mVal === undefined) {
        if (queryString.parse(window.location.search).msclkid) {
          mVal = 'bing';
        }
      }
      setCook('m', mVal, 30);
    }
    if (!getCookie('lpurl') || getCookie('lpurl') === 'undefined') {
      // console.log(window.location.href);
      const lpurl = (window.location.href);
      setCook('lpurl', lpurl, 30);
    }
  });

  return (
    <div>
    </div>
  )
}

export default AdCookie;
