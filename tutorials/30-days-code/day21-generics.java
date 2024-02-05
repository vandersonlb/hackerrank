import java.io.*;
import java.util.*;

class Printer <T> {
  public <E> void printArray(E[] array) {
    for(E item : array) {
      System.out.println(item);
    }
  }
}

public class Solution {
  public static void main(String[] args) {
    /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    Scanner scanner = new Scanner(System.in);
    int n = scanner.nextInt();
    Integer[] intArray = new Integer[n];
    for (int i = 0; i < n; i++) {
      intArray[i] = scanner.nextInt();
    }

    n = scanner.nextInt();
    String[] stringArray = new String[n];
    for (int i = 0; i < n; i++) {
      stringArray[i] = scanner.next();
    }
    
    Printer<Integer> intPrinter = new Printer<>();
    Printer<String> stringPrinter = new Printer<>();
    intPrinter.printArray(intArray);
    stringPrinter.printArray(stringArray);
  }
}