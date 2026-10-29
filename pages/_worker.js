const ORIGIN = 'https://everknowledge-consulting.renobang.workers.dev';
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = new URL(url.pathname + url.search, ORIGIN);
    const upstream = await fetch(new Request(target, request), { redirect: 'manual' });
    const headers = new Headers(upstream.headers);
    const location = headers.get('location');
    if (location) {
      const destination = new URL(location, ORIGIN);
      if (destination.origin === ORIGIN) {
        destination.protocol = url.protocol;
        destination.host = url.host;
        headers.set('location', destination.href);
      }
    }
    return new Response(upstream.body, {status: upstream.status, statusText: upstream.statusText, headers});
  }
};
