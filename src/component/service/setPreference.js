export default function () {
  if (window && window.localStorage) {
    if (window.localStorage.getItem('everlandGlobalLan') === null || window.localStorage.getItem('everlandGlobalLan') === 'english') {
      window.localStorage.setItem('everlandGlobalLan', 'chinese');
    } else {
      window.localStorage.setItem('everlandGlobalLan', 'english');
    }
  }
};
