/*
 * NOTE: Supports HTML.
 */

module.exports = {

  /**
   * Used template.
   * @see templates folder
   * @param {Number} app_template
   */
  app_template: 1,

  /**
   * Specify a valid URL address. Used in the Open Graph and PWA.
   * @param {String} app_url - paste the full URL to your page.
   * @example https://your_login.github.io/, https://your_login.github.io/portfolio
   */
  app_url: 'https://FireRipper.github.io/',

  /**
   * Progressive Web Apps (PWA).
   * @param {String} app_icon - displays when you open a site from the desktop
   * @param {String} app_theme - changes the color of the toolbar
   * @param {String} app_background - filling backgrounds when the application from the desktop
   * @see https://developers.google.com/web/progressive-web-apps/
   */
  app_icon: 'static/images/resume.png',
  app_theme: '#485e6c',
  app_background: '#fff',

  /**
   * The Open Graph protocol
   * @see http://ogp.me/
   */
  opg_description: 'Portfolio by Illia Shabeln`yk. Experience, training, and also implemented projects',

  /**
   * Basic information about the user + for meta tags.
   */
  username: 'FireRipper',
  first_name: 'Illia',
  last_name: 'Shabeln`yk',
  gender: 'Male',
  email: 'shabelnyk.ilya@gmail.com',
  profession: 'Web developer',
  avatar_img: 'static/images/profile/avatar.jpg',
  background_img: 'static/images/profile/background.jpg',
  resume: '',

  /**
   * Notify users that you are open to suggestions.
   * @param {Boolean} looking_job
   */
  looking_job: true,

  /**
   * Display link to Github repository.
   * @param {Boolean} display_repository
   * @see package.json - homepage attribute
   */
  display_repository: true,

  /**
   * Display different sections on the site.
   * @param {Boolean}
   */
  display_projects: true,
  display_education: true,
  display_experience: false,

  /**
   * A little information about yourself.
   */
  about_me:
    '<p>Hi, my name is Illia Shabeln`yk, I\'m from Ukraine. Now I studying in KNUTE university ' +
    'and improving my knowledge on their projects in Github.I like in photoshop to combine elements' +
    'from different unpleasant pictures into one picture,' +
    'but I don’t like to draw.I like to create beautiful, but at the same time simple designs for websites.'+
    'You also can view source code this site on Github repository.</p> ' +
    '<p>Like: traveling, sport, music, art, daydream.</p>',


  /**
   * Programming languages, technologies.
   */
  skills: [
    'HTML', 'CSS', 'Javascript', 'GIT', 'JQuery', 'C#','Photoshop'
  ],

  /**
   * Knowledge of foreign languages (the skill is also used in css, for color).
   */
  languages: [
    { name: 'Ukrainian', skill: 'Native' },
    { name: 'Russian', skill: 'Native' },
    { name: 'English', skill: 'Elementary' }
  ],

  /**
   * name - Name of the site.
   * href - Full url address to your profile.
   * icon - Font-awesome 4.7.
   * @see https://fontawesome.com/v4.7.0/icons/
   */
  social_media: [
    { name: 'Github', href: 'https://github.com/FireRipper', icon: 'github' },
    { name: 'VK', href: 'https://vk.com/ishabelnik', icon: 'vk' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/illia-shabeln-yk-0b3baa172/', icon: 'linkedin' },
  ],

  /**
   * For the date the plugin is used: humanizeDuration. Used only during build, does not fall into js.
   * dates.end - null (Present)
   * @example Date(year, month, day)
   * @see https://github.com/EvanHahn/HumanizeDuration.js
   */
  experience: [{
    name: 'Example name1',
    image: 'static/images/experience/e1.jpg',
    position: 'Senior Graphic Designer',
    description: 'Development of internal projects',
    dates: { start: new Date(2013, 9), end: null }
  }, {
    name: 'Example name2',
    image: 'static/images/experience/e2.jpg',
    position: 'Graphic Designer',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
      'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' +
      'printer took a galley of type and scrambled it to make a type specimen book.',
    dates: { start: new Date(2003, 2), end: new Date(2013, 7) }
  }],

  /**
   * School, college, university.
   */
  education: [{
    name: 'Kyiv national university of trade and economics (KNUTE)',
    degree: 'Bachelor\'s degree',
    specialization: 'Computer Software Engineering',
    href: 'https://www.knteu.kiev.ua/',
    image: 'static/images/education/KNUTE.png',
    year: { start: 2016, end: 2019 }
  }],

  /**
   * List of implemented projects with filters.
   * projects.items.href - null (link is not created)
   */
  projects: {
    filters: [
      { name: 'Open Source', value: 'open-source' },
      { name: 'HTML / CSS / JS', value: 'web' },
      { name: 'JQuery', value: 'jquery' },
      { name: 'C#', value: 'csharp' },
      { name: 'Photoshop', value: 'photoshop' }
    ],
    items: [{
      name: 'Qiwi Pizza',
      href: 'https://github.com/FireRipper/Qiwi-pizza-with-BS4',
      image: 'static/images/projects/p1.png',
      filters: ['open-source', 'web', 'photoshop','jquery'],
      description: 'Site for ordering pizza, burgers and salads.'
    }, {
      name: 'Emulator parking',
      href: 'https://github.com/FireRipper/Emulator-parking',
      image: 'static/images/projects/p2.jpg',
      filters: ['open-source', 'csharp'],
      description: 'Program simulator parking, car registration,'+
      ' time and date of entry and exit. Simulation of accidents at the parking lot.'
    }]
  }

}
