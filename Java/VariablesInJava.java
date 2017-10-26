public class VariablesInJava {
	/*
	 * Below variable is INSTANCE VARIABLE as it is outside any method and it is
	 * not using STATIC modifier with it. It is using default access modifier.
	 */
	int instanceField;
	/*
	 * Below variable is STATIC variable as it is outside any method and it is
	 * using STATIC modifier with it. It is using default access modifier.
	 */
	static String staticField;

	void method() {
		/*
		 * Below variable is LOCAL VARIABLE as it is defined inside method in class.
		 * Only modifier that can be applied on local variable is FINAL.
		 * Note* : Local variable needs to initialize before they can be used.
		 * Which is not true for Static or Instance variable.
		 */
		final String localVariable = "Initial Value";
		System.out.println("\n******* LOCAL VARIABLE ********");
		System.out.println("Local Variable: " + localVariable);
	}

	public static void main(String args[]) {
		VariablesInJava obj = new VariablesInJava();
		/*
		 * Local Variable
		 */
		obj.method();
		/*
		 * Instance variable can only be accessed by Object of the class only as below.
		 */
		System.out.println("\n\n******* INSTANCE VARIABLE ********");
		System.out.println("Instance Variable: "+obj.instanceField);
 
 		/*
		 * Static field can be accessed in three way.
		 * 1- Access directly without using any object
		 * 2- Via Object of the class
		 * 3- Via CLASS name
		 */
		System.out.println("\n\n******* STATIC VARIABLE ********");
		// STATIC VARIABLE can be accessed directly without using any object
		System.out.println("1.Access directly without using any object: "+staticField);
		System.out.println("2.Access Via Object of the class: "+obj.staticField);
		System.out.println("3.Access Via class name: "+VariablesInJava.staticField);
	}
}