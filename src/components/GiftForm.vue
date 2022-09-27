<template>
  <h2>Gifted</h2>
  <form @submit.prevent="handleSubmit" class="mt-3">
    <div class="mb-3">
      <label for="tag" class="form-label">Tag</label>
      <input
        type="text"
        class="form-control"
        aria-describedby="taginput"
        v-model="editable.tag"
      />
      <div id="taginput" class="form-text">
        Write Something.... Literally Anything
      </div>
    </div>
    <div class="mb-3">
      <label for="Url" class="form-label">Url</label>
      <input type="text" class="form-control" v-model="editable.url" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import { ref } from "vue";
import { giftsService } from "../services/GiftsService.js";
import Pop from "../utils/Pop.js";

export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async handleSubmit() {
        try {
          await giftsService.handleSubmit(editable.value);
        } catch (error) {
          console.error(error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
