export class User {
  Id = 1;
  UserName = "sajid";
  IsFeatured = false;
  Summary = class Summary {
    firstName = "Java";
    lastName = "Script";
  };
}

export class Mentor extends User {}

export class Learner extends User {}

export class MockUser {
  generateMockUsers() {
    let u1 = new User();
    let u2 = new User();

    return [{ u1, u2 }];
  }
}
