import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { Home, Terminal, Server } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.getPageTree()} 
      {...baseOptions()}
      sidebar={{
        defaultOpenLevel: 0,
        tabs: [
          {
            title: 'Overview',
            icon: <Home className="h-5 w-5 text-primary" />,
            url: '/docs',
          },
          {
            title: 'CLI',
            icon: <Terminal className="h-5 w-5 text-primary" />,
            url: '/docs/cli',
          },
          {
            title: 'Server',
            icon: <Server className="h-5 w-5 text-primary" />,
            url: '/docs/server',
          },
        ],
      }}
    >
      {children}
    </DocsLayout>
  );
}
