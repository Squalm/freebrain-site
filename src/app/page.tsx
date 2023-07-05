import './page.module.css'

var prev_words = [] as string[];
var latest = "Loading Words...";
var relatives = [] as any[];

/* -- FORMATTING -- */

// Metadata
const Meta = () => {
  return (
    <div id="metadata">
      <meta content="Interbrain Data Viewier" property="og:title" />
      <meta content="#EA7317" data-react-helmet="true" name="theme-color" />
      <meta content="https://www.interbrain.co.uk" property="og:url" />
      <meta content="Admire trends in news and find articles about bizarre intersections of topics!" property="og:description" />
    </div>
  )
};

// Header etc.
const Top = () => {
  return (
    <div className="top">
      <header>
        {/*<a href="./stats/index.html">Stats/About</a> ---- */}
        <a href="https://github.com/Squalm/freebrain-site" target="_blank" rel="noopener noreferrer">Github</a> -- 
        <a href="https://github.com/Squalm/freebrain-site/issues" target="_blank" rel="noopener noreferrer">Bugs</a> -- 
        <a href="https://github.com/Squalm/freebrain-rssreader" target="_blank" rel="noopener noreferrer">RSS aggregator</a>
      </header>

      <p id="explanation">
        Search for words by typing them in the keyword fields. 
        Click any of the listed words to see their connections.</p>
      <h1>Interbrain data viewer</h1>
    </div>
  )
};

/*
// Show the latest words and all previous ones.
function Words({l = [""], final = ""}) {
  const out = [];

  for (let i = 0; i < l.length; i++) {
    out.push(<span key={i}>{l[i]}</span>)
  }

  return (
    <div>
      <p>
        {out}
      </p>
      <h1>{final}</h1>
    </div>
  )
};

// One related word with count
function Related({ name = "", count = -1 }) {
  <div className="word_box">
    <span className="word">{name}</span>
    <span className="word count">{count}</span>
  </div>
}

// List of related words with counts
function Relations({ l }: { l: any[] }) {
  return (
    <p id="links">
      {l}
    </p>
  )
};

export default function Home() {
  return (
    <main>
      <Meta />
      <Top />
      <Words 
        l={prev_words}
        final={latest}
      />
      <Relations 
        l={relatives}
      />
    </main>
  )
};

*/

export default function Home() {
  return (
    <main>
      <Meta />
      <Top />
    </main>
  )
}

/* -- LOGIC -- */

