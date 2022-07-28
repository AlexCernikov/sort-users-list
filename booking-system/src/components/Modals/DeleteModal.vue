<template>
  <b-modal
    id="delete-modal"
    v-model="showModal"
    header-bg-variant="light"
    body-bg-variant="light"
    footer-bg-variant="light"
    centered
    ok-title="Delete"
    @hidden="resetModal"
    @cancel="resetModal"
    @show="resetModal">
    <p class="my-4">Are you sure you want to delete?</p>
  </b-modal>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    show: Boolean,
  },
  methods: {
    resetModal() {
      this.$emit('cancel');
    },
  },
  computed: {
    showModal() {
      return this.show;
    },
  },
});
</script>

<style lang='scss'>
@import '@/../public/styles.scss';

.btn-primary {
  background-color: $orange;
  border: hidden;
  border-radius: 0;
}

.btn-secondary {
  border: hidden;
  border-radius: 0;
}

.btn-primary:hover {
  background-color: $orange;
  box-shadow: 4px 4px 8px #888888;
}

.btn-secondary:hover {
  box-shadow: 4px 4px 8px #888888;
}

.btn-primary:disabled, .btn-primary.disabled {
  background-color: #FF5A00;
}

p.my-4 {
  font-size: 1.5rem;
  text-align: center;
}

@media (max-width: 415px) {
  p.my-4 {
    font-size: 1rem;
  }
}
</style>
