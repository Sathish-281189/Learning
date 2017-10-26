import java.io.*;
public class SecondClass extends FirstClass {
	public static void main(String args[]) {
		SecondClass secondObj = new SecondClass();
		secondObj.method();

	}
	void method(){
		System.out.println("Public Variable: "+i);
		/*
		 * Here you are trying to access protected variable directly. So it will not be accessible and compile will give an error.
		 */
 		// System.out.println("Protected Variable: "+j); // Compilation Error
		/*
		 * As k is private so it will not be accisible to subclass neither way.
		 * Neither it can be accessed via Inheritance nor direct.
		 */
		// System.out.println("Private Variable: "+k); // Compilation Error

		FirstClass firstObj = new FirstClass();
		/*
		 * Here property j is accessed via Inheritance hence it will be
		 * accessible. But same variable can not be accessed if you try to
		 * access via instance because modifier used here is protected so it
		 * will be available to sub class only via inheritance.
		 */
		System.out.println("Protected Variable: "+firstObj.j);

		// Private variable will not be accessible here also.
		// System.out.println("Private Variable: "+firstObj.k); // Compilation error
	}
}