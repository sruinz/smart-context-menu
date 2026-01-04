# 🔍 Smart Context Menu

텍스트를 선택하면 나타나는 미니 컨텍스트 메뉴 브라우저 확장 프로그램입니다.

텍스트 복사, 검색, 번역을 빠르고 간편하게 사용할 수 있으며, 원하는 검색 엔진을 자유롭게 추가하고 관리할 수 있습니다.

<div align="center">
  <a href="https://chromewebstore.google.com/detail/스마트-컨텍스트-메뉴/lneaoklobohnoncgckmbbjfiajgpbdde"><img src="https://img.shields.io/badge/Chrome%20Web%20Store-설치-4285F4?style=for-the-badge&logo=Google-Chrome&logoColor=white" alt="Chrome Web Store"></a>
  <a href="https://microsoftedge.microsoft.com/addons/detail/스마트-컨텍스트-메뉴/hfmgpfebdgnegicijbpdeifikgcjdkbc"><img src="https://img.shields.io/badge/Edge%20Add--ons-설치-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white" alt="Edge Add-ons"></a>
  <img src="https://img.shields.io/badge/Manifest-V3-green?style=for-the-badge" alt="Manifest V3">
  <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License">
</div>

---

## ✨ 주요 기능

### 📋 빠른 복사
선택한 텍스트를 원클릭으로 클립보드에 복사

### 🔎 다양한 검색 엔진 지원
- Google 검색
- Naver 검색
- Google 번역
- Google 이미지 검색
- YouTube
- Wikipedia
- GitHub
- 직접 추가 가능!

### 🎨 다크모드 UI
눈에 편안한 다크 테마 디자인

### ⚙️ 커스터마이징
- 검색 엔진 자유롭게 추가/삭제
- 원하는 검색 사이트를 직접 등록
- 이모지 아이콘으로 개성있게 꾸미기

### � URL 바로가기 (v1.1.0 NEW!)
URL을 드래그하면 자동으로 감지하여 바로가기 버튼 표시
- `https://example.com` - 프로토콜 포함 URL
- `www.example.com` - www 접두사
- `google.com` - 도메인만
- `bit.ly/xyz` - 단축 URL

### �🚫 스마트 감지
입력 필드(input, textarea)에서는 자동으로 비활성화되어 일반 복사/붙여넣기 방해하지 않음

---

## 📦 설치 방법

### 🏪 공식 스토어에서 설치 (권장)

| 브라우저 | 설치 링크 |
|---------|----------|
| Google Chrome | [Chrome 웹 스토어에서 설치](https://chromewebstore.google.com/detail/스마트-컨텍스트-메뉴/lneaoklobohnoncgckmbbjfiajgpbdde) |
| Microsoft Edge | [Edge Add-ons에서 설치](https://microsoftedge.microsoft.com/addons/detail/스마트-컨텍스트-메뉴/hfmgpfebdgnegicijbpdeifikgcjdkbc) |

---

### 🔧 수동 설치 (개발자용)

#### 1️⃣ 파일 다운로드
```bash
git clone https://github.com/sruinz/smart-context-menu.git
```

또는 [Releases](https://github.com/sruinz/smart-context-menu/releases)에서 최신 버전 다운로드

#### 2️⃣ 브라우저에 설치

#### Microsoft Edge

1. Edge 브라우저를 열고 주소창에 `edge://extensions/` 입력
2. 오른쪽 상단의 **개발자 모드** 토글을 활성화
3. 왼쪽 상단의 **압축해제된 확장 로드** 버튼 클릭
4. 다운로드한 `smart-context-menu` 폴더 선택
5. 설치 완료! 🎉

#### Google Chrome

1. Chrome 브라우저를 열고 주소창에 `chrome://extensions/` 입력
2. 오른쪽 상단의 **개발자 모드** 토글을 활성화
3. 왼쪽 상단의 **압축해제된 확장 프로그램 로드** 버튼 클릭
4. 다운로드한 `smart-context-menu` 폴더 선택
5. 설치 완료! 🎉

---

## 🎯 사용 방법

### 기본 사용법

1. **텍스트 선택**: 웹페이지에서 원하는 텍스트를 드래그하여 선택
2. **메뉴 자동 표시**: 선택한 텍스트 위에 미니 컨텍스트 메뉴가 자동으로 나타남
3. **기능 선택**: 원하는 버튼 클릭
   - 📋 **복사**: 클립보드에 복사
   - � **바로가기**: URL 선택 시 자동 표시, 클릭하면 해당 URL로 이동
   - �🔍 **검색**: 선택한 검색 엔진으로 검색
   - 🌐 **번역**: Google 번역으로 이동

### 검색 엔진 관리

#### 검색 엔진 추가하기

1. 확장 프로그램 아이콘 클릭
2. **프리셋 버튼 사용** (빠른 추가)
   - 🖼️ Google 이미지
   - 📺 YouTube
   - 📖 Wikipedia
   - 💻 GitHub
3. **직접 입력**
   - **이름**: 검색 엔진 이름 (예: "Google")
   - **URL**: 검색 URL (`%s`는 검색어로 자동 대체)
     ```
     예: https://www.google.com/search?q=%s
     ```
   - **아이콘**: 이모지 선택 (예: 🔍)
4. **추가하기** 버튼 클릭

#### 검색 엔진 삭제하기
각 검색 엔진 옆의 **삭제** 버튼을 클릭

---

## 🌐 검색 엔진 URL 예시

자주 사용되는 검색 엔진의 URL 형식입니다. `%s` 부분이 실제 검색어로 대체됩니다.

| 검색 엔진 | URL |
|----------|-----|
| Google | `https://www.google.com/search?q=%s` |
| Naver | `https://search.naver.com/search.naver?query=%s` |
| Daum | `https://search.daum.net/search?q=%s` |
| Google 이미지 | `https://www.google.com/search?tbm=isch&q=%s` |
| Google 번역 | `https://translate.google.com/?sl=auto&tl=ko&text=%s` |
| YouTube | `https://www.youtube.com/results?search_query=%s` |
| Wikipedia (한국어) | `https://ko.wikipedia.org/wiki/%s` |
| GitHub | `https://github.com/search?q=%s` |
| Stack Overflow | `https://stackoverflow.com/search?q=%s` |
| Twitter/X | `https://twitter.com/search?q=%s` |
| Amazon | `https://www.amazon.com/s?k=%s` |
| 쿠팡 | `https://www.coupang.com/np/search?q=%s` |

### 💡 팁: 특수 용도 검색 만들기

**내 블로그 검색**
```
https://mysite.com/search?q=%s
```

**특정 사이트 내 Google 검색**
```
https://www.google.com/search?q=site:example.com+%s
```

---

## 🛠️ 기술 스택

- **Manifest V3**: 최신 Chrome Extension API
- **Vanilla JavaScript**: 의존성 없는 순수 자바스크립트
- **Chrome Storage API**: 검색 엔진 설정 동기화
- **Content Scripts**: 모든 웹페이지에서 동작

---

## 📁 프로젝트 구조

```
smart-context-menu/
├── manifest.json          # 확장 프로그램 설정
├── content.js            # 텍스트 선택 감지 및 메뉴 표시 로직
├── content.css           # 미니 메뉴 스타일 (다크모드)
├── popup.html            # 검색 엔진 관리 UI
├── popup.js              # 검색 엔진 관리 로직
├── background.js         # 백그라운드 서비스 워커
├── icon16.png            # 16x16 아이콘
├── icon48.png            # 48x48 아이콘
├── icon128.png           # 128x128 아이콘
└── README.md             # 이 파일
```

---

## 🎨 커스터마이징

### 메뉴 크기 조정

`content.css` 파일에서 다음 값을 수정하세요:

```css
.menu-button {
  min-width: 28px;    /* 버튼 너비 */
  height: 28px;       /* 버튼 높이 */
  font-size: 14px;    /* 아이콘 크기 */
}
```

### 메뉴 위치 변경

`content.js` 파일에서 위치 로직을 수정하세요:

```javascript
// 기본: 선택 텍스트 위에 표시
let top = y - menuHeight - 10;

// 아래에 표시하려면:
let top = y + 10;
```

### 색상 테마 변경

`content.css`에서 색상을 변경하세요:

```css
.smart-context-menu {
  background: #1e1e1e;    /* 메뉴 배경색 */
  border: 1px solid #3a3a3a;  /* 테두리 색 */
}

.menu-button {
  background: #2a2a2a;    /* 버튼 배경색 */
}

.menu-button:hover {
  background: #3a3a3a;    /* 버튼 호버 색 */
}
```

---

## 🐛 문제 해결

### 메뉴가 나타나지 않을 때

1. **페이지 새로고침**: `F5` 또는 `Ctrl+R`
2. **확장 프로그램 확인**
   - Edge: `edge://extensions/`에서 활성화 상태 확인
   - Chrome: `chrome://extensions/`에서 활성화 상태 확인
3. **권한 확인**: 확장 프로그램이 해당 사이트에서 실행 권한이 있는지 확인
4. **콘솔 확인**: 개발자 도구(`F12`) → Console 탭에서 에러 확인

### 검색이 작동하지 않을 때

- **URL 확인**: `%s`가 포함되어 있는지 확인
- **프로토콜 확인**: URL이 `https://` 또는 `http://`로 시작하는지 확인
- **인코딩 문제**: 특수문자가 포함된 검색어는 자동으로 인코딩됩니다

### 입력창에서 메뉴가 나타날 때

현재 버전에서는 `input`, `textarea`, `contentEditable` 요소에서 자동으로 비활성화됩니다. 
문제가 지속되면 [이슈](https://github.com/sruinz/smart-context-menu/issues)를 등록해주세요.

---

## 🍴 포크 및 커스터마이징

이 프로젝트는 개인 프로젝트로, **Pull Request는 받지 않습니다**.

추가 기능이 필요하거나 수정이 필요한 경우:
1. 이 저장소를 **Fork** 하세요
2. 원하는 대로 수정하여 사용하세요
3. MIT 라이선스에 따라 자유롭게 배포 가능합니다

버그나 제안사항이 있다면 [Issues](https://github.com/sruinz/smart-context-menu/issues)에 남겨주세요. 참고하겠습니다.

---

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

```
MIT License

Copyright (c) 2025 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 💬 문의 및 지원

- 버그 리포트 및 제안: [Issues](https://github.com/sruinz/smart-context-menu/issues)
- **Note**: Pull Request는 받지 않습니다. 필요한 기능이 있다면 Fork 하여 사용해주세요.

---

## ⭐ 유용하셨나요?

이 프로젝트가 도움이 되셨다면 ⭐ Star를 눌러주세요!

---

<div align="center">
  Made with ❤️ by sruinz
</div>
