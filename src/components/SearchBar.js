import useFetch from "../hooks/useFetch";
import EventIndex from '../containers/EventIndex';
import EventCard from "./EventCard"

// const SearchBar = ({ searchQuery, setSearchQuery }) => (
//     <form action="/" method="get">
//         <label htmlFor="header-search">
//             <span className="visually-hidden"></span>
//         </label>
//         <input
//             value={searchQuery}
//             onInput={e => setSearchQuery(e.target.value)}
//             type="text"
//             id="header-search"
//             placeholder="Search an artist"
//             name="s"
//         />
//         <button type="submit">Search</button>
//     </form>
// );

export default function SearchBar() {
    const { data, setData } = useFetch();
    return (
      <main>

<form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            value={data.slug}
            // onInput={e => setData(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search an artist"
            name="s"
            onChange={(e) => setData({ ...data, slug: e.target.value })}
            />
        />
        <button type="submit">Search</button>
    </form>
    <br />
      {data.results.length > 0 ? <EventCard card={data.results[0]} /> : null}
    </main>

       


    );
  }

