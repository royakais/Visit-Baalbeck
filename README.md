# Visit Baalbek

A visitor guide to Baalbek, Lebanon: the Roman temples of Heliopolis, the giant stones,
where to eat and stay, hidden gems, free things to do, and the essentials.

The home page is a scroll story. As you scroll, the six columns of Jupiter rise, the
Trilithon blocks slide into the temple wall, the Stone of the Pregnant Woman lifts out
of the quarry and the Temple of Bacchus draws itself. Every stone is drawn to scale,
next to a 1.7 m person.

## Stack

- React + Vite, React Router
- Framer Motion for the scroll scenes
- Leaflet + OpenStreetMap for the maps (free, no API key)
- Photos from Wikimedia Commons, credited on each photo and on `/credits`

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Edit the content

| What | Where |
| --- | --- |
| Places (name, text, tips, facts, map pin, photo) | `src/data/places.js` |
| Photos and their credits | `src/data/photos.js` |
| The six sections | `src/data/categories.js` |
| Emergency numbers, getting here, before you go | `src/components/EssentialInfo.jsx` |
| Home page scroll scenes | `src/components/scenes/` |

Places with `lat: null` show a Google Maps button but no pin, until their exact location
is confirmed. Places with `approx: true` have a rough pin. Places with `verify: true`
show a "check before you go" note.

## Before launch

- [ ] Confirm the approximate pins and fill in missing coordinates.
- [ ] Check hours, ticket prices and that each hotel and restaurant is open.
- [ ] Open each photo's Commons page and copy its exact author and license into `photos.js`.
- [ ] Add your own photos of restaurants and hotels to `public/photos/`, or ask owners for theirs.

## Deploy

Push to GitHub, import the repo on [Vercel](https://vercel.com) (framework: Vite), then add
your domain under Project → Settings → Domains. `vercel.json` makes every URL load the app.
