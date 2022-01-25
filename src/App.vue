<template>
  <Header
          :navLinks="[
        {
          name: 'Home',
          link: '/',
          dropdown: false,
        },
        { name: 'About', link: '/about', dropdown: false },
        {
          name: 'Contacts',
          link: '/contact',
          dropdown: false,
        },
        {
          name: 'Projects',
          link: '/projects',
          dropdown: false,
        },
      ]"></Header>
  <router-view/>
</template>

<script >
import Header from "@/components/Header";
export default {
  components: {Header}
}

</script>

<style>
@import "normalize.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  font-family: 'Roboto',sans-serif;
}


</style>
