class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hash_tabel = dict()
        for i, x in enumerate(nums):
            if target - x in hash_tabel:
                return [i, hash_tabel[target - x]]
            hash_tabel[x] = i