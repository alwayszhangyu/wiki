import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center px-4 py-16 bg-gradient-to-b from-fd-background to-fd-muted-background">
    <div className="max-w-3xl space-y-8">
      <h1 className="text-5xl font-extrabold tracking-tight text-fd-foreground sm:text-6xl">
        欢迎来到我的笔记库
      </h1>
      <p className="text-xl text-fd-muted-foreground">
        这里记录我游玩、观看的游戏、动漫、视觉小说等相关记录。
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/docs"
          className="px-8 py-4 text-lg font-semibold bg-fd-primary text-fd-primary-foreground rounded-lg hover:bg-fd-primary/90 transition-colors shadow-lg"
        >
          查看笔记
        </Link>
        <Link
          href="/about"
          className="px-8 py-4 text-lg font-semibold bg-fd-background text-fd-foreground border border-fd-border rounded-lg hover:bg-fd-accent transition-colors shadow-lg"
        >
          关于本站
        </Link>
      </div>
    </div>
  </main>
  );
}
