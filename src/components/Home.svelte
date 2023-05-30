<script>
  import Card from "./Card.svelte";
  import { experiences } from "../work.js";
</script>

<h1 class="text-3xl dark:text-white mb-4">Brian Tang</h1>
<p class="text-xl dark:text-white">Full Stack Software Engineer</p>
{#each experiences as experience}
  <Card
    title="{experience.title}"
    description="{experience.content}"
    image="{experience.image}"
    duration="{experience.duration}"
  />
{/each}
