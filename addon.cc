#include <node.h>
#include <iostream>

namespace demo
{
	using v8::FunctionCallbackInfo;
	using v8::Isolate;
	using v8::Context;
	using v8::Exception;
	using v8::Local;
	using v8::Object;
	using v8::String;
	using v8::Value;

	void HelloWorld(const FunctionCallbackInfo<Value>& args) {
	   std::cout << "Hello, world!" << std::endl;
	}

	void AddNumbers(const FunctionCallbackInfo<Value>& args) {
	   Isolate* isolate = args.GetIsolate();
	   Local<Context> context = isolate->GetCurrentContext();
	   
	   //if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
	   //   isolate->ThrowException(Exception::TypeError(
	   //        String::NewFromUtf8(isolate, "Wrong arguments").ToLocalChecked()));
	   //   return;
	   //}
	   
	   double valueToSum = args[0]->NumberValue(context).FromJust();
	   double result = 0;
	   int sumCount = args[1]->IntegerValue(context).FromJust();
	   int i;

	   for (i = 0; i < sumCount; i++) {
		   result += valueToSum;
	   }

	   args.GetReturnValue().Set(result);
	}


	void Initialize(Local<Object> exports) {
	   NODE_SET_METHOD(exports, "helloWorld", HelloWorld);
	   NODE_SET_METHOD(exports, "addNumbers", AddNumbers);
	}

	NODE_MODULE(addon, Initialize);

} // namespace demo
