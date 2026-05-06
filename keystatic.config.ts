import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'shreyabhadwal/Blog',
  },
  collections: {
    posts: collection({
      label: 'Writing',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.multiselect({
          label: 'Tags',
          options: [
            { label: 'Career', value: 'career' },
            { label: 'Books', value: 'books' },
            { label: 'Culture', value: 'culture' },
            { label: 'Notes', value: 'notes' },
          ],
        }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
    bulletins: collection({
      label: 'Lately',
      slugField: 'title',
      path: 'src/content/lately/*',
      format: { data: 'yaml' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({ label: 'Date' }),
        links: fields.array(
          fields.object({
            title: fields.text({ label: 'Link Title' }),
            url: fields.url({ label: 'URL' }),
            note: fields.text({ label: 'Note', multiline: true }),
          }),
          { label: 'Links', itemLabel: props => props.fields.title.value }
        ),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
      },
    }),
  },
});
