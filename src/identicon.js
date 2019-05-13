class Identicon {
  constructor(userInput) {
    this.userInput = userInput;
  }
  
  makeArray() {
    const hashedArr = md5.array(this.userInput)
    // hashedArr == an array of 16 integers, 0 - 255 (inclusive)
    // i.e. [243, 8, 144, ...]
    return hashedArr
  }
}
