import isCnSite from './../../service/isCnSite';

const highlightDetailsFunc = () => {
  if (isCnSite()) {
    return [
      {
        title: "恒岳：匠心传承",
        details: "恒岳致力于打造精雕细琢，匠心品质的未来奢华住宅享受"
      },
      {
        title: "墨尔本",
        details: "景色"
      },
      {
        title: "上海",
        details: "景色"
      },
      {
        title: "墨尔本",
        details: "景色"
      }
    ];
  }

  return [
    {
      title: "Everland: An everlasting legacy",
      details: "At Everland Global, our vision is to create the extraordinary, to exquisitely plan and design the luxury residences of tomorrow."
    },
    {
      title: "Melbourne",
      details: "View"
    },
    {
      title: "Shanghai",
      details: "View"
    },
    {
      title: "Melbourne",
      details: "View"
    }
  ];
};

export default highlightDetailsFunc;
