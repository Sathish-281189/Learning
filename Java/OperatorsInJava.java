import java.util.Scanner;

public class OperatorsInJava {

	public static void main(String[] args) {
		OperatorsInJava obj = new OperatorsInJava();
		obj.addition();
		obj.average();
	}
	public void addition() {
		Scanner scanner = new Scanner(System.in);
		System.out.print("\n*************** ADDITION ****************");
		System.out.print("\nEnter your name: ");
		String name = scanner.next();
		System.out.print("\nEnter marks in three subjects:\n");
		int marks1 = scanner.nextInt();
		int marks2 = scanner.nextInt();
		int marks3 = scanner.nextInt();
		double sum = (marks1 + marks2 + marks3);
		System.out.println("\nName: " + name);
		System.out.println("Sum: " + sum);
	}
	public void average() {
		Scanner scanner = new Scanner(System.in);
		System.out.print("\n\n*************** AVERAGE ****************");
		System.out.print("\nEnter your name: ");
		String name = scanner.next();
		System.out.print("\nEnter marks in three subjects:\n");
		int marks1 = scanner.nextInt();
		int marks2 = scanner.nextInt();
		int marks3 = scanner.nextInt();
		double average = (marks1 + marks2 + marks3) / 3.0;
		System.out.println("\nName: " + name);
		System.out.println("Average: " + average);
	}
}