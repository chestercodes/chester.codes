using System.Collections.Generic;

namespace Examples.DebuggerDisplayTestData
{
    public class DebuggerDisplayTestData
    {
	    public void Run()
	    {
		    var someInput = "Some input";

			var thingToTest = new ThingToTest();

			var result = thingToTest.TestMethod(someInput);

			var resultHasValues = result.Count > 0;
	    }
    }

	public class ThingToTest
    {
		public List<SimpleClass> TestMethod(string someInput)
		{
			return new List<SimpleClass>
			{
				GetSimpleClass("String 1", true, 5),
				GetSimpleClass("String 2", false, 7),
				GetSimpleClass("String 3", true, 9),
				GetSimpleClass("String 4", true, 11)
			};
		}

		private SimpleClass GetSimpleClass(string someString, bool someBool, int someInt)
		{
			return new SimpleClass() {SomeString = someString, SomeBool = someBool, SomeInt = someInt};
		}
    }
}
