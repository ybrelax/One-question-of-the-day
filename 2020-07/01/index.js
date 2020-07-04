let yd = {x:1, y:2};

let ydWithGetter1 = {
  ...yd,
  get x() {
    throw new Errow()
  }
}

let ydWithGetter2 = {
  ...yd,
  ...{
    get x() {
      throw new Error();
    }
  }
}