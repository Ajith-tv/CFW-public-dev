// Help Center content registry — the single source of truth for the /support hub,
// the category pages, article breadcrumbs, and the sibling-article sidebar.
// To publish a new article: add an entry here, then create the matching
// app/support/<slug>/page.tsx.

export type CategoryId = 'getting-started' | 'your-account' | 'safety-privacy'

export interface Category {
  id: CategoryId
  title: string
  blurb: string
}

export interface Article {
  slug: string
  title: string
  /** One-line summary shown on cards and in search results. */
  summary: string
  category: CategoryId
  /** ISO date (YYYY-MM-DD) — rendered via formatDate() from lib/site. */
  lastUpdated: string
  /** Extra terms to match in the hub search box. */
  keywords?: string[]
  /** Surface on the hub's "Popular articles" strip. */
  popular?: boolean
}

const UPDATED = '2026-06-22'

export const categories: Category[] = [
  {
    id: 'getting-started',
    title: 'Getting started',
    blurb: 'Set up your profile and learn your way around the app.',
  },
  {
    id: 'your-account',
    title: 'Your account',
    blurb: 'Manage your profile, settings, Premium, and account.',
  },
  {
    id: 'safety-privacy',
    title: 'Safety & privacy',
    blurb: 'Verification, reporting, our guidelines, and your data.',
  },
]

export const articles: Article[] = [
  // ── Getting started ────────────────────────────────────────────────────────
  {
    slug: 'how-coffee-after-work-works',
    title: 'How it works',
    summary:
      'From signing up with your work email to your first conversation — a quick tour of the app.',
    category: 'getting-started',
    lastUpdated: UPDATED,
    keywords: ['guide', 'overview', 'tour', 'how to use', 'basics'],
    popular: true,
  },
  {
    slug: 'why-a-work-email',
    title: 'Why you need a work email to sign up',
    summary:
      'We verify a corporate email so the community stays made up of real working professionals.',
    category: 'getting-started',
    lastUpdated: UPDATED,
    keywords: ['corporate email', 'company', 'domain', 'gmail', 'sign up', 'register'],
  },
  {
    slug: 'creating-your-profile',
    title: 'Creating your profile',
    summary:
      'Add photos and details, answer a few prompts, and complete your profile to get better matches.',
    category: 'getting-started',
    lastUpdated: UPDATED,
    keywords: ['onboarding', 'set up', 'photos', 'bio', 'interests', 'lifestyle', 'completion'],
    popular: true,
  },
  {
    slug: 'finding-people',
    title: 'Finding people: Spark & Discover',
    summary:
      'Like or pass on people in Spark, and browse more profiles in Discover.',
    category: 'getting-started',
    lastUpdated: UPDATED,
    keywords: ['spark', 'discover', 'swipe', 'like', 'pass', 'browse', 'nearby'],
  },
  {
    slug: 'how-matches-work',
    title: 'How matches and likes work',
    summary:
      'When two people like each other it’s a match — and you can see who already liked you.',
    category: 'getting-started',
    lastUpdated: UPDATED,
    keywords: ['match', 'likes', 'who liked you', 'mutual'],
    popular: true,
  },
  {
    slug: 'messaging-your-matches',
    title: 'Messaging your matches',
    summary:
      'Chat, send GIFs, reveal photos when you’re both ready, read receipts, and unmatching.',
    category: 'getting-started',
    lastUpdated: UPDATED,
    keywords: ['chat', 'message', 'gif', 'photo reveal', 'exclusive chat', 'read receipts', 'unmatch'],
  },
  {
    slug: 'planning-a-coffee-date',
    title: 'Planning a coffee date',
    summary:
      'Use Date Places for ideas on where to meet, and meet safely when you take it offline.',
    category: 'getting-started',
    lastUpdated: UPDATED,
    keywords: ['date places', 'meet', 'venue', 'coffee', 'in person'],
  },

  // ── Your account ───────────────────────────────────────────────────────────
  {
    slug: 'edit-your-profile',
    title: 'Editing your profile',
    summary:
      'Update your photos, bio, and details any time from the Profile tab.',
    category: 'your-account',
    lastUpdated: UPDATED,
    keywords: ['edit', 'change photos', 'update bio', 'profile'],
  },
  {
    slug: 'discovery-preferences',
    title: 'Setting your Discovery Preferences',
    summary:
      'Choose who you see — age range, distance, and what you’re looking for.',
    category: 'your-account',
    lastUpdated: UPDATED,
    keywords: ['filters', 'preferences', 'age', 'distance', 'looking for', 'who i see'],
  },
  {
    slug: 'privacy-and-visibility',
    title: 'Privacy & visibility controls',
    summary:
      'Show or hide yourself on Discovery, control online status and read receipts, and manage hidden profiles.',
    category: 'your-account',
    lastUpdated: UPDATED,
    keywords: ['show on discovery', 'online status', 'read receipts', 'hidden profiles', 'block'],
  },
  {
    slug: 'notifications',
    title: 'Managing notifications',
    summary:
      'Turn push notifications on or off for matches, messages, and likes.',
    category: 'your-account',
    lastUpdated: UPDATED,
    keywords: ['push', 'alerts', 'notifications', 'turn off'],
  },
  {
    slug: 'change-password',
    title: 'Changing your password',
    summary:
      'Update your password from settings, or reset it if you’ve forgotten it.',
    category: 'your-account',
    lastUpdated: UPDATED,
    keywords: ['password', 'reset', 'forgot password', 'security', 'login'],
  },
  {
    slug: 'coffee-after-work-premium',
    title: 'Coffee After Work Premium',
    summary:
      'What Premium includes — Unlimited Likes, See Who Liked You, and More Notes.',
    category: 'your-account',
    lastUpdated: UPDATED,
    keywords: ['premium', 'subscription', 'upgrade', 'unlimited likes', 'pay', 'plan'],
    popular: true,
  },
  {
    slug: 'deactivate-vs-delete',
    title: 'Deactivate vs. delete your account',
    summary:
      'Taking a break? Deactivating hides your profile and is reversible. Deleting is permanent.',
    category: 'your-account',
    lastUpdated: UPDATED,
    keywords: ['pause', 'hide profile', 'take a break', 'reactivate', 'temporary'],
  },
  {
    slug: 'delete-account',
    title: 'Delete your account',
    summary:
      'How to permanently delete your account, and exactly what data is removed.',
    category: 'your-account',
    lastUpdated: UPDATED,
    keywords: ['remove account', 'erase data', 'close account', 'delete data', 'gdpr'],
    popular: true,
  },

  // ── Safety & privacy ───────────────────────────────────────────────────────
  {
    slug: 'photo-verification',
    title: 'Photo verification explained',
    summary:
      'What the verification selfie is, why we ask for it, and why it’s never shown to anyone.',
    category: 'safety-privacy',
    lastUpdated: UPDATED,
    keywords: ['selfie', 'verify', 'biometric', 'face', 'real person', 'fake profiles'],
    popular: true,
  },
  {
    slug: 'staying-safe',
    title: 'Staying safe & reporting',
    summary:
      'How to report, block, or unmatch someone, plus tips for dating safely.',
    category: 'safety-privacy',
    lastUpdated: UPDATED,
    keywords: ['report', 'block', 'unmatch', 'harassment', 'safety', 'scam'],
  },
  {
    slug: 'community-guidelines',
    title: 'Community guidelines',
    summary:
      'The behaviour we expect from everyone, and what gets people removed.',
    category: 'safety-privacy',
    lastUpdated: UPDATED,
    keywords: ['rules', 'values', 'ban', 'conduct', 'standards'],
  },
  {
    slug: 'your-privacy-and-data',
    title: 'Your privacy and your data',
    summary:
      'What we collect, how we use it, and the choices and rights you have.',
    category: 'safety-privacy',
    lastUpdated: UPDATED,
    keywords: ['privacy', 'data', 'gdpr', 'dpdp', 'rights', 'location', 'consent'],
  },
  {
    slug: 'request-your-data',
    title: 'Requesting a copy of your data',
    summary:
      'How to ask for a copy of the data we hold about you — including your matches and messages.',
    category: 'safety-privacy',
    lastUpdated: UPDATED,
    keywords: [
      'data request',
      'access my data',
      'download data',
      'export',
      'copy of data',
      'chat history',
      'messages',
      'legal',
      'gdpr',
      'dpdp',
    ],
  },
  {
    slug: 'delete-your-data',
    title: 'Deleting your data',
    summary:
      'How your data is removed when you delete your account, and how to have all of it erased.',
    category: 'safety-privacy',
    lastUpdated: UPDATED,
    keywords: [
      'delete data',
      'erase',
      'erasure',
      'right to be forgotten',
      'remove my data',
      '30 days',
      'retention',
      'gdpr',
      'dpdp',
    ],
  },
]

/** Public URL for an article. */
export function articleHref(slug: string): string {
  return `/support/${slug}`
}

/** Public URL for a category page. */
export function categoryHref(id: CategoryId): string {
  return `/support/category/${id}`
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getCategory(id: CategoryId): Category | undefined {
  return categories.find((c) => c.id === id)
}

export function articlesByCategory(id: CategoryId): Article[] {
  return articles.filter((a) => a.category === id)
}

export function popularArticles(count = 5): Article[] {
  return articles.filter((a) => a.popular).slice(0, count)
}
