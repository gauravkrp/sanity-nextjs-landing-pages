export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f7055e4b444f531dcbe18e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gk32hska',
                  apiId: 'a9e41ae7-f655-4f7d-9bf2-4260ed2d4cbc'
                },
                {
                  buildHookId: '5f7055e44936ac9f58448d65',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ym8ut4ym',
                  apiId: 'c210f3bd-a270-41bb-92a3-dd1497199b21'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gauravkrp/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ym8ut4ym.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
