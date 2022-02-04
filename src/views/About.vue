<template>
  <section>
    <div>
        <h1>Contact</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis culpa dolore doloremque
        exercitationem, laudantium nesciunt quisquam repellat. Amet aspernatur commodi consequatur corporis
        ducimus earum est perspiciatis, possimus saepe sunt vel.</p>
    </div>
    <img src="https://raw.githubusercontent.com/camilojm27/celina/master/frontend/public/undraw_contact_us_15o2.svg" alt=""/>

  </section>
</template>
<style scoped>
section {
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 20px;
  grid-gap: 20px;
  overflow: no-display;
}
div {
  align-self: center;
  letter-spacing: 1px;
}
img{
  max-width: 500px;
  background-size: contain;
}
@media screen and (max-width: 700px) {
  section {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
