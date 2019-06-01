const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, './dist'),
        routes: ['/', '/newsletter', '/supplier', '/places', '/blog', '/blog/:id', '/impressum', '/datenschutz', '/agb', '/prices'],
        postProcess(renderedRoute) {
          const titles = {
            '/': 'bryng Dein Einkauf zu Dir',
            '/newsletter': 'bryng Newsletter',
            '/supplier': 'bryng den Einkauf zu jemanden',
            '/places': 'Wo befindet sich bryng?',
            '/blog': 'bryng Blog',
            '/blog/:id': 'bryng Blog Artikel',
            '/impressum': 'bryng | Impressum',
            '/datenschutz': 'bryng | Datenschutz',
            '/agb': 'bryng | AGB',
            '/prices': 'bryng Preise',
          };
          const descriptions = {
            '/': 'Kaufe jetzt Lebensmittel per Knopfdruck ganz einfach und extrem schnell. bryng Dein Einkauf zu Dir oder bryng den Einkauf zu jemanden! Du kannst bis zu 10€ damit verdienen, dass Du Lebensmittel zu anderen lieferst! Sei jetzt ein Teil von bryng und zusammen revolutionieren wir den Lebensmittelbereich!',
            '/newsletter': 'Bleibe immer auf dem aktuellen Stand, indem Du den bryng Newsletter abonnierst. Somit erhälst Du coole Angebote von bryng und News zu unserem Unternehmen.',
            '/supplier': 'bryng jetzt Lebensmittel per Knopfdruck für jemanden an die Haustür. Du verdienst damit Geld anderen den Einkauf zu liefern. Verdiene bis zu 10€ mit bryng, indem Du einkaufen gehst! Verändere mit uns die Welt und sei ein Teil von bryng!',
            '/places': 'Sieh Dir die Standorte an, wo sich bryng momentan befindet. Du kannst an diesen Orten einkaufen gehen und dabei Geld verdienen oder Dir auch ganz einfach die Lebensmitteln liefern lassen.',
            '/blog': 'Das ist der offizielle bryng Blog. Hier findest Du alles über Lebensmittel, Einkaufen oder ganz einfach News zu unserem Unternehmen! Bleib immer auf dem aktuellen Stand, indem Du den bryng Newsletter abonnierst.',
            '/blog/:id': 'Das ist der offizielle bryng Blog. Hier findest Du alles über Lebensmittel, Einkaufen oder ganz einfach News zu unserem Unternehmen! Bleib immer auf dem aktuellen Stand, indem Du den bryng Newsletter abonnierst.',
            '/impressum': 'Das offizielle bryng Impressum. Wir wollen Dich nicht langweilen, trotzdem ist es uns wichtig, dass wir mit Dir eine gewisse Transparenz haben.',
            '/datenschutz': 'Das offizielle bryng Impressum. Wir wollen Dich nicht langweilen, trotzdem ist es uns wichtig, dass wir mit Dir eine gewisse Transparenz haben.',
            '/agb': 'Das offizielle bryng Impressum. Wir wollen Dich nicht langweilen, trotzdem ist es uns wichtig, dass wir mit Dir eine gewisse Transparenz haben.',
            '/prices': 'Uns ist es wichtig, dass wir mit Dir eine offene Preispolitik führen und somit kannst Du die Preise offen einsehen bei uns!',
          };

          renderedRoute.route = renderedRoute.originalRoute;

          renderedRoute.html = renderedRoute.html.replace(
            /<title>[^<]*<\/title>/i,
            `<title>${titles[renderedRoute.route]}</title>`,
          ).replace(
            'This description will be replaced',
            descriptions[renderedRoute.route],
          );

          return renderedRoute;
        },
      }),
    ],
  },
};
