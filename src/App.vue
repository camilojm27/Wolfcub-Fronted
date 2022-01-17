<template>
  <Header
          :navLinks="[
        {
          name: 'Home',
          link: '/home',
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
