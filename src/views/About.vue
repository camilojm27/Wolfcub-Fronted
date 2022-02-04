<template>
  <section>
    <div class="info">
      <div>
        <h1>About us</h1>
        <p>This project is an initiative to facilitate the creation of both medical and bathroom appointments for
          WOLFCLUB pets.
        </p>
      </div>
      <img id="pic" src="https://s3.us-east-2.amazonaws.com/icons8.ouch-prod.assets/svg/667/58cbfe67-92db-451d-b37e-57652f5fea94.svg?response-content-disposition=attachment%3B%20filename%3Dopen-doodles-petting.svg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3HNMG24SATQ2TORO%2F20220204%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220204T200824Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a71d028a7c3782b6044ea8e44c5e8cd59f64f0170169b0a0102d5452e7143bfe" alt=""/>

    </div>
    <div class="info">
      <img src="https://imgproxy-us-east-2.icons8.com/vi03wSyWQdSR3Zo7hUOvlS6DEksiocckiNn791bNyrA/rs:fit:912:912/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMTg5/L2UxYzE3NDU1LTE1/MWYtNDBlYi04NzQ5/LTk5M2ExZWVhODVl/MC5zdmc.png/download?filename=marginalia-meeting-friends-during-coronavirus.png" alt=""/>
      <div>
        <h1>Coronovirus preventions</h1>
        <p>All our establishments comply with the following biosecurity measures</p>
        <ol>
          <li>100% Vaccinated Staff</li>
          <li>Mandatory use of face masks</li>
          <li>Temperature taking</li>
          <li>2 meter distance</li>
        </ol>
      </div>

    </div>
  </section>

</template>
<style scoped>
section{
  width: 90%;
  margin: auto;

}
.info {
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
#pic{
  max-height: 400px;
}
@media screen and (max-width: 700px) {
  .info {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
}
</style>
