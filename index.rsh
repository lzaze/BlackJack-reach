'reach 0.1';

/**
 * Winner is the closest one to 21. If B is further than a A then A wins, we return 1
 * 
 * 1 -> A, 2 -> B, 0 -> Draw
 * @param distA 
 * @param distB 
 * @returns 
 */
const winner = (distA, distB) => (distA < distB ? 1 : (distB < distA ? 2 : 0));

/**
 * This will return i if i is less than 10 else it will return 10
 * @param i
 * @returns 
 */
const cardValue = (i) => (i < 10 ? i : 10);

/**
 * 
 * @param distance Calculates the distance from 21, if the distance is bigger than 21 we scale it down
 * @returns 
 */
function calculateDistanceFrom21(distance) {
  return distance > 21 ? 2 * (distance - 21) : 21 - distance;
}


/**
 * This is the player object.
 * Code taken from github from:
 * 
 * https://github.com/mertmalaz/Modified-Blackjack_Reach-Bounty-Hack
 */
const Player = {
  ...hasRandom,
  getCard: Fun([], UInt), // Get a random card from the front end
  seeOutcome: Fun([UInt, UInt, UInt], Null), // Print the outcome of the game
  //seeSum: Fun([Array(UInt, 2)], Null), // Total sum of each players hands
  updateOpponentHand: Fun([UInt], Null), // Send opponent's hand information to the frontend
  informTimeout: Fun([], Null),
  setGame: Fun([], Tuple(UInt, UInt)), // Initial card distributions
  revelLastCard: Fun([UInt], Null),
  getResultView: Fun([], Null),
  printThis: Fun([UInt], Null),
}

// const Alice = {
//   ...Player,
//   wager: UInt
// };

// const Bob = {
//   ...Player,
//   acceptWager: Fun([UInt], Null)
// };


const DEADLINE = 10;

/**
 * The main reach function, the backend will start from here
 */
export const main = Reach.App(() => {

  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });
  const Bob = Participant('Bob', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
  });
  Alice.publish(wager, deadline).pay(wager);
  commit();

  Bob.only(() => {
    interact.acceptWager(wager);
  });
  Bob.pay(wager).timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

  var outcome = 0;
  invariant(balance() == 2 * wager);
  while (outcome == 0) {
    commit();

    Alice.only(() => {
      const _handAlice = interact.getCard();
      const [_commitAlice, _saltAlice] = makeCommitment(interact, _handAlice);
      const commitAlice = declassify(_commitAlice);
    });
    Alice.publish(commitAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    unknowable(Bob, Alice(_handAlice, _saltAlice));
    Bob.only(() => {
      const handBob = declassify(interact.getCard());
    });
    Bob.publish(handBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    Alice.only(() => {
      const saltAlice = declassify(_saltAlice);
      const handAlice = declassify(_handAlice);
    });
    Alice.publish(saltAlice, handAlice)
      .timeout(relativeTime(deadline), () => closeTo(Bob,informTimeout));
    checkCommitment(commitAlice, saltAlice, handAlice);

    outcome = winner(handAlice, handBob);
    continue;
  }

  transfer(2 * wager).to(outcome == 1 ? Alice : Bob);
  commit();

  // each([Alice, Bob], () => {
  //   interact.seeOutcome(outcome);
  // });
  
});