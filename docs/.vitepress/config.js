import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search"

const flexSearchIndexOptions = {
  // We can put multiple flexsearch options here
  // https://github.com/nextapps-de/flexsearch#options
};

const options = {
  ...flexSearchIndexOptions,
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "Search docs",
  allow: [],
  ignore: [],
};

export default defineConfig({
  head: [['link', { rel: 'icon', href: '/assets/images/cropped-FS-logo-png-v3-1.png' }]],
  vite: { 
    plugins: [SearchPlugin(options)],
  },
  title: "Fluent Support Developers",
  description: "Here you will find detailed documentation, handy code snippets and full code examples.",
  themeConfig: {
    logo: '/assets/images/cropped-FS-logo-png-v3-1.png',
    nav: [
      { text: 'Get Started', link: '/get-started/' },
      {
        text: 'Architecture',
        items: [
            {
                text: 'Database Schema',
                link: '/database/',
            },
        ],
    },
      {
        text: 'Developer Hooks',
        items: [
          { text: 'Action Hook', link: '/hooks/actions/', },
          { text: 'Filter Hook', link: '/hooks/filters/' },
          { text: 'Helper Classes', link: '/helpers/' },
          { text: 'Utility Functions', link: '/utility-functions/' },
        ],
      },
      {
        text: 'Modules',
        items: [
          { text: 'Custom Widget ', link: '/modules/custom_widget' }, 
        ],
      },
      {
        text: 'Rest API',
        link: 'https://fluentsupport.com/rest-api/#introduction',
      },
      {
        text: 'Blog',
        link: 'https://fluentsupport.com/blog/',
      },

    
    ],

    sidebar: {
      '/hooks/actions/': [
        { text: 'Action Hook', link: '/hooks/actions/', },
        { text: 'Filter Hook', link: '/hooks/filters/' },
      ],
      '/hooks/filters/': [
        { text: 'Action Hook', link: '/hooks/actions/', },
        { text: 'Filter Hook', link: '/hooks/filters/' },
      ],
      '/helpers/': [
        { text: 'Helper Classes', link: '/helpers/'},
        { text: 'Utility Functions', link: '/utility-functions/' }
      ],
      '/utility-functions/': [
        { text: 'Helper Classes', link: '/helpers/'},
        { text: 'Utility Functions', link: '/utility-functions/' }
      ],
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/FluentSupportWP' },
    ]
  }
  
})
