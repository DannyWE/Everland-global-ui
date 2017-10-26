import isCnSite from './../service/isCnSite';

const headerTextListFunc = () => {
    if (isCnSite()) {
      return {
        title: '菜单',
        aboutUs: '关于我们',
        contactUs: '联系我们',
        language: 'English'
      };
    }
    return {
      title: 'Menu',
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      language: '中文'
    };
  }
;

export default headerTextListFunc;
