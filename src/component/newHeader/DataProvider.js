import isCnSite from './../service/isCnSite';

const headerTextListFunc = () => {
  if (isCnSite()) {
    return {
      title: {
        href: '/',
        title: '菜单',
        text: '菜单',
      },
      about: {
        href: '/about',
        title: '关于我们',
        text: '关于我们',
      },
      contact: {
        href: '/contact',
        title: '联系我们',
        text: '联系我们',
      },
      language: {
        href: '/',
        title: 'English',
        text: 'English',
      }
    };
  }
  return {
    title: {
      href: '/',
      title: 'Menu',
      text: 'Menu',
    },
    about: {
      href: '/about',
      title: 'About Us',
      text: 'About Us',
    },
    contact: {
      href: '/contact',
      title: 'Contact Us',
      text: 'Contact Us',
    },
    language: {
      href: '/',
      title: '中文',
      text: '中文',
    }
  };
};

export default headerTextListFunc;
