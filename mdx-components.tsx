import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Callout } from 'fumadocs-ui/components/callout';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { File, Folder, Files } from 'fumadocs-ui/components/files';
import { Server, Terminal, Shield, Zap, Info, Settings, Cpu, BookOpen } from 'lucide-react';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Steps,
    Step,
    Tab,
    Tabs,
    Callout,
    File,
    Folder,
    Files,
    Accordion,
    Accordions,
    Card,
    Cards,
    // Icons
    Server,
    Terminal,
    Shield,
    Zap,
    Info,
    Settings,
    Cpu,
    BookOpen,
    ...components,
  };
}
