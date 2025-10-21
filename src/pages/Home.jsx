import React, { useEffect, useState } from "react";
import Button from "../components/Button";

const PAGE_SIZE = 10;

function Home() {
  // API integration state and logic
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setError(null);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    setFilteredPosts(
      posts.filter(p =>
        p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
      )
    );
    setPage(1);
  }, [search, posts]);

  const pageCount = Math.ceil(filteredPosts.length / PAGE_SIZE) || 1;
  const paginated = filteredPosts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="text-center py-10">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>

      <div className="flex justify-center gap-4 mb-8">
        <Button variant="primary" onClick={() => alert("Primary clicked!")}>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Delete</Button>
        <Button variant="success">Save</Button>
        <Button variant="warning" disabled>Disabled</Button>
      </div>

      {/* API Integration Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold mb-2">Latest Posts from API</h2>
        <div className="mb-4 flex gap-2 items-center justify-between">
          <input
            type="text"
            className="px-4 py-2 border rounded w-full md:w-80 dark:bg-gray-700 dark:border-gray-600"
            placeholder="Search posts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        {loading && (<div className="text-center text-blue-500 py-8">Loading...</div>)}
        {error && (
          <div className="text-red-500 bg-red-50 p-4 rounded mb-4 text-center dark:bg-red-900/20">Error: {error}</div>
        )}
        {!loading && !error && paginated.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 py-8">No posts found.</div>
        )}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {paginated.map(post => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded shadow p-4 hover:scale-[1.025] transition duration-300"
            >
              <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{post.body}</p>
              <span className="text-xs text-gray-400">Post #{post.id}</span>
            </div>
          ))}
        </div>
        {/* Pagination controls */}
        <div className="flex gap-4 justify-center items-center mt-6">
          <Button
            variant="secondary"
            size="sm"
            disabled={page === 1}
            onClick={() => setPage(p => Math.max(p - 1, 1))}
          >Previous</Button>
          <span className="text-xs">Page {page} of {pageCount}</span>
          <Button
            variant="secondary"
            size="sm"
            disabled={page === pageCount}
            onClick={() => setPage(p => Math.min(p + 1, pageCount))}
          >Next</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
