<template>
      <b-modal
        v-model="showModal"
        ref="modal"
        title="Info"
        header-bg-variant="light"
        body-bg-variant="light"
        footer-bg-variant="light"
        ok-title="OK"
        @show="resetModal"
        @hidden="resetModal">
        <b-container>
          <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Entity</div>
                <b-list-group-item class="subListItem">{{ userInfo?.id }}</b-list-group-item>
                <b-list-group-item class="subListItem">{{ userInfo?.id }}</b-list-group-item>
                <b-list-group-item class="subListItem">{{ userInfo?.id }}</b-list-group-item>
              </div>
            </b-list-group-item>
          </b-list-group>
        </b-container>
      </b-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    show: Boolean,
    userInfo: Object,
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

<style lang ='scss'>
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
