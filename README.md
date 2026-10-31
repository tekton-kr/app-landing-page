# app-landing-page

T-ARCH 현장 앱 다운로드 페이지 — https://tarch.kr

- 정적 HTML (빌드 없음). Cloudflare Pages가 `main` 브랜치를 그대로 배포합니다.
- APK는 용량 제한(Pages 파일당 25MB) 때문에 이 저장소의 **GitHub Releases**에 올립니다.

## 새 버전 올리기
1. Releases → Draft a new release → 태그 `vX.Y.Z`, 파일 이름 `T-ARCH-X.Y.Z.apk`로 업로드
2. `index.html` 하단 스크립트의 `APP.version`, `APP.apk` 두 값을 바꿉니다.
3. 화면의 크기(MB)와 SHA-256 값도 새 파일 기준으로 바꿉니다.
4. `main`에 커밋하면 자동 배포됩니다.

Google Play 정식 출시 후에는 `Google Play 출시 준비 중` 버튼을 스토어 링크로 바꿉니다.
