import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Boxes,
  History,
  KeyRound,
  Layers,
  Lock,
  MemoryStick,
  RefreshCw,
  RotateCcw,
  ScrollText,
  Server,
  ShieldCheck,
  UserCog,
  UserMinus,
  UserPlus,
  Users,
  Workflow,
} from "lucide-react";

export type Feature = { icon: LucideIcon; title: string; text: string };

export const FEATURES: Feature[] = [
  {
    icon: Lock,
    title: "The server never sees your secrets",
    text: "Encrypted on your machine, decrypted on your teammates'. In between, only encrypted data.",
  },
  {
    icon: Layers,
    title: "Environments",
    text: "development, staging, production: each with its own key, production protected.",
  },
  {
    icon: Users,
    title: "Team and access",
    text: "One role per person, down to the environment, and custom roles when you need them.",
  },
  {
    icon: History,
    title: "History and rollback",
    text: "Every push is a new version. Restore any previous one in one command.",
  },
  {
    icon: ScrollText,
    title: "Audit log",
    text: "Who pulled, pushed or shared what, and when.",
  },
  {
    icon: KeyRound,
    title: "CI tokens",
    text: "One token per pipeline, limited to one environment, revocable at any time.",
  },
  {
    icon: Boxes,
    title: "In-memory injection",
    text: "Your app gets its variables at startup, with no .env file on disk.",
  },
  {
    icon: ShieldCheck,
    title: "Verified key sharing",
    text: "Fingerprints are checked the first time a key is shared with someone.",
  },
  {
    icon: Server,
    title: "Self-hosted or Cloud",
    text: "The same open source server, on your infrastructure or hosted for you.",
  },
];

export type Guide = {
  icon: LucideIcon;
  title: string;
  text: string;
  href: string;
};

export const GUIDES: Guide[] = [
  {
    icon: BookOpen,
    title: "Set up a project",
    text: "Sign in, link a folder and get your first secrets.",
    href: "/docs/cli/guides/first-project",
  },
  {
    icon: UserPlus,
    title: "Onboard a teammate",
    text: "Give a role, then share the key.",
    href: "/docs/cli/guides/onboard-teammate",
  },
  {
    icon: UserMinus,
    title: "Remove a teammate",
    text: "Revoke access and rotate the keys they knew.",
    href: "/docs/cli/guides/remove-teammate",
  },
  {
    icon: ShieldCheck,
    title: "Protect production",
    text: "Decide who can read and push production.",
    href: "/docs/cli/guides/protect-production",
  },
  {
    icon: UserCog,
    title: "Create a custom role",
    text: "Exactly the permissions a person needs.",
    href: "/docs/cli/guides/custom-roles",
  },
  {
    icon: RotateCcw,
    title: "Restore a version",
    text: "Find the version you need and roll back.",
    href: "/docs/cli/guides/restore-version",
  },
  {
    icon: MemoryStick,
    title: "Run without a .env",
    text: "Secrets at startup, never written to disk.",
    href: "/docs/cli/guides/run-without-env",
  },
  {
    icon: RefreshCw,
    title: "Rotate keys",
    text: "Replace a key and re-encrypt its history.",
    href: "/docs/cli/guides/rotate-keys",
  },
  {
    icon: Workflow,
    title: "Use GitGone in CI",
    text: "GitHub Actions and GitLab CI with a token.",
    href: "/docs/cli/guides/ci",
  },
];
