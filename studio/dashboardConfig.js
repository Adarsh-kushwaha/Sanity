export default {
  widgets: [
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
                  buildHookId: '610808ebade53db6873d6f26',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-qz3z8bjf',
                  apiId: 'c3515485-5687-477a-b4c7-a66ee7665d75'
                },
                {
                  buildHookId: '610808ebfa1df81b0c8a8280',
                  title: 'Blog Website',
                  name: 'portfolio-web-m6keu2ns',
                  apiId: '9bbad7f7-079f-4781-a625-49f6de328b79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Adarsh-kushwaha/Portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://portfolio-web-m6keu2ns.netlify.app', category: 'apps'}
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
