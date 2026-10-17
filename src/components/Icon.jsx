// Small line icons, one per category.
const paths = {
  columns: 'M4 7h24M6 4h20l2 3H4zM8 7v16M14 7v16M18 7v16M24 7v16M4 23h24M3 27h26',
  bowl: 'M4 15h24a12 9 0 0 1-24 0zM10 26h12M12 10c0-2 2-2 2-4M17 10c0-2 2-2 2-4',
  key: 'M12 16a6 6 0 1 1 0-.01M18 16h10M24 16v4M28 16v3',
  gem: 'M8 5h16l5 7-13 16L3 12zM3 12h26M12 5l-3 7 7 16 7-16-3-7',
  sun: 'M16 10a6 6 0 1 0 .01 0M16 2v4M16 26v4M2 16h4M26 16h4M6 6l3 3M23 23l3 3M26 6l-3 3M9 23l-3 3',
  cross: 'M12 4h8v8h8v8h-8v8h-8v-8H4v-8h8z',
}

export default function Icon({ name, size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  )
}
