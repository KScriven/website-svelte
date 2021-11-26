import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'sweetie',
    email: 'kerryn.lloyd@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/kerrynscriven/',
  },
});

export default app;
