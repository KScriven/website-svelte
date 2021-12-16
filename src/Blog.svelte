<script>
  import { slide } from "svelte/transition"
  import { query } from "svelte-apollo"
  import { GET_BLOGS } from './queries.js'
  
  const blogItems = query(GET_BLOGS)
  let isOpen = false
  const toggle = () => isOpen = !isOpen

</script>

<header>
  <h2>Findings, thoughts and some considerations</h2>
</header>

  {#if $blogItems.loading}
    Loading...
  {:else if $blogItems.error}
    Error loading blog posts: {$blogItems.error.message}
  {:else}
    {#each $blogItems.data.blogs as blog}
      <div>
        <button on:click={toggle} aria-expanded={isOpen}><svg style="tran" width="20" height="10" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"></path></svg> {blog.intro} </button>
        {#if isOpen}
          <ul transition:slide={{ duration: 300 }}>
              <li>{blog.theDailyGrind}</li>

          </ul>
        {/if}
      </div>
    {/each}
  {/if}

  <style>
    button {
      text-align: center;
      border: none; 
      background: none;
      color: inherit; 
      font-size: 1.25rem; 
      cursor: pointer; 
      margin: 0; 
      padding-bottom: 0.5em; 
      padding-top: 0.5em
    }
    svg { 
      transition: transform 0.2s ease-in;
    }
    [aria-expanded=true] svg { 
      transform: rotate(0.25turn); 
    }
     
  ul {
    list-style-type: none;
    }
  </style>

 
  