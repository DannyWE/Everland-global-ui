import isCnSite from './../../service/isCnSite';

const highlightDetailsFunc = () => {
  if (isCnSite()) {
    return [
      {
        title: "墨尔本",
        details: "景色"
      },
      {
        title: "墨尔本",
        details: "夜景"
      },
      {
        title: "Sydney",
        details: "View"
      },
      {
        title: "Shanghai",
        details: "View"
      }
    ];
  }

  return [
    {
      title: "Melbourne",
      details: "Day view"
    },
    {
      title: "Melbourne",
      details: "Night view"
    },
    {
      title: "Sydney",
      details: "View"
    },
    {
      title: "Shanghai",
      details: "View"
    }
  ];
};

export default highlightDetailsFunc;
