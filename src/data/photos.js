// Photos from Wikimedia Commons, loaded straight from Wikimedia's servers.
// Every Commons file is freely licensed, but each license asks for credit, which the
// site shows under the photo and on the Credits page.
//
// Before launch: open each `page` link and copy the exact author and license
// (e.g. "CC BY-SA 4.0") into `author` and `license`.
//
// To use your own photo instead, put it in /public/photos and set `src: '/photos/name.jpg'`.

const commons = (file) => ({
  file,
  page: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file.replaceAll(' ', '_'))}`,
  src: (width = 1600) =>
    `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=${width}`,
})

export const photos = {
  jupiter: {
    ...commons('Lebanon, Baalbek, Roman columns with Corinthian capitals ornamenting the Temple of Jupiter.jpg'),
    alt: 'The six standing columns of the Temple of Jupiter with their carved capitals',
    author: 'Wikimedia Commons contributor',
    license: 'see file page',
  },
  bacchus: {
    ...commons('Baalbek, Temple of Bacchus (6842814197).jpg'),
    alt: 'The Temple of Bacchus with its columns and walls still standing',
    author: 'Wikimedia Commons contributor',
    license: 'see file page',
  },
  bacchus2: {
    ...commons('Lebanon, Baalbek, Temple of Bacchus.jpg'),
    alt: 'The Temple of Bacchus seen inside the Baalbek temple complex',
    author: 'Wikimedia Commons contributor',
    license: 'see file page',
  },
  hibla: {
    ...commons('The Stone of the Pregnant Woman, one of the largest stone building blocks ever carved by human hands, it is 20.76 m long, 4 m wide, 4.32 m high and weighs an estimated 1,000 tons, Baalbek - 49565699163.jpg'),
    alt: 'The Stone of the Pregnant Woman lying at an angle in the Roman quarry',
    author: 'Wikimedia Commons contributor',
    license: 'see file page',
  },
  venus: {
    ...commons('Temple of Venus, Baalbek 14114.JPG'),
    alt: 'The small round Temple of Venus with its curved walls',
    author: 'Wikimedia Commons contributor',
    license: 'see file page',
  },
  mosque: {
    ...commons("Colonnade of the ancient mosque, Baalbek, Holy Land, (i.e., Ba'labakk, Lebanon)-LCCN2002724961.jpg"),
    alt: 'Historical photograph of the colonnade of the Umayyad Mosque in Baalbek',
    author: 'Library of Congress, Matson Photo Service',
    license: 'see file page',
  },
  palmyra: {
    ...commons('Hotel Palmyra (Baalbek) - look at the temples of Baalbek.jpg'),
    alt: 'View of the Baalbek temples from the Palmyra Hotel',
    author: 'Wikimedia Commons contributor',
    license: 'see file page',
  },
}

export const photoFor = (key) => (key ? photos[key] ?? null : null)
