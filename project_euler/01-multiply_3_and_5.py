#!/bin/python3

PATTERN_BREAK = 15
PATTERN_REPEAT = PATTERN_BREAK // 2

def multiple(n):
    sum = 0
    break_in = findSliceFactor(n)
    sum_break = multipleOn(1, break_in + 1)
    rounds = (n - 1) // break_in if break_in > 1 else 0
    start_rest = (break_in * rounds) + 1

    for i in range(rounds):
        current = i * break_in
        sum_nums_round = (break_in // PATTERN_BREAK) * PATTERN_REPEAT
        sum += sum_nums_round * current + sum_break

    for i in range(start_rest, n):
        if i % 3 == 0 or i % 5 == 0:
            sum += i

    return(sum)

def multipleOn(start, finish):
    sum = 0
    for i in range(start, finish):
        if i % 3 == 0 or i % 5 == 0:
            sum += i
    return sum

def findSliceFactor(n):
    pattern_divided = n // PATTERN_BREAK
    one_percent = int(pattern_divided * 0.001)
    divided_by_pattern = one_percent * PATTERN_BREAK
    return divided_by_pattern



tests = [10, 100, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789, 1234567890, 1234567890]

for test in tests:
    print(multiple(test))

