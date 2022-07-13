<template>
  <div class="container">
    <div class="top">
        <h2><span>Book</span> a perfect spot in the office</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nemo nihil, placeat asperiores totam consectetur,
            dolorum numquam animi minima, laudantium quis molestias
            saepe quam velit quisquam atque minus assumenda reprehenderit id!</p>
    </div>
    <div class="bot">
        <div class="form">
            <div class="form-name">Find your Space Now</div>
            <div class="form-question">
                    <div class="left-content">
                        <p>Type</p>
                        <p>Private Space</p>
                    </div>
                    <div class="right-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline fill="none" stroke="#FFF" stroke-width="2"
                            points="7.086 3.174 17.086 13.174 7.086 23.174"
                             transform="scale(1 -1) rotate(-89 -1.32 0)"/>
                          </svg>
                    </div>

            </div>
            <div class="form-question">
                    <div class="left-content">
                        <p>Date</p>
                        <p>9 Aug</p>
                    </div>
                    <div class="right-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline fill="none" stroke="#FFF" stroke-width="2"
                            points="7.086 3.174 17.086 13.174 7.086 23.174"
                             transform="scale(1 -1) rotate(-89 -1.32 0)"/>
                          </svg>
                    </div>

            </div>
            <div class="form-question">
                    <div class="left-content">
                        <p>Time</p>
                        <p>9:00 - 18:00</p>
                    </div>
                    <div class="right-content">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                            <polyline fill="none" stroke="#FFF" stroke-width="2"
                            points="7.086 3.174 17.086 13.174 7.086 23.174"
                             transform="scale(1 -1) rotate(-89 -1.32 0)"/>
                          </svg>
                    </div>

            </div>
            <div class="form-submit">Find my Space</div>
        </div>
        <div class="img-background">
            <img src="https://cdn.archilovers.com/projects/2870d676-dd12-4858-b351-e971cedd3678.jpg" alt="office-image">
        </div>

    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeroSectionComponent',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
    }
    span{
        color: red
    }
    h2 {
        font-size: 2.5rem;
        margin-right: 50px;
        margin-top: 0;
    }
    p {
        font-size: 1.3rem;
        margin-top: 0;
    }
    .top {
        display: grid;
        grid-template-columns:50% 50%;
        width: 1100px;
    }
    .bot{
        display: flex;
        width: 1100px;
        justify-content: flex-end;
        position: relative;
    }
    .form {
        width: 450px;
        height: 470px;
        background-color: #231F20;
        position: absolute;
        top: 13%;
        right: 60%;
        display: grid;
        font-size: 1.5rem;
        flex-direction: column;
    }
    .form >div {
        width: 70%;
        background-color: black;
        margin: 15px auto;
        color: rgb(234, 234, 234);

    }

    .form >div:last-child {
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FF5A00;
        color: white;
    }

    .form >div:first-child {
        margin-top: 20px;
        background: none;
        font-size: 2rem;
        color: rgb(235, 235, 235);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .left-content>p {
    margin: 0;
    padding: 0;
    }

    .form-question {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .left-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
</style>
