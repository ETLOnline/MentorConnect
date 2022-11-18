export class User {
    Id = "";
    UserName = "";
    IsFeatured = false;
    Summary = class Summary {
        firstName = "";
        lastName = "";
    }
}

export class Mentor extends User {

}

export class Learner extends User {
    
}

export class MockUser {
    generateMockUsers() {
        let u1 = new User();
        let u2 = new User();

        return [{u1, u2}];
    }
}