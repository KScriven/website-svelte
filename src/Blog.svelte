<script>
  import { slide } from "svelte/transition"
  import { query } from "svelte-apollo"
  import { GET_BLOGS } from './queries.js'  
  const blogItems = query(GET_BLOGS)
  let isOpen = false
  const toggle = () => isOpen = !isOpen
  import Code from './Code.svelte'
</script>

<header>
  <h2>Blog Space</h2>
</header>
<p>I find there is always that pressure to produce thought provoking content, why else would someone spend valuable time
  reading something.  This section is my space of recording things I have found interesting, surprising or downright wierd. 
  Read at your peril!
</p>

<Code></Code>


 
  