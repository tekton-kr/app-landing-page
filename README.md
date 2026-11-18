# app-landing-page

T-ARCH 현장 앱 다운로드 페이지 — https://download.tarch.kr

- 정적 HTML (빌드 없음). Cloudflare Pages가 `main` 브랜치를 그대로 배포합니다.
- APK는 용량 제한(Pages 파일당 25MB) 때문에 이 저장소의 **GitHub Releases**에 올립니다.

## 새 버전 올리기
1. tarch-app에서 CPU별로 나눠 빌드합니다.
   `flutter build apk --release --no-pub --split-per-abi --target-platform android-arm,android-arm64 --dart-define=TARCH_API=prod`
2. Releases → Draft a new release → 태그 `vX.Y.Z`, 파일 두 개를 올립니다.
   - `app-arm64-v8a-release.apk` → `T-ARCH-X.Y.Z-arm64.apk` (기본 버튼)
   - `app-armeabi-v7a-release.apk` → `T-ARCH-X.Y.Z-32bit.apk` (오래된 휴대폰용 링크)
3. `index.html` 하단 스크립트의 `APP.version`, `APP.date`, `APP.apk`, `APP.apk32`를 바꿉니다.
4. 화면의 크기(MB, 64비트·32비트)와 SHA-256(64비트 파일), JSON-LD의 `softwareVersion`·`dateModified`·`fileSize`·`downloadUrl`, '이번 버전에서 달라진 점'을 새 파일 기준으로 바꿉니다.
5. `main`에 커밋하면 자동 배포됩니다.

### 주의
- 1.1.2부터 CPU별 파일이라 versionCode가 `1000×CPU번호 + 빌드번호`입니다 (64비트 2005, 32비트 1005). 다음 버전도 반드시 `--split-per-abi`로 빌드하세요. 하나로 합친 APK(versionCode 6 등)를 올리면 이미 설치한 휴대폰에서 "낮은 버전"이라 업데이트되지 않습니다.
- 이미지 파일을 바꿀 때는 이름을 새로 지으세요. Cloudflare가 이미지를 7일 동안 캐시합니다.

Google Play 정식 출시(2026-11) 후 기본 버튼은 Google Play 스토어 링크이고, APK는 Play 스토어를 쓸 수 없는 휴대폰용 보조 방법입니다.
## 디자인 (2026-11-18)
앱 모노 디자인(콘셉트 시안 v5)과 같은 규칙: 흰색·회색·검정만, 빨강은 작은 위험 점에만, 그림자 없음, 모서리 12px·선 1px. 큰 숫자는 D-DIN(`fonts/`, SIL OFL). 앱 화면은 `img/screens/m01~m09-*.webp`(390×844 @2x), 3D 건물은 `img/building-3d-m.webp`.
