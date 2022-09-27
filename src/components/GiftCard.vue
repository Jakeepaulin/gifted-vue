<template>
  <div class="col-md-3 my-3">
    <div class="gift-card selectable" @click="toggleGift">
      <div class="card">
        <img :src="gift.url" alt="" class="img-fluid" />
        <div class="card-body">
          <p>{{ gift.tag }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";
import Pop from "../utils/Pop.js";

export default {
  props: {
    gift: { type: Gift, required: true },
  },
  setup(props) {
    return {
      async toggleGift() {
        try {
          await giftsService.toggleGift(props.gift.id);
          Pop.success(`You opened a gift!`);
        } catch (error) {
          console.error(error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.gift-card {
  height: 25vh;
}
</style>
