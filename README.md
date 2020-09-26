This repo represents the static website of math.dev. This readme file will contain notes on the development and code of this website.


### Setup Notes

**HTTPS**: Setting up HTTPS was a bit tricky. (1) Go into CloudFlare and adjust the SSL settings to be "Full" so that it encrypts end-to-end, using a self signed certificate on the server. (2) CNAME record in github should reference https, i.e. = https://math.dev . (3) The javascript & css references in html should refer math.dev (i.e. https://math.dev/styles.css) and not the github direct link (ashok-khanna.github.io/styles.css). If we do not do this, then moden browsers will block this content as it is being served over HTTP and not HTTPS, the latter which we require.

**Web Dev**: We have to go into CloudFlare and turn on web development mode to prevent cloudflare from caching and serving old files. At the same time, we need to force our browsers to "hard refresh". I do this in Chrome by going into developer tools, disabling cache then right clicking the refresh button and choosing the relevant hard refresh option.

**Custom Domains**: [Add Notes Here]


### Folder Structure

**Index.Html**: This is the primary landing page for the website. It can be used as a template for all other pages as it includes all the relevant scripts, stylesheets and page structure (we have a constant structure across the website for now).

**Styles.Css**: This is the stylesheet for the whole website.

**MathJax Folder**: We load MathJax locally for our project, given its importance. However, this can be replaced with CDN if we want.

**Fonts Folder**: This is where we save all the fonts we want to use in the website (locally loaded).

**Helper Folder**: This contains some helper files, plus some files that I felt good to keep a copy of, but haven't used in the website yet (e.g. Eric Meyer's CSS reset sheet & jQuery source code). The 'about.html', 'quote.html' and 'footer.html' files in this folder are populated on every page via jQuery, but we only need to edit them once here.







