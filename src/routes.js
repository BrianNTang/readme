import Home from "./components/Home.svelte";
import Article from "./components/Article.svelte";
import NotFound from "./components/NotFound.svelte";


export const routes = {
  // Exact path
  "/": Home,
  // Exact path + parameter
  "/article/:title": Article,
  // Wildcard
  "*": NotFound
};