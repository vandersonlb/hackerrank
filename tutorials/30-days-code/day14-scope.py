class Difference:
  def __init__(self, a):
    self.__elements = a

	# Add your code here
  maximumDifference = 0

  def computeDifference(self):
    for idx, num in enumerate(self.__elements):
      while idx < len(self.__elements)-1:
        idx = idx + 1
        # print(f"Compara: {num} com {self.__elements[idx]}")
        diff = abs(num - self.__elements[idx])
        if diff > self.maximumDifference:
          self.maximumDifference = diff
# End of Difference class

# _ = input()
# a = [int(e) for e in input().split(' ')]
a = [8, 19, 3, 2, 7]
# a = [1, 2, 5]
# a = [0, 0, 0, 0, 0]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)
