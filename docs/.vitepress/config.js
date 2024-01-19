import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search";

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
  vite: { plugins: [SearchPlugin(options)] },
  title: "Fluent Support Developers",
  description: "Here you will find detailed documentation, handy code snippets and full code examples.",
  themeConfig: {
    logo: '/assets/images/cropped-FS-logo-png-v3-1.png',
    nav: [
      // { text: 'Home', link: '/' },
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
          { text: 'Functions', link: '/hooks/functions/' },
        ],
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
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://' },
    ]
  }
})
