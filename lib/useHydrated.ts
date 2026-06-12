'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * False during SSR and the hydration render, true immediately after.
 * Lets scroll-driven styles attach only on the client so the server
 * HTML and the hydration render always match.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
