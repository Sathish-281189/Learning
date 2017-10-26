import java.util.Scanner;
/*
 * Here we will learn about the IF statement in Java and how it works.
 */
public class JavaIfStatementExample {
	/*
	 * Here application will ask user to provide String if user provides "Hello"
	 * application will say "Hello User"
	 */
	public static void main(String[] args) {

		/*
		 * Constructs a new scanner that produces values scanned
		 * from the specified input stream. Bytes from the stream are converted 
		 * into characters.
		 */
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter String");

		String str = scanner.next();

		/*
		 * If statement always take argument as boolean expression which always
		 * return TRUE / FALSE. Code will get executed only when return is TRUE
		 * else enclosing code will not get executed.
		 */
		if (str.equalsIgnoreCase("Hello"))
			System.out.println("Hello User");

		// In below if statement as expression is TRUE itself so it will always get executed
		if (true)
			System.out.println("Hello! This will always get printed");

		/*
		 * Unlike other language Java doesn't treat numbers(Other then 0) as true.
		 * If statement only required boolean expression which return TRUE or FALSE anything 
		 * other then boolean expression is not accepted in IF statement in Java. 
		 * Note even Number. As below line of code will not compile. 
		 */
		//if(4)
		// System.out.println("Compilation Error");

	}

}