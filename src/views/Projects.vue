<template>
<div>
  <h1>Wolfclub Frontend</h1>
  <a href="https://github.com/gesveen/Wolfcub-Fronted" target="_blank" rel="noreferrer">https://github.com/gesveen/Wolfcub-Fronted</a>
</div>
  <div>
  <h1>Wolfclub Backend</h1>
  <a href="https://github.com/JoseMMC99/WolfCub" target="_blank" rel="noreferrer">https://github.com/JoseMMC99/WolfCub</a>
</div>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
div{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin: 20px auto auto;
  border-radius: 25px;
}

div:first-of-type{
  background-color: rgba(255, 140, 0, 0.7);
}div:last-of-type{
  background-color: rgba(55, 0, 255, 0.7);
  color: white;
}

@media screen and (max-width: 700px) {
div{
  width: 100%;
  flex-direction: column;
}
}
</style>
