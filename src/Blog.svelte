<script>
  import { query } from "svelte-apollo";
  import { GET_BLOGS } from './queries.js'
  
  const blogs = query(GET_BLOGS);
</script>

<header>
  <h2>Findings, thoughts and some considerations</h2>
</header>
<h3>blogs</h3>
  {#if $blogs.loading}
    Loading...
  {:else if $blogs.error}
    Error: {$blogs.error.message}
  {:else}
    {#each $blogs.data.blogs as blog}
    <ul>
        {blog.intro}
    </ul>
    {/each}
  {/if}

 
  