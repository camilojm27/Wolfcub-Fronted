<template>
  <Header
          :navLinks="[
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

*{
  font-family: 'Roboto',sans-serif;
}


</style>
