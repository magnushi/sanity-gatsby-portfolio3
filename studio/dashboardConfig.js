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
                  buildHookId: '5ce1c83e31d3f9b1c37a9342',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio3-studio-2xbaoxph',
                  apiId: 'e9569dd8-d1cf-48fe-b90b-6666b5006c1d'
                },
                {
                  buildHookId: '5ce1c83ef1dea5d77a0c8e4a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio3-web-bdzvttsn',
                  apiId: '71faf857-daa2-48b6-a6d4-06dfa6e06e1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-portfolio3',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio3-web-bdzvttsn.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
