<script>
  import urlSlug from "url-slug";
  import { pop } from "svelte-spa-router";
  import { Button } from "flowbite-svelte";
  import { experiences } from "../work.js";
  import NotFound from "../components/NotFound.svelte";
  export let params = {};
  let article;
  for (const experience of experiences) {
    if (params.title === urlSlug(experience.title)) {
      article = experience;
    }
  }
</script>

{#if article}
  <div class="p-4">
    <h1 class="text-3xl dark:text-white mb-4">{article.title}</h1>
    <h2 class="text-2xl dark:text-white mb-4">
      {article.subtitle} ({article.duration ?? "Present"})
    </h2>
    <img src="{article.image}" alt="img" class="mx-auto m-4" />
    {#each article.content.split("\n") as paragraph}
      <p class="text-lg dark:text-white">{paragraph}</p>
      <br />
    {/each}
    <Button class="my-4" on:click="{pop}">Back</Button>
  </div>
{:else}
  <NotFound />
{/if}
