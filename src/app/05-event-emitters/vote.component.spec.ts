import { VoteComponent } from './vote.component'; 
// test if event is emitted

describe('VoteComponent', () => {
  let component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upvoted', () => {
    let totalVotes = null;
    component.voteChanged.subscribe( tv => totalVotes = tv);

    component.upVote();

    //expect(totalVotes).not.toBeNull(); // expect totalVotes not to be null - not specific enough
    expect(totalVotes).toBe(1);

  });
});