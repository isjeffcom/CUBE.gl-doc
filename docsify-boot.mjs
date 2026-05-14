import { OtherSites } from './otherSites.js'

function escapeAttr (s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
}

function escapeHtml (s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function friendLinksFooterPlugin (hook) {
  const linksHtml = OtherSites.map(
    (site) =>
      `<a href="${escapeAttr(site.href)}" title="${escapeAttr(site.title)}" target="_blank" rel="noopener noreferrer">${escapeHtml(site.name)}</a>`
  ).join('')

  const footerHTML =
    '<div class="footer-links">' +
    '<h4>Friends</h4>' +
    '<div class="links-list">' +
    linksHtml +
    '</div></div>'

  hook.afterEach(function (html) {
    return html + footerHTML
  })
}

window.$docsify = {
  name: '',
  repo: '',
  loadSidebar: true,
  coverpage: true,
  plugins: [friendLinksFooterPlugin]
}

const script = document.createElement('script')
script.src = '//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js'
document.body.appendChild(script)
