import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import {
  BookOpen,
  Cpu,
  Info,
  Library,
  Server,
  Settings,
  Shield,
  Terminal,
  Zap,
} from "lucide-react";
import type { MDXComponents } from "mdx/types";

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
    Library,
    ...components,
  };
}
