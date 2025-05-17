import '@/app/global.css';
import { i18n } from '@/lib/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Logo"
          >
            <circle cx={12} cy={12} r={12} fill="currentColor" />
          </svg>
          wiki
        </>
      ),
    },
    links: [
      {
        text: '动漫',
        url: '/docs/anime',
        active: 'nested-url',
      },
      {
        text: '漫画',
        url: '/docs/comic',
        active: 'nested-url',
      },
      {
        text: '游戏',
        url: '/docs/game',
        active: 'nested-url',
      },
      {
        text: '视觉小说',
        url: '/docs/galgame',
        active: 'nested-url',
      },
    ],
  };
}
