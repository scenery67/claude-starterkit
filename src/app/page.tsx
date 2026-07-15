import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { GitBranch, Package, Zap, Code2 } from 'lucide-react';

export default function Home() {
  const techStack = [
    {
      icon: Code2,
      title: 'Next.js 15',
      description: 'App Router 기반의 최신 Next.js 프레임워크',
    },
    {
      icon: Package,
      title: 'TypeScript',
      description: '타입 안전성을 위한 TypeScript 설정 완료',
    },
    {
      icon: Zap,
      title: 'TailwindCSS v4',
      description: 'CSS-first 설정으로 경량 스타일링',
    },
    {
      icon: GitBranch,
      title: 'shadcn/ui',
      description: '재사용 가능한 고품질 컴포넌트 라이브러리',
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 헤더 */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">Next.js 스타터 킷</h1>
            <p className="text-sm text-muted-foreground">
              빠르게 시작하는 웹 개발
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* 히어로 섹션 */}
        <section className="space-y-6 py-12">
          <div className="space-y-2">
            <Badge variant="secondary" className="w-fit">
              스타터 킷
            </Badge>
            <h2 className="text-4xl font-bold tracking-tight">
              웹 개발을 빠르게 시작하세요
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              이 스타터 킷은 Next.js 15, TypeScript, TailwindCSS, shadcn/ui로
              구성되어 있으며, 즉시 개발을 시작할 수 있습니다.
            </p>
          </div>

          <div className="flex gap-3">
            <Button size="lg" className="gap-2">
              <Code2 className="w-4 h-4" />
              개발 시작
            </Button>
            <Button variant="outline" size="lg">
              문서 보기
            </Button>
          </div>
        </section>

        {/* 기술 스택 섹션 */}
        <section className="space-y-8 py-12 border-t border-border">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">
              포함된 기술 스택
            </h3>
            <p className="text-muted-foreground">
              최신 웹 개발 표준과 모범 사례를 따르는 도구들로 구성되었습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <Card key={index} className="border border-border">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <CardTitle className="text-base">
                          {tech.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {tech.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </section>

        {/* 기능 섹션 */}
        <section className="space-y-8 py-12 border-t border-border">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">
              준비된 기능들
            </h3>
            <p className="text-muted-foreground">
              모든 필수 요소가 이미 설정되어 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">다크모드 지원</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  next-themes로 라이트, 다크, 시스템 테마를 자동으로 지원합니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">UI 컴포넌트</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  shadcn/ui의 기본 컴포넌트 12개가 미리 설치되어 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">개발 도구</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  ESLint와 Prettier로 코드 품질을 관리합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 시작하기 섹션 */}
        <section className="space-y-8 py-12 border-t border-border">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight">시작하기</h3>
            <p className="text-muted-foreground">
              다음 단계를 따라 개발을 시작하세요.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Badge className="mt-1">1</Badge>
              </div>
              <div>
                <h4 className="font-semibold">파일 편집</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  <code className="bg-muted px-2 py-1 rounded">
                    src/app/page.tsx
                  </code>
                  를 편집하여 변경 사항을 확인하세요.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Badge className="mt-1">2</Badge>
              </div>
              <div>
                <h4 className="font-semibold">컴포넌트 추가</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  <code className="bg-muted px-2 py-1 rounded">
                    npx shadcn@latest add [component]
                  </code>
                  로 shadcn/ui 컴포넌트를 추가하세요.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Badge className="mt-1">3</Badge>
              </div>
              <div>
                <h4 className="font-semibold">배포 준비</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  프로젝트가 준비되면 Vercel이나 다른 플랫폼에 배포하세요.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-sm text-muted-foreground">
            © 2026 Next.js 웹 개발 스타터 킷. MIT 라이선스.
          </p>
        </div>
      </footer>
    </div>
  );
}
