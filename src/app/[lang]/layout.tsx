import { RootProvider } from 'fumadocs-ui/provider';
import type { Translations } from 'fumadocs-ui/i18n';

const cn: Partial<Translations> = {
  search: '搜索',
  searchNoResult: '搜索无结果',
  toc: '目录',
  tocNoHeadings: '目录无标题',
  lastUpdate: '最后更新',
  chooseLanguage: '选择语言',
  nextPage: '下一页',
  previousPage: '上一页',
  chooseTheme: '选择主题',
  editOnGithub: '在GitHub上编辑'
};

// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
{
  name: 'English',
  locale: 'en',
},
{
  name: '简体中文',
  locale: 'cn',
},
];

export default async function RootLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const lang = (await params).lang;

  return (
    <html suppressHydrationWarning lang={lang}>
      <body>
        <RootProvider
          i18n={{
            locale: lang,
            // available languages
            locales,
            // translations for UI
            translations: { cn }[lang],
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}