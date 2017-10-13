
const scriptService = {
  inject: ({
    src,
    prop,
    timeout = 100,
  }) => (
    new Promise((resolve, reject) => {
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      head.appendChild(script);

      const timer = setInterval(() => {
        if (typeof window[prop] !== 'undefined') {
          clearInterval(timer);
          resolve(window[prop]);
        }
      }, timeout);
    })
  ),
};

export default scriptService;
