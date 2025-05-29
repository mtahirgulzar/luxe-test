// import React, { useEffect, useState } from 'react';
// import './WhatIsSema.css';

// const WhatIsTirz = () => {
//   const [cityId, setCityId] = useState('1');
//   const [urlParams, setUrlParams] = useState('');

//   // console.log(treatmentsData)
//   const getCityId = () => {
//     if (typeof window !== 'undefined') {
//     // Check if the URL contains the word "maddisonville"
//       const url = window.location.href.toLowerCase();
//       if (url.includes('maddisonville')) {
//         localStorage.setItem('cityID', '3');
//         return '3';
//       } else if (url.includes('rgv')) {
//         localStorage.setItem('cityID', '4');
//         return '4';
//       } else if (url.includes('austin')) {
//         localStorage.setItem('cityID', '2');
//         return '2';
//       } else {
//       // Check if cityID exists in local storage, otherwise set it to '1'
//         const storedCityID = localStorage.getItem('cityID');
//         if (storedCityID) {
//           return storedCityID;
//         } else {
//           localStorage.setItem('cityID', '1');
//           return '1';
//         }
//       }
//     }
//     // Return '1' as the default value when window is not defined
//     return '1';
//   };

//   useEffect(() => {
//     const fetchedCityId = getCityId();
//     setCityId(fetchedCityId);
//     if (typeof window !== 'undefined') {
//       const url = window.location.href;
//       const paramIndex = url.indexOf('?');
//       if (paramIndex !== -1) {
//         const paramString = url.slice(paramIndex + 1);
//         setUrlParams(paramString);
//       }
//     }
//   }, []);

//   const getUrlWithParams = (url) => {
//     return `${url}${urlParams ? `?${urlParams}` : ''}`;
//   };

//   // const getUrlWithParams = (url) => {
//   //   if (typeof window !== 'undefined') {
//   //     const currentUrl = new URL(window.location.href);
//   //     currentUrl.pathname = `${url}/${cityId}`;
//   //     return decodeURIComponent(currentUrl.toString());
//   //   }; return `${url}/${cityId}`;
//   // };

//   return (
//     <div className="what-is-sema">
//       <div className="content-wrapper">
//         <h2 className="greenTitle" style={{ textAlign: 'center' }}>WHAT IS TIRZEPATIDE?</h2>
//         <ul className="bullet-list">
//           <li>
//             <span className="checkmark-icon">✔</span>
//             <span className="bullet-text">
//               <span className="bullet-heading">Effective:</span> Patients lose an average of 20% of their body weight. For example, a 200 lb person loses an average of over 40 lbs in 36 weeks.
//             </span>
//           </li>
//           <li>
//             <span className="checkmark-icon">✔</span>
//             <span className="bullet-text">
//               <span className="bullet-heading">FDA approved:</span> Tirzepatide is FDA approved for weight loss. It is estimated that millions are already taking it.
//             </span>
//           </li>
//           <li>
//             <span className="checkmark-icon">✔</span>
//             <span className="bullet-text">
//               <span className="bullet-heading">Next generation of weight loss:</span> Previously weight loss drugs worked as a stimulant. This works by using your body's natural methods to decrease appetite.
//             </span>
//           </li>
//           <li>
//             <span className="checkmark-icon">✔</span>
//             <span className="bullet-text">
//               <span className="bullet-heading">Decreased desire to eat:</span> Much like Melatonin is a naturally occurring chemical that helps you sleep, Semaglutide is a synthetic version of the chemical that tells your body you're full.
//             </span>
//           </li>
//           <li>
//             <span className="checkmark-icon">✔</span>
//             <span className="bullet-text">
//               <span className="bullet-heading">Well known:</span> Tirzepatide is the generic formula for Mounjaro, and works in a similar way to the popular GLP-1 agonist medicines Ozempic and Wegovy. However, tirzepatide is both a GLP-1 and GIP agonist, and has shown stronger results that semaglutide in recent studies.
//             </span>
//           </li>
//         </ul>
//         <div style={{ margin: 'auto', textAlign: 'center' }}>
//           <p style={{ margin: 'auto', textAlign: 'center' }}>Start Today for only $400 per month</p>
//           <a href={getUrlWithParams('/city/25fcfd47-fd50-459e-8468-920a0eacb9ff')} style={{ textDecoration: 'none' }}>
//             <button className="bookOnlineButton">GET STARTED</button>
//           </a>
//           {/* <button className="bookOnlineButton">GET STARTED</button> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhatIsTirz;

import React from 'react';
import './WhatIsSema.css';

const WhatIsTirz = () => {
  return (
    <div className="what-is-sema">
      <div className="content-wrapper">
        <h2 className="greenTitle" style={{ textAlign: 'center' }}>WHAT IS TIRZEPATIDE?</h2>
        <ul className="bullet-list">
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">Effective:</span> Patients lose an average of 20% of their body weight. For example, a 200 lb person loses an average of over 40 lbs in 36 weeks.
            </span>
          </li>
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">FDA approved:</span> Tirzepatide is FDA approved for weight loss. It is estimated that millions are already taking it.
            </span>
          </li>
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">Next generation of weight loss:</span> Previously weight loss drugs worked as a stimulant. This works by using your body's natural methods to decrease appetite.
            </span>
          </li>
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">Decreased desire to eat:</span> Much like Melatonin is a naturally occurring chemical that helps you sleep, Semaglutide is a synthetic version of the chemical that tells your body you're full.
            </span>
          </li>
          <li>
            <span className="checkmark-icon">✔</span>
            <span className="bullet-text">
              <span className="bullet-heading">Well known:</span> Tirzepatide is the generic formula for Mounjaro, and works in a similar way to the popular GLP-1 agonist medicines Ozempic and Wegovy. However, tirzepatide is both a GLP-1 and GIP agonist, and has shown stronger results that semaglutide in recent studies.
            </span>
          </li>
        </ul>
        <div style={{ margin: 'auto', textAlign: 'center' }}>
          <p style={{ margin: 'auto', textAlign: 'center' }}>Start Today for only $400 per month</p>
          <a href="#treatments" style={{ textDecoration: 'none' }}>
            <button className="bookOnlineButton">GET STARTED</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatIsTirz;