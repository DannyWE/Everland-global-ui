import isCnSite from './../service/isCnSite';

const contactInfoFunc = () => {
    if (isCnSite()) {
      return {
        subHeading: '联系我们',
        company: 'Everland Global',
        location: '墨尔本'
      };
    }
    return {
      subHeading: 'Contact US',
      company: 'Everland Global',
      location: 'Melbourne'
    };
  }
;

export default contactInfoFunc;
