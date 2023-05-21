<script>
  import Header from "./components/Header.svelte";
  import ProjectCard from "./components/ProjectCard.svelte";

  let projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Project 2",
      description:
        "Nulla quis tincidunt ex. Vestibulum tincidunt risus vitae feugiat.",
    },
  ];
</script>

<Header title="My Portfolio" />

<main>
  {#each projects as project}
    <ProjectCard project="{project}" />
  {/each}
</main>

<style>
  main {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
