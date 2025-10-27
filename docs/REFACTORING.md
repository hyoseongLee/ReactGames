# 코드 리팩토링 문서

## 📅 리팩토링 일시
2025년 10월 28일

## 🎯 목적
프로젝트의 폴더 구조를 체계적으로 재구성하여 코드의 가독성과 유지보수성 향상

## 📂 폴더 구조

```
src/
├── assets/        # 정적 리소스
├── components/    # 재사용 컴포넌트
├── constants/     # 상수 및 설정
├── screens/       # 페이지 컴포넌트
│   └── games/     # 게임 화면
├── store/         # 전역 상태 (zustand)
├── styles/        # CSS 중앙 관리
├── utils/         # 유틸리티 함수
└── App.jsx        # 라우팅 및 레이아웃
```

## 🔄 주요 변경 사항

### 1. 폴더 구조
- `data/` → `constants/`
- `pages/` → `screens/`
- `router/` 폴더 제거 (App.jsx로 통합)
- `styles/`, `utils/` 폴더 추가

### 2. 파일 관리
- React 컴포넌트: `.js` → `.jsx`
- 파일명 통일: `RPSgame` → `RPSGame`
- 불필요한 파일 제거: Layout, Footer, 테스트 파일

### 3. Logger 시스템

```javascript
// utils/logger.js
const isDevelopment = process.env.NODE_ENV === 'development';

class Logger {
  createLogger(namespace) {
    return {
      log: (...args) => {
        if (isDevelopment) console.log(`[${namespace}]`, ...args);
      }
    };
  }
}
```

**사용**
```javascript
import { logger } from "../utils";
const gameLogger = logger.createLogger('RockPaperScissors');
gameLogger.log("result:", result);
```

### 4. CSS 변수 시스템

```css
/* index.css */
:root {
  --color-primary: #7e57c2;
  --color-bg-dark: #23232a;
  --color-bg-light: #f5f7fa;
  --color-text-light: #ffffff;
  --color-text-dark: #2c3e50;
  --font-primary: 'Pretendard', -apple-system, sans-serif;
}

body {
  font-family: var(--font-primary);
  min-height: 100vh;
}
```

**적용**
```css
/* Before */
background-color: #23232a;

/* After */
background-color: var(--color-bg-dark);
```

### 5. 중앙 Export 관리

각 폴더에 `index.js` 생성:

```javascript
// components/index.js
export { default as GameCard } from './GameCard.jsx';
export { default as GameList } from './GameList.jsx';

// assets/index.js
export { default as Paper } from './images/games/Paper.jpg';
export { default as Rock } from './images/games/Rock.jpg';
```

## ✅ 최종 변경 사항

### 코드 구조
- ✅ 폴더 재구성 및 불필요한 폴더 제거
- ✅ 파일 확장자 통일 (.jsx)
- ✅ 파일명 및 함수명 통일

### 경로 관리
- ✅ 모든 폴더에 index.js 추가하여 중앙 export 관리
- ✅ 상대 경로로 import 정리

### Logger 시스템
- ✅ logger 구축 (console.log 제거)
- ✅ 개발 환경에서만 로그 출력

### Assets 관리
- ✅ 이미지 중앙 관리
- ✅ assets/index.js에서 export

### CSS 최적화
- ✅ CSS 변수 시스템 도입
- ✅ 글로벌 스타일 통합
- ✅ 중복 스타일 제거
- ✅ 모든 CSS 파일에 변수 적용