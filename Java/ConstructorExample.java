public class ConstructorExample {
	/*
	 * As below signature has the name as Class name and it doesn't contain any
	 * return value so it will be treated as Constructor of the class
	 */
	public ConstructorExample() {
		System.out.println("Inside Constructor!");
	}
	/*
	 * Below method will be invoked only when it is invoked implicitly.
	 */
	void method() {
		System.out.println("This is in method");
	}
	public static void main(String args[]) {
		System.out.println("Hello JBT!");
		ConstructorExample consObj = new ConstructorExample();
		/*
		 * Now method will be called explicitly as below. It will execute the
		 * code within method.
		 */
		consObj.method();
	}
}