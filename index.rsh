'reach 0.1';

const winner = (playerA, playerB) => 
((playerA < playerB ? 2 : playerB < playerA ? 0 : 1));


function cardDiff(diffFrom, diffTo) {
    if (diffFrom > diffTo) {
        return 2 * (diffFrom - diffTo);
    } else {
        return (diffFrom - diffTo);
    }
}

const cardValue = (i) => (i < 10 ? i : 10);

const Player = {
    ...hasRandom,
    getCard: Fun([], UInt),
    seeOutcome: Fun([UIin, UInt, UInt], Null),
}