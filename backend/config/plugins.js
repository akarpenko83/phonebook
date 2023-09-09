module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        Contact: {
          field: 'slug',
          references: 'title',
        },
      },
    },
  },
});
