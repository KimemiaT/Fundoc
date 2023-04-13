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
        {text:'Pensioner Register', link:'/pensioners/'},
        {text: 'Scheme Setup', link: '/schemesetup/' },     
        {text:'Investment', link: '/investments/'},
        {text: 'Member Register', link:'/members/'},
        {text:'Workflow', link:'/workflow/'},
        {text:'Reports', link:'/reports/'},
      ]
    },


      {
        text: 'MSS',
        link: 'https://www.systechafrica.com',
      },
      {
        text: ' Video Tutorial',
        link: 'https://www.systechafrica.com'
      },
    ],
    sidebar:require('./sidebar.js'),
  },
};
  

