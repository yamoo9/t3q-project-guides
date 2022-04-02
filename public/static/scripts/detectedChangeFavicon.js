var config = {
  favicon: {
    path: '/static/favicon',
    element: document.getElementById('favicon-theme'),
  },
  darkScheme: '(prefers-color-scheme: dark)',
  supportOSDarkMode: function () {
    return !!(window.matchMedia && window.matchMedia(this.darkScheme));
  },
};

if (config.supportOSDarkMode()) {
  window.matchMedia(config.darkScheme).addEventListener('change', (e) => {
    var faviconConfig = config.favicon;
    var faviconElement = faviconConfig.element;
    var faviconPath = faviconConfig.path;
    faviconElement.setAttribute(
      'href',
      faviconPath + '/favicon-' + (e.matches ? 'dark' : 'light') + '.svg'
    );
  });
}
