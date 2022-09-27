<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4 bg-success pt-3">
        <GiftForm />
      </div>
      <!-- GIFTS -->
      <div class="col-md-8">
        <div class="row">
          <GiftCard v-for="g in gifts" :gift="g" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      } catch (error) {
        error.log(error);
        Pop.error;
      }
    }
    getGifts();
    return {
      gifts: computed(() => AppState.gifts),
    };
  },
};
</script>

<style scoped lang="scss"></style>
