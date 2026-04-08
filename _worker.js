export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // www → apex redirect
    if (url.hostname === 'www.goworld.com.tw') {
      url.hostname = 'goworld.com.tw';
      return Response.redirect(url.toString(), 301);
    }

    // Pass through to Pages for everything else
    return env.ASSETS.fetch(request);
  },
};
