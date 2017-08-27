export const getIOSVersion = () => (
  (/iP(hone|od|ad)/.test(navigator.platform))
    ? parseInt((navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/)[1], 10)
    : false
);

export const isTouchDevice = () => {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
};

export const isIOS = () => (
  !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)
);
