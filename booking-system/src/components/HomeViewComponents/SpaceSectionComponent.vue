<template>
<!-- eslint-disable max-len -->
 <section class="our-spaces">
    <div class="container">
        <h3 class="our-spaces_title">
            Our Spaces
        </h3>
        <p class="our-spaces_text"> Our space is designed to give you a different experience when working with your team or personally </p>
    </div>

 </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'spaceSectionComponent',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
