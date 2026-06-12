// Central place to edit brand details used across the site.
// Update these values, then they propagate to every page.
export const site = {
  name: 'Coffee After Work',
  tagline: 'Meaningful connections for working professionals.',
  // Legal / contact
  legalEntity: 'Coffee After Work',
  contactEmail: 'support@coffeeafterwork.com',
  privacyEmail: 'support@coffeeafterwork.com',
  // Dates shown on legal pages (YYYY-MM-DD -> displayed nicely)
  termsLastUpdated: '2026-06-01',
  privacyLastUpdated: '2026-06-09',
  // Minimum age to use the service
  minimumAge: 21,
} as const

export function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
