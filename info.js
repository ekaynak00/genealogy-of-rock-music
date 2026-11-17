/* Artist and band profiles for the ⓘ side panel.
   Keyed by the artist name exactly as it appears in artists.js.
   type: "band" | "solo". Dates as "D Month YYYY". Checked against Wikipedia. */
const INFO = {
  "Pink Floyd": {
    type: "band",
    origin: "London, England",
    formed: "1965",
    ended: "Effectively ended after their last studio album, The Endless River (2014); Gilmour and Mason reunited for one single in 2022",
    active: "1965–1994 · reunions 2005 (Live 8), 2007, 2013–2014, 2022",
    genres: "Progressive rock, psychedelic rock, art rock, space rock, experimental rock",
    labels: "EMI, Columbia (Harvest, Capitol, Sony, Parlophone)",
    summary: "Formed in London by Syd Barrett, Roger Waters, Richard Wright and Nick Mason, Pink Floyd began as the house band of the 1967 London underground. After Barrett left in 1968, David Gilmour took over guitar and Waters became the main lyricist, steering the band into long-form concept albums. Waters left in 1985; Gilmour and Mason carried on under the name after a legal fight.",
    members: [
      { name: "Syd Barrett", role: "Guitar, lead vocals", years: "1965–1968", born: "6 January 1946", died: "7 July 2006", note: "Founder and first leader; wrote most of the debut album" },
      { name: "Roger Waters", role: "Bass, vocals", years: "1965–1985 (+2005)", born: "6 September 1943", note: "Principal lyricist from 1968; conceived The Wall" },
      { name: "Richard Wright", role: "Keyboards, vocals", years: "1965–1981, 1987–1994 (+2005, 2007)", born: "28 July 1943", died: "15 September 2008", note: "Left in 1981; returned as a session player in 1987, then as a member" },
      { name: "Nick Mason", role: "Drums, percussion", years: "1965–present", born: "27 January 1944", note: "Only member on every Pink Floyd album" },
      { name: "David Gilmour", role: "Guitar, vocals", years: "December 1967–present", born: "6 March 1946", note: "Led the band after 1985" },
      { name: "Bob Klose", role: "Guitar", years: "1964–1965", note: "Early line-up, before the Pink Floyd name settled" }
    ],
    achievements: [
      "More than 250 million records sold worldwide, 75 million of them in the US",
      "The Dark Side of the Moon stayed on the US Billboard chart for more than 14 years and has sold over 45 million copies",
      "The Wall held US No. 1 for 15 weeks and has 23 million certified units in the US",
      "Four US No. 1 albums and five UK No. 1 albums",
      "The Endless River (2014) was the most pre-ordered album on Amazon UK at the time"
    ],
    awards: [
      "Rock and Roll Hall of Fame (1996)",
      "UK Music Hall of Fame (2005)",
      "Polar Music Prize (2008)",
      "Grammy Award, Best Rock Instrumental Performance, for \"Marooned\" (1995)",
      "Grammy Hall of Fame: The Dark Side of the Moon and The Wall",
      "Two BAFTAs for the film Pink Floyd – The Wall (Best Original Song, Best Sound)"
    ],
    albums: [
      ["The Piper at the Gates of Dawn", "1967"],
      ["A Saucerful of Secrets", "1968"],
      ["More (soundtrack)", "1969"],
      ["Ummagumma", "1969"],
      ["Atom Heart Mother", "1970", "First UK No. 1"],
      ["Meddle", "1971", "★"],
      ["Obscured by Clouds (soundtrack)", "1972"],
      ["The Dark Side of the Moon", "1973", "★"],
      ["Wish You Were Here", "1975", "★"],
      ["Animals", "1977", "★"],
      ["The Wall", "1979", "★"],
      ["The Final Cut", "1983"],
      ["A Momentary Lapse of Reason", "1987"],
      ["The Division Bell", "1994"],
      ["The Endless River", "2014"]
    ],
    songs: ["Comfortably Numb", "Wish You Were Here", "Another Brick in the Wall, Part 2", "Money", "Time", "Shine On You Crazy Diamond", "Echoes", "Hey You", "Us and Them", "Have a Cigar", "See Emily Play", "Arnold Layne"],
    sources: [
      ["Pink Floyd – Wikipedia", "https://en.wikipedia.org/wiki/Pink_Floyd"],
      ["List of Pink Floyd band members", "https://en.wikipedia.org/wiki/List_of_Pink_Floyd_band_members"],
      ["Pink Floyd discography", "https://en.wikipedia.org/wiki/Pink_Floyd_discography"]
    ],
    checked: "16 November 2026"
  }
};
