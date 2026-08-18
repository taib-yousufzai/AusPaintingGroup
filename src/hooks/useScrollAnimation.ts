import { MutableRefObject, useEffect, useState } from 'react'

/**
 * useScrollAnimation
 *
 * Manages IntersectionObservers and a MutationObserver to ensure scroll animations
 * and active section tracking work flawlessly, even during Hot Module Replacement (HMR).
 */
export function useScrollAnimation(
  getElementsRef: MutableRefObject<() => (Element | null)[]>,
  navSectionIds: string[],
): string {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    // ── prefers-reduced-motion early-exit ────────────────────────────────────
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('is-visible')
      })
      return
    }

    // Single stable observer for entrance animations
    const entranceObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            entranceObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    const observeElements = () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (!el.classList.contains('is-visible')) {
          entranceObserver.observe(el)
        }
      })
    }

    // Initial observation
    observeElements()

    // ── Mutation Observer for HMR compatibility ──────────────────────────────
    // Watch for DOM changes and observe any newly added animation targets.
    const mutationObserver = new MutationObserver(() => {
      observeElements()
    })

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    })

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
      entranceObserver.disconnect()
      mutationObserver.disconnect()
      activeSectionObserver.disconnect()
    }
  }, [navSectionIds])

  return activeSection
}
