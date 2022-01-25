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
    </div>
    <div>
      <img src="../../assets/servicedog.png" alt="" height="500">
    </div>


  </section>
  <section class="pricing">
    <div>
      <h1>The best pricing for your schedule</h1>
      <h3>We do not charge any commission per booking</h3>
    </div>
    <div class="pricing-cards">
      <div class="pricing-card">
        <div class="title">
          <h2>Regular</h2>
          <p><strong>$37</strong>/ month</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
      </div>
      <div class="pricing-card">
        <div class="title">
          <h2>Regular</h2>
          <p><strong>$37</strong>/ month</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
      </div>
      <div class="pricing-card">
        <div class="title">
          <h2>Regular</h2>
          <p><strong>$37</strong>/ month</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
        <div class="pricing-attribute">
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/50/000000/external-check-multimedia-kiranshastry-gradient-kiranshastry.png" alt=""/>
          <p >120 Online Booking</p>
        </div>
      </div>
    </div>

  </section>

  <footer>
    <div>
      <img class="w-24 h-24 mx-auto" src="../../assets/w.png" alt="Logo" height="100" />
      <div>
        <img src="https://img.icons8.com/windows/48/000000/facebook.png"/>
        <img src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v2.png"/>
        <img src="https://img.icons8.com/fluency-systems-regular/48/000000/twitter.png"/>
      </div>
    </div>
    <p>Made with 💛 in Cali Colombia</p>
    <div></div>
  </footer>
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

footer{
  height: 200px;
  background-color: #8ECAE6;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
}

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
  display: flex;
  align-items: center;
  justify-content: center;
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

.pricing{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.pricing-cards{
  display: flex;
  flex-direction: row;
}
.pricing-card{
  background-color: #8ECAE6;
  padding: 20px;
  text-align: center;
  border-radius: 20px;
  margin: 0 10px;

}
.pricing-attribute{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.title h2{

}
@media only screen and (max-width: 700px){
  .service{
    height: 400px;
    display: inline;
  }
  .service p{
    text-align: center;
  }
  .pricing-cards{
    display: inline;
  }
  .pricing-card{
    margin: 15px 0;
  }
}
</style>
