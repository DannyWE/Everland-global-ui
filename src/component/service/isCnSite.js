export default function () {
  return window && window.localStorage && window.localStorage.getItem('everlandGlobalLan') === 'chinese';
};
