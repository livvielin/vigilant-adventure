class Solution(object):
    def isUgly(self, num):
        """
        :type num: int
        :rtype: bool
        """
        if num == 1:
            return True
        if num < 1:
            return False
        if num < 7:
          return True
        if isPrime(num):
          return False
        # iterate from 7 to num
        for n in range(7, num):
          # if n is prime and num is divisible, return false
          if num % n == 0 and isPrime(n):
            return False
        return True

# function to check whether number is prime
def isPrime(num):
  if num < 1:
    return False
  if num == 1:
    return False
  if num == 2:
    return True
  # iterate through numbers from 2 to half the num
  # check if divisible
  for n in range(2, num / 2):
    if num % n == 0:
      return False
  return True

# print(isPrime(7))
# print(isPrime(967))
# print(isPrime(98))
