import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/[lang]/layout.config';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return <HomeLayout {...baseOptions(lang)}>{children}<Footer /></HomeLayout>;
}

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t bg-fd-card py-6 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs mt-2">
            © 2024 Fumadocs. All rights reserved.
          </p>
          <p className="text-xs mt-1">
            备案号: <a 
              href="https://beian.miit.gov.cn/" 
              rel="noreferrer noopener" 
              target="_blank"
              className="font-medium"
            >
              黔ICP备2023001358号-1
            </a>
          </p>
          <p className="text-xs">
            Built with ❤️ by{' '}
            <a
              href="https://fuma-dev.vercel.app"
              rel="noreferrer noopener"
              target="_blank"
              className="font-medium"
            >
              Fuma
            </a>
          </p>
        </div>
        <div>
          <div className="flex flex-row flex-wrap gap-x-4 gap-y-1 mt-2 max-w-[240px]">
            <a href="https://baike.baidu.com/" className="text-xs hover:underline" rel="noreferrer noopener" target="_blank">百度百科</a>
            <a href="https://mzh.moegirl.org.cn/" className="text-xs hover:underline" rel="noreferrer noopener" target="_blank">萌娘百科</a>
            <a href="https://www.bilibili.com/" className="text-xs hover:underline" rel="noreferrer noopener" target="_blank">哔哩哔哩</a>
          </div>
        </div>
      </div>
    </footer>
  );
}