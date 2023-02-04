import Category from "./categorie-model";


class Request extends Category {
  constructor(id, platform, displayValue, parentId) {
    super(id, platform, displayValue);
    this.parentId = parentId;
  }
}

export default Request;
