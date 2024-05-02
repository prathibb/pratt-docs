module.exports = {
  title: 'Pratt Docs',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: {
      '/': getMainSidebar(),
    }
  }
}

function getMainSidebar() {
  return [
    {
      text: 'Introduction',
      children: [
        { text: 'Home Page', link: '/' },
        { text: 'Withdrawals', link: '/withdrawals' },
        { text: 'Page 3', link: '/page3' },
      ]
    },
    {
      text: 'Advanced',
      children: [
        { text: 'API', link: '/api/overview' },
      ]
    }
  ]
}
