<template>
    <div class="workPerks">
        <div class="ourSuport">
            <div class="perks">
                <PerkComponent />
                <PerkComponent />
                <PerkComponent />
                <PerkComponent />
                <PerkComponent />
                <PerkComponent />
            </div>
        </div>
        <div class="whyWFO">
            <div class="head">
                <div class="frame">
                    <p>Why working from office</p>
                    <hr>
                </div>
                <h2 class="titleWFO">A place for peaceful and productive work</h2>
                <p>If you have 5+ kids, fluffy dog, slobbery
                    cat and a turtle you need a
                    quite place where to work in
                    order to feed all these creatures
                    in your house. Also you might need
                    a good internet speed, some
                    cups of cofee per day and
                    periodically a good professional
                    advice from a colleague...</p>
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

$white: #FFFFFF;
$lato: 'Lato', sans-serif;
$roboto: 'Roboto Condensed', sans-serif;

//Main container
.workPerks {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: bisque;
}

.perks {
    display: flex;
    flex-wrap: wrap;
    width: 550px;
    height: 350px;
}

.textPerks {
    font-family: $lato;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    color: #9A9A9A;
}

//Left container
.ourSuport {
    background-color: aliceblue;
    width: 550px;
    height: 350px;
}

//Right container
.whyWFO {
    background-color: #231F20;
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
    color: $white ;
}

p {
    font-family: $lato;
    color: $white;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
}

hr {
    width: 73px;
    height: 2px;
    background: $white ;
}

.titleWFO {
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
