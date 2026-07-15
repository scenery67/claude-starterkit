# ✅ Next.js 웹 개발 스타터 킷 - 설치 완료

**설치 완료 날짜**: 2026-07-16  
**버전**: v1.0.0

## 📦 설치된 기술 스택

### 핵심 라이브러리
- ✅ **Next.js 16.2.10** - React 프레임워크 (App Router)
- ✅ **React 19.2.4** - UI 라이브러리
- ✅ **TypeScript 5** - 타입 안전성
- ✅ **TailwindCSS v4** - CSS-first 스타일링 (설정 파일 없음)

### UI & 컴포넌트
- ✅ **shadcn/ui** - 12개 기본 컴포넌트
  - Button, Input, Label, Card
  - Dialog, Dropdown Menu, Select, Separator
  - Sonner (Toast), Tabs, Badge, Avatar, Skeleton
- ✅ **lucide-react** - 고품질 아이콘 (1,000+개)
- ✅ **class-variance-authority** - CSS 클래스 조합
- ✅ **clsx/tailwind-merge** - 유틸리티 함수

### 테마 & 다크모드
- ✅ **next-themes 0.4.6** - 테마 관리 (라이트/다크/시스템)
- ✅ **ThemeProvider 컴포넌트** - 자동 구성됨
- ✅ **ThemeToggle 컴포넌트** - UI 토글 버튼

### 개발 도구
- ✅ **ESLint 9** - 코드 린팅
- ✅ **Prettier** - 자동 포맷팅
- ✅ **prettier-plugin-tailwindcss** - TailwindCSS 클래스 정렬
- ✅ **TypeScript** - 타입 체킹

## 📁 프로젝트 구조

```
claude-starterkit/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # 루트 레이아웃 (테마 포함)
│   │   ├── page.tsx             # 홈페이지 (예시)
│   │   ├── globals.css          # Tailwind CSS v4 설정
│   │   └── favicon.ico
│   ├── components/
│   │   ├── theme-provider.tsx   # next-themes 래퍼
│   │   ├── theme-toggle.tsx     # 다크모드 토글 버튼
│   │   └── ui/                  # shadcn/ui 컴포넌트 (12개)
│   └── lib/
│       └── utils.ts             # cn() 헬퍼
├── 📋 설정 파일
│   ├── package.json
│   ├── tsconfig.json            # @/* → ./src/*
│   ├── next.config.ts
│   ├── components.json          # shadcn 설정
│   ├── .prettierrc.json         # Prettier 설정
│   ├── .prettierignore
│   ├── .env.example             # 환경 변수 템플릿
│   ├── eslint.config.mjs
│   └── postcss.config.mjs
├── 📚 문서
│   ├── README.md                # 프로젝트 가이드 (한국어)
│   └── CLAUDE.md                # 개발자 가이드
```

## 🚀 빠른 시작

### 1단계: 프로젝트 설정
```bash
# 이미 설치됨 - 의존성 확인
npm install

# 환경 변수 설정
cp .env.example .env.local
```

### 2단계: 개발 서버 실행
```bash
npm run dev
```
http://localhost:3000 으로 접속

### 3단계: 코드 편집
- `src/app/page.tsx` - 홈페이지 수정
- `src/components/` - 새 컴포넌트 추가
- `src/app/globals.css` - 전역 스타일

## 📋 사용 가능한 명령어

```bash
npm run dev      # 개발 서버 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm start        # 프로덕션 서버 실행
npm run lint     # ESLint 코드 검사
npm run format   # Prettier 코드 포맷팅
```

## 🎨 주요 기능

### ✨ 다크모드 지원
```tsx
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return <ThemeToggle />;
}
```

### 🧩 shadcn/ui 컴포넌트 사용
```tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>제목</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>클릭</Button>
      </CardContent>
    </Card>
  );
}
```

### 🎯 아이콘 사용
```tsx
import { Heart, Star, Settings } from 'lucide-react';

export default function Icons() {
  return <Heart className="w-6 h-6" />;
}
```

### 📦 새 컴포넌트 추가
```bash
# shadcn/ui 컴포넌트 추가
npx shadcn@latest add [component-name]

# 예: form, tooltip, data-table 등
npx shadcn@latest add form
```

## ⚙️ 설정 가이드

### TypeScript 경로 별칭
- `@/*` → `./src/*` (tsconfig.json, components.json 모두 설정됨)

### Prettier 설정
- 들여쓰기: 2칸
- 인용부호: 싱글 쿼트 (')
- TailwindCSS 클래스 자동 정렬
- 설정 파일: `.prettierrc.json`

### 환경 변수
- `.env.example` 복사하여 `.env.local` 생성
- 로컬 개발에서만 `.env.local` 사용 (git 무시됨)

## 🔧 배포

### Vercel 배포 (권장)
```bash
npm i -g vercel
vercel
```

### 다른 호스팅 서비스
1. `npm run build` 실행
2. `.next` 폴더와 public 폴더 배포
3. Node.js 18.17+ 필수
4. `npm start` 실행

## ⚠️ 주의사항

### Windows 한글 경로 문제
프로젝트가 한글 경로에 있으면 빌드 시 Turbopack 오류 발생 가능:
```
start byte index 13 is not a char boundary; it is inside '서'
```

**해결책**: 프로젝트를 영문 경로로 이동하세요.
```
좋음: C:\Users\username\projects\nextjs-starter
나쁨: C:\Users\사용자\문서\claude-starterkit
```

## 📖 학습 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 문서](https://react.dev)
- [TailwindCSS 가이드](https://tailwindcss.com/docs)
- [shadcn/ui 컴포넌트](https://ui.shadcn.com/)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)

## ✅ 설치 검증 체크리스트

- ✅ Next.js 15 (App Router) 설치
- ✅ TypeScript 설정 완료
- ✅ TailwindCSS v4 설정 완료
- ✅ shadcn/ui 초기화 및 12개 컴포넌트 설치
- ✅ next-themes 다크모드 지원
- ✅ ThemeProvider 및 ThemeToggle 컴포넌트 생성
- ✅ ESLint + Prettier 설정
- ✅ 프로젝트별 CLAUDE.md 설정
- ✅ README.md 작성 (한국어)
- ✅ .env.example 템플릿 작성
- ✅ 홈페이지 예시 구현

## 🎉 완성!

이제 바로 개발을 시작할 수 있습니다!

```bash
npm run dev
```

Happy coding! 🚀

---

**스타터 킷 생성**: Claude AI  
**생성 날짜**: 2026-07-16  
**라이선스**: MIT
