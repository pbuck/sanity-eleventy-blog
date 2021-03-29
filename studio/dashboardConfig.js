export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60616012b37d2a3da6cd8aed',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-uazo5ty1',
                  apiId: '76204510-f3aa-44b9-bd66-b2a8d1e2ad59'
                },
                {
                  buildHookId: '60616012baa0350be3a69fbc',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-1fz5tg6h',
                  apiId: 'b73b8c6c-12b2-4f8d-a821-cfe35ef3db09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pbuck/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-1fz5tg6h.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
