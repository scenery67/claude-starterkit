# Next.js 웹 개발 스타터 킷 - 개발 가이드

이 프로젝트는 Next.js 15 + TypeScript + TailwindCSS + shadcn/ui 기반의 웹 개발 스타터 킷입니다.

## 프로젝트 개요

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4 (CSS-first)
- **UI Components**: shadcn/ui (12개 컴포넌트 미리 설치)
- **Icons**: lucide-react
- **Theme**: next-themes (라이트/다크/시스템)
- **Code Quality**: ESLint + Prettier

## 폴더 구조

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # 루트 레이아웃 (테마 제공자 포함)
│   ├── page.tsx        # 홈페이지
│   └── globals.css     # 전역 스타일 (Tailwind CSS v4)
├── components/
│   ├── ui/             # shadcn/ui 컴포넌트들
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── lib/
    └── utils.ts        # cn() 헬퍼 함수
```

## 개발 시작

```bash
npm run dev
```

## 주요 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm start` - 프로덕션 서버 실행
- `npm run lint` - 코드 린트
- `npm run format` - 코드 포맷팅 (Prettier)

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

## 경로 설정

- TypeScript 별칭: `@/*` → `./src/*`
- 환경 변수: `.env.example` 참고
