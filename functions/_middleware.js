// 옛 주소로 들어온 요청을 새 주소 https://download.tarch.kr 로 영구 이동(301)한다.
// 대상: download.tekton.co.kr. 경로와 쿼리는 그대로 둔다.
const OLD_HOSTS = ['download.tekton.co.kr'];

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (OLD_HOSTS.includes(url.hostname)) {
    url.protocol = 'https:';
    url.hostname = 'download.tarch.kr';
    url.port = '';
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
