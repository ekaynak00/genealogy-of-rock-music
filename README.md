# Genealogy of Rock Music

An interactive family tree of 174 rock genres, from 1954 to today.

- See which genres each genre came from and which it gave rise to, drawn as coloured arrows.
- Get the top 10 artists per genre (6–10 still under review), with up to three key songs each and ▶ YouTube / ♫ Spotify links.
- Open a profile for about 1,600 artists and bands: dates, members and instruments, awards, studio albums and songs.
- Search genres, artists and songs.
- On phones the page opens as a decade-by-decade list, with a Map view available.
- It can be installed as an app ("Add to Home Screen") and works offline.

## Files

| File | What it is |
|---|---|
| `index.html` | The page: layout, chart, search, phone view |
| `artists.js` | Top 10 artists and up to 3 songs for each genre, plus direct song links |
| `info.js` | Hand-checked artist profiles |
| `info_auto.js` | Profiles filled in automatically from Wikidata (not all checked by hand) |
| `spotify.js` | Spotify track and album IDs from Wikidata, for direct links |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make the page an installable, offline app |

## Publish on GitHub Pages

1. Create a new public repository on GitHub, for example `rock-genealogy`.
2. Upload every file and the `icons` folder (Add file → Upload files), then commit.
3. Open **Settings → Pages**. Under **Build and deployment**, set Source to
   "Deploy from a branch", branch `main`, folder `/ (root)`, then Save.
4. After a minute or two the site is live at
   `https://<your-username>.github.io/rock-genealogy/`.

## Updating

After you change any file, open `sw.js` and raise `VERSION`
(for example `gorm-v1` → `gorm-v2`). Otherwise phones that installed the app
keep showing the old copy.

## License
All rights reserved. See `LICENSE`.
