export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61bb6efed9e13bd3690a2624',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9baugqnn',
                  apiId: 'f5dcb5bf-ef98-4788-9354-c623b3e0a475'
                },
                {
                  buildHookId: '61bb6efefd7af1c54f5dd23c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xca52oi5',
                  apiId: 'a6a8c6f1-ace9-4c7a-9d0c-ff18b9ce5ffb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ollienorman/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xca52oi5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
