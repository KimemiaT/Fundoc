const { description } = require('../../package');
module.exports = {
  logo: "https://systechafrica.com/wp-content/uploads/2021/02/outline-fundmaster.png",
  title: 'FundMaster',
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
     {
      text: 'Modules',
      items: [
        { text: 'Getting Started', link: '/introduction/' },
        { text: 'Admin panel', link: '/administration/' },
        {text: 'Accounts', link: '/accounts/' },
        {text: 'Scheme Setup', link: '/schemesetup/' },
        {text: 'Member Register', link:'/members/'},
        {text:'Pensioner Register', link:'/pensioners/'},
        {text:'Investment', link: '/investments/'},
        {text:'Workflow', link:'/workflow/'},
        {text:'Reports', link:'/reports/'},
      ]
    },


      {
        text: 'MSS',
        link: 'https://github.com/systechafrica/systechafrica.github.io',
      },
      {
        text: ' Video Tutorial',
        link: 'https://www.youtube.com/'
      },
    ],
    sidebar:require('./sidebar.js'),
  },
};
  

