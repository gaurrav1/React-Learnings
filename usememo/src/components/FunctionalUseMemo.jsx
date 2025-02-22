import { useState, useMemo } from "react";

const LIST = Array(1_000_000)
  .fill()
  .map((_, i) => i + 1);

function FunctionalUseMemo() {
  const [query, setQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const filteredList = useMemo(() => {
    return LIST.filter(item => {
      item.toString().includes(query);
    });
  }, [query]);

  // useMemo is used to memoize the result of a function - Use CPU throatling for more clearification.
  // const filteredList = LIST.filter(item => {
  //   item.toString().includes(query);
  // });

  console.log(filteredList.length);

  return (
    <div style={ {
      background: darkMode ? '#333' : '#fff',
      color: darkMode ? '#fff' : '#333'
    } }>

      <label>
        Query: <input value={query} onChange={ e => setQuery(e.target.value)} />
      </label>

      <br />

      <label>
        Dark mode: <input type="checkbox" checked={darkMode} onChange={ e => setDarkMode(e.target.checked)} />
      </label>
    </div>
  )
}

export default FunctionalUseMemo