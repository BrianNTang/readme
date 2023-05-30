<script>
  import Router from "svelte-spa-router";
  import { routes } from "./routes.js";
  import { DarkMode } from "flowbite-svelte";
  let data;
</script>

<DarkMode />
<div class="p-8 overflow-hidden bg-gray-50 dark:bg-gray-900">
  <Router {routes} />

  {#if data}
    <p>Data:</p>
    <ul>
      {#each Object.entries(data) as [key, value]}
        <li>{key}: {value}</li>
      {/each}
    </ul>
  {/if}
</div>

<footer class="rounded-lg shadow m-4">
  <div
    class="w-full p-4 md:flex md:items-center md:justify-between static bottom-0"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2023 Brian Tang</span
    >
    <ul
      class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <li>
        <a
          href="https://www.linkedin.com/in/linkBrianTang"
          class="mr-4 hover:underline md:mr-6"
          >LinkedIn</a
        >
      </li>
      <li>
        <a
          href="https://www.github.com/BrianNTang"
          class="mr-4 hover:underline md:mr-6"
          >GitHub</a
        >
      </li>
      <li>
        <a
          href="mailto:briannhtang+ghpage@gmail.com"
          class="mr-4 hover:underline md:mr-6"
          >Email</a
        >
      </li>
    </ul>
  </div>
</footer>