import User from '../models/user';
import MockUser from '../models/user';

export class userProxy {
    getFeaturedMentors() {
        //returns a list of featured mentors
        if(mockData){
            return new MockUser().generateMockUsers();
        }
    }

    
}

