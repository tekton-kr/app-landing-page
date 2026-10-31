// 옛 주소로 들어온 요청을 새 주소 https://tarch.kr 로 영구 이동(301)한다.
// download.tekton.co.kr 과 www.tarch.kr 이 대상이다. 경로와 쿼리는 그대로 둔다.
const OLD_HOSTS = ['download.tekton.co.kr', 'www.tarch.kr'];

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (OLD_HOSTS.includes(url.hostname)) {
    url.protocol = 'https:';
    url.hostname = 'tarch.kr';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
