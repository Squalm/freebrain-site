import styles from './page.module.css'

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

/*
function Links({ urls }: { urls: any[] }) {

  let links = [<p>No. Links: {urls.length}</p>]

  for (let i = 0; i < urls.length; i++) {
    let chunked = urls[i].link.split('.'); // #0091AD #EA7317
    let end_chunk = '';
    for (let i = 2; i < chunked.length; i++) {
      end_chunk += '.' + chunked[i]
    }
    links.push(<div>
      <span><span style="color: #0091AD">
      {urls[i].published.split('T')[0]} 
      </span>: <a href="{links_arr[i].link.link}" target="_blank" rel="noopener noreferrer"> 
      {chunked[0].split('//')[1]}.<span style="color: #EA7317"> 
      {chunked[1]}</span>{end_chunk}</a></span><br />
      </div>);
    if (i >= 100) {
      links += 'Cut off after 100 links.'
      break
    }
  }

  return (<div id="links">{links_formatted}</div>)
};
*/

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

/* -- LOGIC -- */


