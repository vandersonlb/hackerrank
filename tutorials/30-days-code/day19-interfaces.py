class AdvancedArithmetic(object):
  def divisorSum(n):
    raise NotImplementedError

class Calculator(AdvancedArithmetic):
  def divisorSum(self, n):
    pass
    sum = 0
    for num in range(n, 0, -1):
      if(n%num == 0):
        sum += num
    return sum


n = int(input())
my_calculator = Calculator()
s = my_calculator.divisorSum(n)
print("I implemented: " + type(my_calculator).__bases__[0].__name__)
print(s)
