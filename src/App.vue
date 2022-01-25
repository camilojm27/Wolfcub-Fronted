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
import './index.css'
export default {
  components: {Header}
}

</script>

<style>
/*@import "normalize.css";*/

*{
  font-family: 'Roboto',sans-serif;
}


</style>
