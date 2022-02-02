<template>
  <div>
    <img class="profile" src="https://dummyimage.com/600x400/000/fff" alt="">
    <div class="name">
      <h3>{{ name }} <small> <br>{{age}} years old</small></h3>
      <img v-if="pet_type" class="icon" src="https://img.icons8.com/ios-glyphs/30/000000/male.png" alt=""/>
      <img v-else class="icon" src="https://img.icons8.com/material-outlined/24/000000/female.png" alt=""/>
    </div>
    <small>Owner: {{owner}}</small>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: "Milagros",
      owner: "Camilo",
      gender: 'Macho',
      age: 5,
      pet_type: null
    }
  },
  mounted() {
    this.getPets()
  },
  methods: {
    getPets(){
      console.log('Aca va la peticion')
    }
  },
  name: "PetCard"
}
</script>

<style scoped>

div{
  background-color: #FFB703;
  height: 150px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  border-radius: 20px;
  justify-content: flex-end;
}
.profile{
  height: 80px;
  width: 80px;
}
.name{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.icon{
  height: 30px;
  width: 30px;
}
</style>
