class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        count = 0
        for x in nums:
            if x == 0:
                count += 1
        while count > 0:
            nums.remove(0)
            nums.append(0)
            count -= 1