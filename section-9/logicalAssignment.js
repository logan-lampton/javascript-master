'use strict';

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// return number of guests for each restaurant, if available, OR 10, if not
rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;
console.log(rest1.numGuests, rest2.numGuests);

// Or Assignment Operator
// Same as above, but more concise
rest1.numGuests ||= 10;
// doesn't work (return 0) if the value is 0 (falsey)
console.log(rest1);

// Nullish assignment operator
// Works with 0
rest1.numGuests ??= 10;
console.log(rest1);

// && Assignment Operator
// since there is no owner in rest1, the answer is undefined
// rest2 returns <ANONYMOUS> for the owner
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

// && assignment operator returns ONLY if the value is true
// doesn't affect rest1 as it has no listed owner
// rest2 has an owner, so it is updated to '<ANONYMOUS>'
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
