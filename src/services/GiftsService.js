import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { giftsApi } from "./AxiosService.js";

class GiftsService {
  async getGifts() {
    const res = await giftsApi.get("/api/gifts");
    console.log(res.data);
    AppState.gifts = res.data.map((g) => new Gift(g));
  }

  async handleSubmit(editable) {
    const res = await giftsApi.post("/api/gifts", editable);
    console.log("made a gift", res.data);
    let gift = new Gift(res.data);
    AppState.gifts = [...AppState.gifts, gift];
    AppState.gifts = AppState.gifts;
    this.getGifts();
  }

  async toggleGift(id) {
    const gift = AppState.gifts.find((g) => g.id == id);
    console.log(gift);
    if (!gift) {
      throw new Error("Bad Gift");
    }
    gift.opened = !gift.opened;
    console.log(gift.opened);
    await giftsApi.put(`/api/gifts/${id}`, gift);
    this.getGifts();
  }
}

export const giftsService = new GiftsService();
