import { useEffect } from 'react'

/** Sets the browser tab title and meta description for each page (helps Google and link previews). */
export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.name = 'description'
        document.head.appendChild(tag)
      }
      tag.content = description
    }
  }, [title, description])
}
