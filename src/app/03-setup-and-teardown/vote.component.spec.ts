import { VoteComponent } from './vote.component';
    // TESTING A COMPONENT!
    // ARRANGE ACT ASSERT (Behaupten)

describe('VoteComponent', () => {

  let component: VoteComponent;

  // before Each test, we create the component, otherwise the second test would fail, because totalVotes would not be -1 but 0
  // also beforeAll() and afterEach() functions exist
  // Arrange, component is initialized
  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should increment totalVotes when upvoted', () => {

    // Act, call the components method
    component.upVote();
    // Assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downvoted', () => {
    
    component.downVote();
    
    expect(component.totalVotes).toBe(-1);
  });
});