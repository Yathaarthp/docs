module.exports = {
  sidebar: [
    'intro',
    'website/unshared-projects',
    'website/cloud-variables',
    {
      type: 'category',
      label: 'Advanced Settings',
      collapsed: false,
      items: [
        'website/settings/overview',
        'website/settings/custom-fps',
        'website/settings/interpolation',
        'website/settings/high-quality-pen',
        'website/settings/remove-fencing',
        'website/settings/remove-misc-limits',
        'website/settings/infinite-clones',
        'website/settings/warp-timer',
        'website/settings/custom-stage-size',
        'website/settings/disable-compiler'
      ]
    },
    'website/embedding',
    'website/how-to-copy-javascript',
    'website/turbowarp-blocks',
    'website/translate',
    'website/url-parameters',
  ],
  development: [
    {
      type: 'autogenerated',
      dirName: 'development'
    }
  ]
};
