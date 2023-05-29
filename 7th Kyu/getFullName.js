// answer
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    if (!this.firstName && !this.lastName) {
      return "";
    } else if (!this.firstName) {
      return this.lastName;
    } else if (!this.lastName) {
      return this.firstName;
    } else {
      return `${this.firstName} ${this.lastName}`;
    }
  }
}
