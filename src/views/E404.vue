<template>
  <section>
    <div>
      <h1>This page doesn't exist</h1>
      <p>If you think this is an error please let us know</p>
    </div>

  </section>

</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>
  section{
    display: flex;
    background-image: url('../../assets/404cat.png');
    height: 92vh;
    background-size: contain;
    background-color: goldenrod;
    margin-top: -20px;
    padding: 0;
  }
  div{
    height: 30%;
    width: 80%;
    padding: 20px;
    background-color: rgba(255, 239, 213, 0.68);
    border-radius: 30px;
    justify-content: center;
    margin: auto;
    text-align: center;
  }
</style>
