/*
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example


There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

int n: the number of socks in the pile
int ar[n]: the colors of each sock
Returns

int: the number of pairs
Input Format

The first line contains an integer , the number of socks represented in .
The second line contains  space-separated integers, , the colors of the socks in the pile.

Constraints

 where 
Sample Input

STDIN                       Function
-----                       --------
9                           n = 9
10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
Sample Output

3
*/

function sockMerchant(n, ar) {
  let obj = {};
  let array = [];
  let pairs = 0;
  if(ar.length === 0) {
    return pairs;
  }
  for(let i = 0; i < ar.length; i++) {
    if(obj[ar[i]] === undefined) {
      obj[ar[i]] = 1;
      array.push(ar[i]);
    } else {
      obj[ar[i]]++;
    }
  }
  for(let i = 0; i < array.length; i++) {
    if(obj[array[i]] % 2 === 0) {
      pairs += obj[array[i]] / 2;
    } else {
      pairs += Math.floor(obj[array[i]] / 2);
    }
  }
  return pairs;
}