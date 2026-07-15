# Next.js 웹 개발 스타터 킷

빠르게 웹 개발을 시작할 수 있는 Next.js 15 기반 스타터 킷입니다. 모든 필수 도구와 설정이 미리 준비되어 있습니다.

## 기술 스택

- **프레임워크**: [Next.js 15](https://nextjs.org/) (App Router)
- **언어**: [TypeScript](https://www.typescriptlang.org/)
- **스타일링**: [TailwindCSS v4](https://tailwindcss.com/)
- **UI 컴포넌트**: [shadcn/ui](https://ui.shadcn.com/)
- **아이콘**: [lucide-react](https://lucide.dev/)
- **테마**: [next-themes](https://github.com/pacocoursey/next-themes)
- **코드 품질**: [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## 시작하기

### 사전 요구 사항

- Node.js 18.17 이상
- npm 또는 yarn, pnpm

### 설치

```bash
# 저장소 클론
git clone <repository-url>
cd claude-starterkit

# 의존성 설치
npm install

# 환경 변수 설정
cp .env.example .env.local
```

### 개발 시작

```bash
# 개발 서버 실행
npm run dev
```

http://localhost:3000 으로 접속하면 개발 서버가 실행됩니다.

## 폴더 구조

```
src/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 홈페이지
│   └── globals.css          # 전역 스타일
├── components/
│   ├── ui/                  # shadcn/ui 컴포넌트
│   ├── theme-provider.tsx   # 테마 제공자
│   └── theme-toggle.tsx     # 테마 토글 버튼
└── lib/
    └── utils.ts             # 유틸리티 함수
```

## 주요 기능

### ✨ 다크모드 지원

next-themes를 사용하여 라이트, 다크, 시스템 테마를 자동으로 지원합니다.

```tsx
import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return <ThemeToggle />;
}
```

### 🎨 UI 컴포넌트

shadcn/ui의 다양한 컴포넌트가 미리 설치되어 있습니다:

- Button, Input, Label
- Card, Dialog, DropdownMenu
- Select, Separator
- Sonner (Toast), Tabs
- Badge, Avatar, Skeleton

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

### 📦 TailwindCSS v4

최신 Tailwind v4는 CSS-first 설정으로 설정 파일 없이 동작합니다.

```tsx
export default function Example() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <p className="text-white text-4xl font-bold">Hello World</p>
    </div>
  );
}
```

## 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# 코드 린트
npm run lint

# 코드 포맷팅 (Prettier)
npm run format
```

## shadcn/ui 컴포넌트 추가

```bash
# 원하는 컴포넌트 추가
npx shadcn@latest add [component-name]

# 예시
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add tooltip
```

모든 사용 가능한 컴포넌트는 [shadcn/ui 문서](https://ui.shadcn.com/docs/components/accordion)를 참조하세요.

## 환경 변수

`.env.local` 파일을 생성하여 환경 변수를 설정할 수 있습니다.

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
DATABASE_URL=postgresql://...
NEXT_AUTH_SECRET=your-secret-key
```

## TypeScript

모든 파일이 TypeScript로 작성되어 있습니다. 타입 안전성을 활용하세요:

```tsx
interface User {
  id: string;
  name: string;
  email: string;
}

export default function UserCard({ user }: { user: User }) {
  return <div>{user.name}</div>;
}
```

## 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

### 다른 플랫폼

1. `npm run build`로 프로덕션 빌드 생성
2. `.next` 폴더를 배포 서버로 업로드
3. Node.js 18.17+ 환경 설정
4. `npm start` 실행

## 개발 팁

### 컴포넌트 생성

```tsx
'use client'; // 필요한 경우 Client Component 선언

import { Button } from '@/components/ui/button';

export function MyComponent() {
  return <Button>클릭</Button>;
}
```

### API 라우트

```tsx
// src/app/api/hello/route.ts
export async function GET() {
  return new Response(JSON.stringify({ message: 'Hello' }));
}
```

### 서버 컴포넌트 활용

Next.js 15는 기본적으로 서버 컴포넌트를 사용합니다. 상태나 이벤트가 필요한 경우만 `'use client'`를 사용하세요.

```tsx
// 서버 컴포넌트 (기본)
export default function Page() {
  const data = fetchData(); // 서버에서만 실행
  return <div>{data}</div>;
}

// 클라이언트 컴포넌트
'use client';

import { useState } from 'react';

export default function Page() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## 문제 해결

### 포트 3000이 이미 사용 중인 경우

```bash
npm run dev -- -p 3001
```

### 캐시 문제

```bash
# .next 디렉토리 삭제
rm -rf .next

# 다시 개발 서버 실행
npm run dev
```

### 의존성 문제

```bash
# 의존성 재설치
rm -rf node_modules package-lock.json
npm install
```

## 라이선스

MIT

## 참고 자료

- [Next.js 문서](https://nextjs.org/docs)
- [TailwindCSS 문서](https://tailwindcss.com/docs)
- [shadcn/ui 문서](https://ui.shadcn.com/)
- [TypeScript 문서](https://www.typescriptlang.org/docs/)

## 기여

버그 리포트와 피드백은 언제나 환영합니다!

---

Happy coding! 🚀
