export const getCityID = () => {
  if (typeof window === 'undefined') return '1';

  const url = window.location.href.toLowerCase();
  if (url.includes('houston')) {
    localStorage.setItem('cityID', '1');
    return '1';
  } else if (url.includes('maddisonville')) {
    localStorage.setItem('cityID', '3');
    return '3';
  } else if (url.includes('rgv')) {
    localStorage.setItem('cityID', '4');
    return '4';
  } else if (url.includes('austin')) {
    localStorage.setItem('cityID', '2');
    return '2';
  }

  // Check if cityID exists in local storage, otherwise set it to '1'
  const storedCityID = localStorage.getItem('cityID');
  if (storedCityID) {
    return storedCityID;
  }
//   } else {
//     localStorage.setItem('cityID', '1');
//     return '1';
//   }
};

export const getCityName = (cityID) => {
  if (cityID === null) return "TEXAS'S";

  switch (cityID) {
  case 1:
    return "HOUSTON'S";
  case 2:
    return "AUSTIN'S";
  case 3:
    return "MADDISONVILLE'S";
  case 4:
    return "RIO GRANDE VALLEY'S";
  default:
    return "TEXAS'S";
  }
};

export const getPhoneNumber = (cityID) => {
  switch (cityID) {
  case '4':
    return '+19564318240';
  case '2':
    return '+17373258075';
  default:
    return '+18329797034';
  }
};
