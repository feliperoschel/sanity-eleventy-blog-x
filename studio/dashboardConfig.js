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
                  buildHookId: '6039948879b14e1c509717cd',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-x-studio',
                  apiId: 'f3b3d172-d96a-40aa-8550-24b4fef09c90'
                },
                {
                  buildHookId: '603994882658111c2194678b',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-x',
                  apiId: '91621cbd-0926-4606-9d16-fe2c5b3637fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/feliperoschel/sanity-eleventy-blog-x',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-x.netlify.app', category: 'apps'}
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
