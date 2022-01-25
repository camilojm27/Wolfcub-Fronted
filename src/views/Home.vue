<template>
  <section class="hero">
    <div>
      <h1>Vet Appointment <br> Booking Management </h1>
      <p>Book and schedule your meeting with doctor is really easy now, <br>
        since we provide you all your need in just one product
      </p>
      <button>Request a demo</button>
    </div>
  </section>
  <section class="service">
    <div>
      <h2>Improve the Pet <br> Owner Experience</h2>
      <p>Just with WolfClub you can set an appointment easily <br>
      whenever you need and wherever you want.
      </p>
    </div>
    <div class="service-quality">
      <img src="https://img.icons8.com/fluency-systems-regular/50/000000/hand-holding-heart.png" alt=""/>
      <p>Service Quality</p>
    </div>
    <div class="service-rating">
      <span>4.9</span>
      <div>
        <p>&starf;&starf;&starf;&starf;&star;</p>
        <span>8.280 Ratings</span>
      </div>

    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
});
</script>

<style scoped>

.hero{
  padding: 20px;
  margin: 0;
  background-image: url("../../assets/hero-friend.png");
  background-position: center;
  height: 90vh;
}
button{
  padding: 15px;
  background-color: #fff;
  border-radius:30px;
  border: 2px solid lightskyblue;
  transition: ease-in-out .25s;
}

button:hover{
  background-color: #8ECAE6;
  cursor: pointer;
}
.service{
  height: 400px;
}
.service-quality{
  display: flex;
}
.service-rating{
  display: flex;
  font-size: 20px;
}
.service-rating > span{
  font-size: 40px;
  font-weight: bolder;
  margin: 0 40px 0 0;
}
.service-rating p{
  font-size: 25px;
  color: goldenrod;
  padding: 0;
  margin: 0;
}
</style>
