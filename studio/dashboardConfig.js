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
                  buildHookId: '5fc7bdd6404c1aa5f4af35a1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-u16khrbf',
                  apiId: 'c2eb0ad5-e919-4748-9b18-3e66f8331984'
                },
                {
                  buildHookId: '5fc7bdd6f6603fbcef84647e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-32dc16ih',
                  apiId: 'ad94d219-be30-4178-89ef-cc6cc5d8057b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JudeTejada/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-32dc16ih.netlify.app', category: 'apps'}
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
