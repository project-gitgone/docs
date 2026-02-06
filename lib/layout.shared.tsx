
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-bold">
          <Image 
            src="/assets/logo.svg" 
            alt="GitGone Logo" 
            width={24} 
            height={24} 
            className="w-6 h-6"
          />
          <span>GitGone</span>
        </div>
      ),
      transparentMode: 'top',
    },
    githubUrl: 'https://github.com/project-gitgone',
    links: [],
  };
}
