<template>
  <div class="work-perks">
    <div class="our-support">
      <div class="perks">
        <PerkComponent
          src="table.svg"
          alt="table"
          header="10+"
          description="Shared tables"
          class="bottom-margin"
        />
        <PerkComponent
          src="events.svg"
          alt="events"
          header="100+"
          description="Recreational and educational Events"
          class="bottom-margin"
        />
        <PerkComponent
          src="meeting.svg"
          alt="meeting"
          header="4"
          description="Meeting rooms"
          class="bottom-margin"
        />
        <PerkComponent
          src="wifi.svg"
          alt="wifi"
          header="500 Mbps"
          description="Internet speed"
          class="bottom-margin"
        />

        <PerkComponent src="user.svg" alt="user" header="∞" description="Cups of coffee" />
        <PerkComponent
          src="colleagues.svg"
          alt="colleagues"
          header="50+"
          description="Experienced colleagues"
        />
      </div>
    </div>
    <div class="why-WFO">
      <div class="head">
        <div class="frame">
          <p class="wfo-text">Why working from office</p>
          <hr class="wfo-hr" />
        </div>
        <h2 class="title-WFO">A place for peaceful and productive work</h2>
        <p class="wfo-text">
          If you have 5+ kids, fluffy dog, slobbery cat and a turtle you need a quite place where to
          work in order to feed all these creatures in your house. Also you might need a good
          internet speed, some cups of cofee per day and periodically a good professional advice
          from a colleague...
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PerkComponent from './PerkComponent.vue';

export default defineComponent({ name: 'WorkPerksComponent', components: { PerkComponent } });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

$white: #ffffff;
$lato: 'Lato', sans-serif;
$roboto: 'Roboto Condensed', sans-serif;

//Main container
.work-perks {
  display: flex;
  //   justify-content: space-between;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.perks {
  display: flex;
  flex-wrap: wrap;
  width: 550px;
  height: 350px;
}

//Left container
.our-support {
  width: 550px;
  height: 350px;
}

.bottom-margin {
  margin-bottom: 67px;
}

//Right container
.why-WFO {
  background-color: #231f20;
  width: 540px;
  height: 421px;

  text-align: left;
}

.head {
  width: 433px;
  height: 132px;
  margin: 54px 54px 0px 53px;
}

.frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 15px;
  width: 307px;
  height: 30px;
  color: $white;
}

.wfo-text {
  font-family: $lato;
  color: $white;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
}

.wfo-hr {
  width: 73px;
  height: 2px;
  background: $white;
  align-items: center;
  margin-bottom: 5px;
}

.title-WFO {
  color: $white;
  font-family: $roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 47px;
  margin-top: 8px;
  margin-bottom: 32px;
}
</style>
