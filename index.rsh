'reach 0.1';

// Winner is the closest one to 21. If B is further than a A then A wins, we return 1
// 1 -> A, 2 -> B, 0 -> Draw
const winner = (distA, distB) => (distA < distB ? 1 : (distB < distA ? 2 : 0));


function calculateDistanceFrom21(distanceFrom) {
  return distanceFrom > 21 ? 2 * (distanceFrom - 21) : 21 - distanceFrom;
}
