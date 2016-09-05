// Write a function that generates a list of all prime numbers in a user-specified range (inclusive),
// using the Sieve of Eratosthenes.

function primeSieve (start, end) {
  let result = [];
  let primes = Array.apply(null, {length: end + 1}).map(Number.call, Number).map(num => {
    if(num <= 1 || (num > 2 && num % 2 === 0)){
      return false
    }
    return true;
  })
  let prime = 2;
  while(prime <= Math.sqrt(end)){
    crossOff(primes,prime)
    
    prime = getNextPrime(primes,prime)
  }
  
  for(let i = start; i <= end; i++){
    if(primes[i]){
      result.push(i);
    }
  }
  
  return result
}

function crossOff(primes, prime){
  for(let i = prime**2; i < primes.length; i += prime){
    primes[i] = false
  }
}

function getNextPrime(primes, prime){
  let next = prime + 1;
  while(next < primes.length && !primes[next]){
    next++;
  }
  return next;
}