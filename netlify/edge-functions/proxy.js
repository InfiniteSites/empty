export default async (request) => {
  const url = new URL(request.url);
  const target = "https://infinitestudys.vercel.app/" + url.pathname + url.search;

  const headers = new Headers(request.headers);
  headers.set("referer", "https://my-presentation.pages.dev/");

  const res = await fetch(target, { method: request.method, headers, body: request.body });

  const newHeaders = new Headers(res.headers);
  newHeaders.set("Access-Control-Allow-Origin", "*");
  newHeaders.delete("x-frame-options");
  newHeaders.set("x-frame-options", "ALLOW");

  return new Response(res.body, { status: res.status, headers: newHeaders });
};
