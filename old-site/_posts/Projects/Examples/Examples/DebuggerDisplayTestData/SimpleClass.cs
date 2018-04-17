using System.Diagnostics;

namespace Examples.DebuggerDisplayTestData
{
	[DebuggerDisplay("{ToDisplay}")]
	public class SimpleClass
	{
		public string SomeString { get; set; }
		public bool SomeBool { get; set; }
		public int SomeInt { get; set; }

		public string ToDisplay => $"new SimpleClass(){{ " +
		                           $"{nameof(SomeString)} = |{SomeString}|, " +
		                           $"{nameof(SomeBool)} = {SomeBool.ToString().ToLower()}, " +
		                           $"{nameof(SomeInt)} = {SomeInt}, " +
		                           $"}}";
	}
}