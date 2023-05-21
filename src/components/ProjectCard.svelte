<script>
  export let project;
</script>

<article>
  <h2>{project.title}</h2>
  <p>{project.description}</p>
</article>

<style>
  article {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 20px;
  }

  h2 {
    margin: 0;
    font-size: 20px;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
  }
</style>
