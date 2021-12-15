<script>
  import Contact from './Contact.svelte'
  import Blog from './Blog.svelte'

  import { ApolloClient, InMemoryCache, } from '@apollo/client'
  import { setClient } from 'svelte-apollo'

  const client = new ApolloClient({
    uri: 'https://inspiring-visvesvaraya-acb082.netlify.app/',
    cache: new InMemoryCache()
  })

  setClient(client)

</script>

<main>
    <h1>Hello There</h1>
    <!-- <button type='button'>who am i?</button>
    <button type='button'>blogging</button>
    <button type='button'>contact me</button> -->
    <p>
    <Blog></Blog>
    <Contact email={"kerryn.lloyd[at]gmail.com"}, linkedIn={"https://www.linkedin.com/in/kerrynscriven/"}></Contact>
    </p>
    <footer>
      <p>you are always one decision away from a totally different life</p>
    </footer>
</main>

<style>
	main {
	  max-width: 100%;
    background-color: black;
    color: white;
    font-family: 'Rampart One';
    font-display: auto;
    text-align: center;
	}
  h1 {
    font-size: 5rem;
  }

  p {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* button {
    padding: auto;
    font-family: 'Rampart One', cursive;
    background-color: white;
    color: black;
    font-size: 1.5rem;
    border: 1px solid white;
    border-radius: 5px;
    margin: 1rem;
  } */

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>