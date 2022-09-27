export class Gift {
  constructor(data) {
    this.id = data.id;
    this.url =
      data.url ||
      "https://i.pinimg.com/736x/0f/20/bd/0f20bdf40ae80d5c4decb002a9560d8a.jpg";
    this.tag = data.tag;
    this.opened = data.opened || true;
  }
}
