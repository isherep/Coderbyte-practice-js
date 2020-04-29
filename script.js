// https://blog.mattclemente.com/2019/07/12/modulus-operator-modulo-operation.html#the-modulo-operation-expressed-as-a-formula
// Restrict Number to Range
// When you’re using the modulus operator for even/odd alternation, you’re actually taking advantage of one of its more helpful properties, though you might not realize it. Here’s the property: the range of x % n is between 0 and n - 1, which is to say that the modulo operation will not return more than the divisor.3

// Again, examples might help clarify this idea; in each instance here, the divisor is 5, so results will range from 0 - 4.

// 1 % 5 = 1
// // 1 cannot be divided by 5, so the remainder is 1

// 4 % 5 = 4
// // 4 cannot be divided by 5, so the remainder is 4

// 7 % 5 = 2
// // 7 divided by 5 equals 1, with a remainder of 2

// 25 % 5 = 0
// // 25 divided by 5 equals 5, with a remainder of 0

// 218 % 5 = 3
// // 218 divided by 5 equals 43, with a remainder of 3
// As you can see, regardless of the initial number, the modulus (divisor) limits the range of the result.

// On its own, this property doesn’t seem useful, but when applied within a larger set, it can be used to create a pattern of circular repetition. Here’s an example of incrementing numbers with a modulus of 3:

// 0 % 3 = 0
// 1 % 3 = 1
// 2 % 3 = 2
// 3 % 3 = 0 // cycle back to 0
// 4 % 3 = 1
// 5 % 3 = 2
// 6 % 3 = 0 // cycle back to 0
// Notice how the result of the modulo operation keeps repeating 0-1-2; the values wrap around. One way to describe these results is as a circular array, like numbers on the face of a clock. Let’s take a closer look at a practical application of this property.

// array of options that we want to cycle through
weekdays = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ];

// option count provides modulus (divisor)
dayCount = weekdays.length;

employeeCount = 14;

// loop overur employees while rotating through days
for( i=0; i < employeeCount; i++ ) {

  // employee number mod option count
  dayIndex = i % dayCount;
  // adjust because CFML array indexed from 1
  dayIndex++;
  // use result to cycle thrnodeough weekday array positions
  weekday = weekdays[ dayIndex ];

  console.log( "dayIndex. ", dayIndex );
  console.log( "Scheduling employee on #weekday#. ", dayIndex, weekday );
}