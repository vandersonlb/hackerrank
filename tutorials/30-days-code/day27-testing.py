def minimum_index(seq):
  if len(seq) == 0:
    raise ValueError("Cannot get the minimum value index from an empty sequence")
  min_idx = 0
  for i in range(1, len(seq)):
    if seq[i] < seq[min_idx]:
      min_idx = i
  return min_idx


# Enter your code here
class TestDataEmptyArray:
  def get_array():
    return []


class TestDataUniqueValues:
  def get_array():
    return [4, 2]
  
  def get_expected_result():
    return 1

class TestDataExactlyTwoDifferentMinimums:
  def get_array():
    return [4, 2, 2]
  
  def get_expected_result():
    return 1
# End of your code


def TestWithEmptyArray():
  try:
    seq = TestDataEmptyArray.get_array()
    result = minimum_index(seq)
  except ValueError as e:
    pass
  else:
    assert False


def TestWithUniqueValues():
  seq = TestDataUniqueValues.get_array()
  assert len(seq) >= 2

  assert len(list(set(seq))) == len(seq)

  expected_result = TestDataUniqueValues.get_expected_result()
  result = minimum_index(seq)
  assert result == expected_result


def TestiWithExactyTwoDifferentMinimums():
  seq = TestDataExactlyTwoDifferentMinimums.get_array()
  assert len(seq) >= 2
  tmp = sorted(seq)
  assert tmp[0] == tmp[1] and (len(tmp) == 2 or tmp[1] < tmp[2])

  expected_result = TestDataExactlyTwoDifferentMinimums.get_expected_result()
  result = minimum_index(seq)
  assert result == expected_result

TestWithEmptyArray()
TestWithUniqueValues()
TestiWithExactyTwoDifferentMinimums()
print("OK")




'''
Um colega de trabalho preparou funções que realizarão os testes e validarão os valores de retorno.
Conclua a implementação de 3 classes para fornecer dados e resultados esperados para os testes.

Complete os métodos a seguir.

Na classe TestDataEmptyArray:
- get_array() retorna um array vazio

Na classe TestDataUniqueValues:
- get_array() retorna um array de tamanho pelo menos 2 com todos os elementos únicos
- get_expected_result() retorna o índice de valor mínimo esperado para este array

Na classe TestDataExactlyTwoDifferentMinimums:
- get_array() retorna um array onde o valor mínimo ocorre exatamente em 2 índices
- get_expected_result() retorna o índice esperado

Dê uma olhada no modelo de código para ver a implementação exata das funções que seu colega já implementou.

Nota: As matrizes são indexadas a partir de 0
'''