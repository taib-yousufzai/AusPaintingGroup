import { MutableRefObject, useEffect, useState } from 'react'

/**
 * useScrollAnimation
 *
 * Manages two IntersectionObservers:
 *  1. Entrance animation observer — adds `is-visible` to each element once it
 *     crosses a 0.15 threshold, then unobserves it (fires once per element).
 *     Respects `prefers-reduced-motion`: when the media query matches, every
 *     element is marked visible immediately without setting up the observer.
 *
 *  2. Active-section observer — tracks which nav section is currently in the
 *     viewport's "reading zone" (rootMargin: '-40% 0px -55% 0px') and returns
 *     its id as `activeSection`. Returns an empty string when nothing intersects.
 *
 * @param getElementsRef  A stable ref whose .current is a function that returns
 *                        the live list of elements to animate. Called inside
 *                        useEffect so all callback refs are already populated.
 * @param navSectionIds   IDs of sections to track for active-nav highlighting.
 * @returns activeSection — the id of the currently visible nav section, or ''.
 */
export function useScrollAnimation(
  getElementsRef: MutableRefObject<() => (Element | null)[]>,
  navSectionIds: string[],
): string {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const elements = getElementsRef.current()
    let entranceObserver: IntersectionObserver | null = null

    // ── prefers-reduced-motion early-exit ────────────────────────────────────
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((el) => {
        if (el) el.classList.add('is-visible')
      })
    } else {
      // ── Entrance animation observer ──────────────────────────────────────
      entranceObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              entranceObserver!.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15 },
      )

      elements.forEach((el) => {
        if (el) entranceObserver!.observe(el)
      })
    }

    // ── Active-section observer ──────────────────────────────────────────────
    const intersectingIds = new Set<string>()

    const activeSectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingIds.add(entry.target.id)
          } else {
            intersectingIds.delete(entry.target.id)
          }
        })

        if (intersectingIds.size > 0) {
          const ids = Array.from(intersectingIds)
          setActiveSection(ids[ids.length - 1])
        } else {
          setActiveSection('')
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    navSectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) activeSectionObserver.observe(el)
    })

    return () => {
      entranceObserver?.disconnect()
      activeSectionObserver.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return activeSection
}
