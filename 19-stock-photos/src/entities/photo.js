export class Photo {
  constructor({
    id,
    url,
    altDescription,
    likes,
    owner,
    ownerPic,
    ownerPortfolio,
  }) {
    this.id = id;
    this.url = url;
    this.altDescription = altDescription;
    this.likes = likes;
    this.owner = owner;
    this.ownerPic = ownerPic;
    this.ownerPortfolio = ownerPortfolio;
  }
}
