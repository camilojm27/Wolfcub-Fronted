<template>
<Table v-bind:users="users" title="Users" v-bind:col_titles="col_titles"></Table>
</template>

<script>
import Table from "@/components/Table";
export default {
  name: "Users",
  components: {Table},
  data(){
    return {
      users: null,
      col_titles: ['ID', 'first name', 'last name', 'phone', 'email', 'action']
    };
  },
  async created() {
    const response = await fetch("http://localhost:3000/users")
    const data = await response.json()
    await console.log(data)
    this.users = data;

  }
}
</script>

<style scoped>

</style>
