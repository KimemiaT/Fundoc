const { description } = require('../../package');
module.exports = {
  logo: "https://systechafrica.com/wp-content/uploads/2021/02/outline-fundmaster.png",
  title: 'FundMaster Documentation',
  description: description,
  themeConfig: {
    logo: 'https://systechafrica.com/wp-content/uploads/2021/02/outline-fundmaster.png',
    searchPlaceholder: 'Search...',
    search:true,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    nav: [
      { text: 'Introduction', link: '/introduction/' },
      { text: 'Administration', link: '/administration/' },
      {
        text: 'MSS',
        link: 'https://github.com/systechafrica/systechafrica.github.io',
      },
    ],
    sidebar: require('./sidebar.js'),
  },
};
  

