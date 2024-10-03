/**
 * Determines whether the provided value is an instance of ArrayBuffer.
 *
 * This function checks the internal [[Class]] property of the input value
 * to ascertain if it is classified as an ArrayBuffer. It is useful for
 * validating data types when working with binary data in JavaScript.
 *
 * @param {*} e - The value to be checked.
 * @returns {boolean} Returns true if the value is an ArrayBuffer, otherwise false.
 *
 * @example
 * const buffer = new ArrayBuffer(8);
 * console.log(isArrayBuffer(buffer)); // true
 *
 * const notBuffer = {};
 * console.log(isArrayBuffer(notBuffer)); // false
 */
/**
 * Creates a Buffer from an ArrayBuffer, allowing for an optional offset and length.
 *
 * @param {ArrayBuffer} e - The source ArrayBuffer to create the Buffer from.
 * @param {number} r - The offset in bytes from the start of the ArrayBuffer.
 * @param {number} [t] - The length in bytes of the Buffer to create. If not provided, it defaults to the remaining bytes after the offset.
 * @returns {Buffer} A Buffer object containing the specified portion of the ArrayBuffer.
 * @throws {RangeError} Throws a RangeError if the offset is out of bounds or if the length is out of bounds.
 *
 * @example
 * const arrayBuffer = new ArrayBuffer(10);
 * const buffer = fromArrayBuffer(arrayBuffer, 2, 5);
 * console.log(buffer); // Outputs a Buffer containing 5 bytes starting from offset 2
 */
/**
 * Converts a given input string into a Buffer using the specified encoding.
 *
 * @param {string} e - The input string to be converted into a Buffer.
 * @param {string} [r='utf8'] - The encoding to use for the conversion.
 *                               If not provided or an empty string, defaults to 'utf8'.
 *                               Must be a valid string encoding supported by Buffer.
 * @returns {Buffer} - A Buffer object containing the converted data.
 *
 * @throws {TypeError} - Throws an error if the provided encoding is not a valid string encoding.
 *
 * @example
 * const buffer = fromString('Hello, World!', 'utf8');
 * console.log(buffer); // Outputs: <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21>
 */
/**
 * Creates a Buffer from various types of input.
 *
 * This function can accept a value of different types, including ArrayBuffer, string, or Buffer.
 * If the input is a number, it will throw a TypeError.
 *
 * @param {ArrayBuffer|string|Buffer} e - The input value to create a Buffer from.
 * @param {string} [r] - An optional encoding type if the input is a string.
 * @param {number} [t] - An optional length if the input is an ArrayBuffer.
 *
 * @throws {TypeError} Throws an error if the "value" argument is a number.
 *
 * @returns {Buffer} A Buffer instance created from the input value.
 *
 * @example
 * // Creating a Buffer from a string
 * const buf1 = bufferFrom('Hello, World!', 'utf8');
 *
 * @example
 * // Creating a Buffer from an ArrayBuffer
 * const arrayBuffer = new ArrayBuffer(8);
 * const buf2 = bufferFrom(arrayBuffer);
 *
 * @example
 * // This will throw a TypeError
 * const buf3 = bufferFrom(123);
 */
/**
 * Dynamically requires a module in a Node.js environment.
 *
 * This function allows for the dynamic loading of modules at runtime,
 * which can be useful for conditional loading or when the module name is not known until execution.
 *
 * @param {Object} e - The context object that contains the require function.
 * @param {string} r - The name or path of the module to be required.
 * @returns {Object} The exported module from the required file.
 *
 * @throws {Error} Throws an error if the module cannot be found or loaded.
 *
 * @example
 * const myModule = dynamicRequire(module, './myModule');
 * console.log(myModule);
 */
/**
 * Determines if the current environment is a web browser.
 *
 * This function checks the environment by evaluating the value of a variable `c`
 * and the presence of certain global objects. It returns true if the environment
 * is identified as a browser, and false if it is identified as Node.js. If the
 * environment cannot be determined, it checks for the existence of the `window`
 * object and the `XMLHttpRequest` function to make a final determination.
 *
 * @returns {boolean} Returns true if the environment is a browser, false otherwise.
 *
 * @example
 * if (isInBrowser()) {
 *   console.log("Running in a browser environment.");
 * } else {
 *   console.log("Not running in a browser environment.");
 * }
 *
 * @throws {ReferenceError} Throws an error if the variable `c` is not defined.
 */
/**
 * Checks if the global `process` object is available and if it has an `on` method.
 *
 * This function is useful for determining if the current environment supports Node.js-style event handling
 * through the `process` object, which is commonly used in server-side JavaScript.
 *
 * @returns {boolean} Returns `true` if the `process` object exists, is not null, and has an `on` method;
 * otherwise, returns `false`.
 *
 * @example
 * if (hasGlobalProcessEventEmitter()) {
 *   console.log("Global process event emitter is available.");
 * } else {
 *   console.log("Global process event emitter is not available.");
 * }
 */
/**
 * Retrieves the version of the Node.js process if available.
 *
 * This function checks if the `process` object is defined and not null.
 * If the `process` object exists, it returns the version of Node.js as a string.
 * If the `process` object is not available, it returns an empty string.
 *
 * @returns {string} The version of the Node.js process or an empty string if not available.
 *
 * @example
 * const version = globalProcessVersion();
 * console.log(version); // Outputs the Node.js version or an empty string
 */
/**
 * Retrieves the standard error stream of the Node.js process.
 *
 * This function checks if the `process` object is defined and is not null,
 * then returns the `stderr` property of the `process` object, which is used
 * for outputting error messages.
 *
 * @returns {WritableStream|null} The standard error stream if available, otherwise null.
 *
 * @example
 * const stderrStream = globalProcessStderr();
 * if (stderrStream) {
 *   stderrStream.write('An error occurred!');
 * }
 */
/**
 * Exits the Node.js process with the specified exit code.
 *
 * This function checks if the `process` object is available and if it has an `exit` method.
 * If both conditions are met, it calls `process.exit()` with the provided exit code.
 *
 * @param {number} e - The exit code to use when terminating the process.
 *                     A non-zero value typically indicates an error.
 * @returns {void}
 *
 * @throws {TypeError} If `process` is not an object or does not have an `exit` method.
 *
 * @example
 * // Exit the process with a success code
 * globalProcessExit(0);
 *
 * // Exit the process with an error code
 * globalProcessExit(1);
 */
/**
 * Creates a handler function that executes an array of functions in sequence.
 * The handler function takes a single argument and passes it to each function in the array.
 * It returns the result of the first function that returns a truthy value, or null if none do.
 *
 * @param {Array<Function>} e - An array of functions to be executed.
 * Each function should accept a single argument and return a value.
 *
 * @returns {Function} A new function that takes a single argument and processes it through the array of functions.
 *
 * @example
 * const handlers = [
 *   (input) => input > 10 ? 'Greater than 10' : null,
 *   (input) => input < 5 ? 'Less than 5' : null,
 * ];
 * const execHandler = handlerExec(handlers);
 * console.log(execHandler(12)); // Outputs: 'Greater than 10'
 * console.log(execHandler(3));  // Outputs: 'Less than 5'
 * console.log(execHandler(7));  // Outputs: null
 */
/**
 * Resolves a relative URL based on a given base URL.
 *
 * This function takes a base URL and a relative URL, and returns the absolute URL
 * by resolving the relative URL against the base URL. If the base URL is not provided,
 * it returns the relative URL as is.
 *
 * @param {string} e - The base URL to resolve against. If not provided, the function will return the relative URL.
 * @param {string} r - The relative URL to be resolved.
 * @returns {string} The resolved absolute URL.
 *
 * @example
 * const baseURL = 'http://example.com/path/to/resource';
 * const relativeURL = '../another/resource';
 * const absoluteURL = supportRelativeURL(baseURL, relativeURL);
 * console.log(absoluteURL); // Outputs: 'http://example.com/path/another/resource'
 *
 * @throws {Error} Throws an error if the base URL is invalid or cannot be resolved.
 */
/**
 * Retrieves the source map URL from a given input.
 *
 * This function checks if the code is running in a browser environment.
 * If so, it attempts to make a synchronous XMLHttpRequest to fetch the
 * source map URL from the provided input. If the request is successful,
 * it returns the source map URL found in the response headers. If the
 * request fails or if the source map URL is not found in the headers,
 * it searches for the source map URL in the input string using regular
 * expressions.
 *
 * @param {string} e - The input string from which to retrieve the source map URL.
 * @returns {string|null} The source map URL if found, otherwise null.
 *
 * @throws {Error} Throws an error if there is an issue with the XMLHttpRequest.
 *
 * @example
 * const url = retrieveSourceMapURL('path/to/file.js');
 * console.log(url); // Outputs the source map URL or null if not found.
 */
/**
 * Maps a source position from a given event object to its original position.
 *
 * This function retrieves the source map associated with the provided event's source.
 * If the source map is found, it uses the `originalPositionFor` method to determine
 * the original position of the event in the source file. The function also handles
 * relative URLs for the source files.
 *
 * @param {Object} e - The event object containing the source information.
 * @param {string} e.source - The source identifier from which to map the position.
 *
 * @returns {Object} The original position information, which includes:
 *   - {string|null} source - The original source file name or null if not found.
 *   - {number|null} line - The line number in the original source or null if not found.
 *   - {number|null} column - The column number in the original source or null if not found.
 *
 * @throws {Error} Throws an error if the source map cannot be processed.
 *
 * @example
 * const event = { source: 'example.js' };
 * const originalPosition = mapSourcePosition(event);
 * console.log(originalPosition); // Outputs the original position details.
 */
/**
 * Parses a string representing an evaluation origin and returns a formatted string
 * that indicates the source of the evaluation.
 *
 * The function supports two formats of the evaluation string:
 * 1. "eval at <function_name> (<file_name>:<line>:<column>)"
 * 2. "eval at <function_name> (<file_name>)"
 *
 * It extracts the function name, file name, line number, and column number,
 * and maps the source position to provide a more readable output.
 *
 * @param {string} e - The evaluation origin string to be parsed.
 * @returns {string} - A formatted string indicating the source of the evaluation.
 *
 * @example
 * const result = mapEvalOrigin("eval at myFunction (script.js:10:5)");
 * console.log(result); // Outputs: "eval at myFunction (script.js:10:5)"
 *
 * @example
 * const result = mapEvalOrigin("eval at myFunction (script.js)");
 * console.log(result); // Outputs: "eval at myFunction (script.js)"
 *
 * @throws {TypeError} - Throws an error if the input is not a string.
 */
/**
 * Converts the call site information into a string representation.
 * This function provides a detailed description of the call site,
 * including the script name, line number, column number, function name,
 * and method name if applicable.
 *
 * @returns {string} A string representation of the call site, which may include:
 * - The script name or source URL
 * - Line and column numbers
 * - Function and method names
 * - Indication of whether the call is native or from an eval context
 *
 * @example
 * const callSite = new CallSite();
 * console.log(callSite.toString()); // Outputs a string describing the call site
 *
 * @throws {TypeError} Throws a TypeError if the call site information is not available.
 */
/**
 * Clones a CallSite object, creating a new object that contains
 * the same properties as the original CallSite.
 *
 * This function retrieves all property names from the prototype
 * of the provided CallSite object and creates a new object with
 * those properties. If the property name matches the pattern
 * for getter methods (i.e., starts with "is" or "get"), it
 * assigns a function that calls the original method on the
 * provided CallSite object. Otherwise, it directly copies the
 * property value.
 *
 * @param {CallSite} e - The CallSite object to clone.
 * @returns {Object} A new object that is a clone of the original
 *                  CallSite, with methods and properties
 *                  appropriately handled.
 *
 * @throws {TypeError} Throws an error if the provided argument
 *                     is not a CallSite object.
 *
 * @example
 * const originalCallSite = getCallSite(); // Assume this returns a CallSite
 * const clonedCallSite = cloneCallSite(originalCallSite);
 * console.log(clonedCallSite.toString());
 */
/**
 * Wraps a call site object to provide enhanced information about the call site.
 * This function modifies the properties of the call site to include additional
 * source mapping and position information.
 *
 * @param {Error} e - The error object representing the call site.
 * @param {Object} [r={nextPosition: null, curPosition: null}] - An optional object
 *        to hold the current and next position information. If not provided,
 *        defaults to an object with both properties set to null.
 * @returns {Object} The modified call site object with enhanced properties.
 *
 * @throws {TypeError} Throws an error if the provided error object is not valid.
 *
 * @example
 * const error = new Error('An error occurred');
 * const wrappedCallSite = wrapCallSite(error);
 * console.log(wrappedCallSite.getFileName());
 *
 * @example
 * const error = new Error('An error occurred');
 * const positionInfo = { nextPosition: { name: 'nextFunction' } };
 * const wrappedCallSite = wrapCallSite(error, positionInfo);
 * console.log(wrappedCallSite.getFunctionName());
 */
/**
 * Prepares a formatted stack trace string from an error object and an array of call sites.
 *
 * This function constructs a human-readable stack trace by extracting the error name and message,
 * and appending the formatted call sites in reverse order. It is useful for debugging purposes to
 * provide context about where an error occurred in the code.
 *
 * @param {Error} e - The error object from which to extract the name and message.
 * @param {Array} r - An array of call site objects representing the stack trace.
 * @returns {string} A formatted string representing the error and its stack trace.
 *
 * @example
 * const error = new Error("Something went wrong");
 * const callSites = [/* array of call site objects * /];
 * const stackTrace = prepareStackTrace(error, callSites);
 * console.log(stackTrace);
 *
 * @throws {TypeError} Throws an error if the first parameter is not an instance of Error.
 */
/**
 * Extracts the source location of an error from its stack trace.
 *
 * This function parses the error stack to find the file name, line number,
 * and column number where the error occurred. If the file is not found in
 * the predefined paths, it attempts to read the file from the filesystem.
 *
 * @param {Error} e - The error object from which to extract the source information.
 * @returns {string|null} A string containing the file name, line number, and
 *                       the corresponding line of code, or null if no source
 *                       information could be extracted.
 *
 * @example
 * try {
 *   // some code that throws an error
 * } catch (error) {
 *   const source = getErrorSource(error);
 *   console.log(source);
 * }
 *
 * @throws {Error} Throws an error if reading the file fails.
 */
/**
 * Logs an error message to the standard error output and exits the process with a failure code.
 *
 * This function retrieves the source of the error and logs it, along with the stack trace,
 * to help diagnose issues. It also ensures that the standard error output is in blocking mode
 * if supported, to prevent any potential issues with asynchronous logging.
 *
 * @param {Error} e - The error object that contains information about the error.
 * @throws {Error} Throws an error if the error object is not valid.
 *
 * @example
 * try {
 *     // Some code that may throw an error
 * } catch (error) {
 *     printErrorAndExit(error);
 * }
 */
/**
 * Shim for the process.emit method to handle uncaught exceptions.
 * This function overrides the default behavior of emitting the
 * "uncaughtException" event to provide custom error handling.
 *
 * When an uncaught exception occurs, this shim checks if there are
 * any listeners for the "uncaughtException" event. If there are no
 * listeners and an error stack is present, it calls the
 * printErrorAndExit function to handle the error and exit the process.
 *
 * @throws {Error} Throws an error if the printErrorAndExit function
 *                 encounters an issue while handling the exception.
 *
 * @example
 * // Usage example:
 * shimEmitUncaughtException();
 *
 * // This will now handle uncaught exceptions according to the custom logic defined.
 */
/**
 * Represents a collection that can store unique values, similar to a set,
 * but implemented using an array for storage. This class provides methods
 * to add, remove, and check for the existence of elements.
 *
 * @class
 * @constructor
 * @param {boolean} [i=false] - A flag indicating whether to use a Map for storage.
 * If true, a Map will be used; otherwise, a plain object will be created.
 *
 * @example
 * const mySet = new ArraySet();
 * mySet.add('value1');
 * console.log(mySet.has('value1')); // true
 * mySet.remove('value1');
 * console.log(mySet.has('value1')); // false
 */
/**
 * Converts a signed integer to its VLQ (Variable Length Quantity) representation.
 *
 * VLQ is a method of encoding integers in a way that uses fewer bits for smaller numbers.
 * This function takes a signed integer and returns its VLQ representation as an unsigned integer.
 *
 * @param {number} e - The signed integer to be converted to VLQ.
 * @returns {number} The VLQ representation of the input signed integer.
 *
 * @example
 * // Returns 0 for input 0
 * toVLQSigned(0);
 *
 * @example
 * // Returns 1 for input -1
 * toVLQSigned(-1);
 *
 * @example
 * // Returns 2 for input 1
 * toVLQSigned(1);
 *
 * @throws {TypeError} If the input is not a number.
 */
/**
 * Converts a variable-length quantity (VLQ) encoded signed integer to its corresponding integer value.
 *
 * A VLQ is a way of encoding signed integers in a compact format. This function takes an encoded
 * integer and decodes it to return the original signed integer.
 *
 * @param {number} e - The encoded VLQ integer to be decoded.
 * @returns {number} The decoded signed integer.
 *
 * @example
 * // Example usage:
 * const encodedValue = 5; // Example encoded value
 * const decodedValue = fromVLQSigned(encodedValue);
 * console.log(decodedValue); // Outputs the decoded signed integer
 *
 * @throws {TypeError} Throws an error if the input is not a number.
 */
/**
 * Performs a recursive binary search on a sorted array.
 *
 * This function searches for a specific element within a given range of the array and returns
 * the index of the element if found. If the element is not found, it returns -1. The search can
 * also be configured to find either the least upper bound or the greatest lower bound of the
 * specified element.
 *
 * @param {number} e - The starting index of the search range.
 * @param {number} n - The ending index of the search range.
 * @param {function} t - A comparison function that determines the order of elements.
 * @param {Array} o - The sorted array to search within.
 * @param {function} i - A function that is used to compare the target element with elements in the array.
 * @param {string} a - A flag indicating whether to find the least upper bound or greatest lower bound.
 *                      Possible values are 'LEAST_UPPER_BOUND' and 'GREATEST_LOWER_BOUND'.
 *
 * @returns {number} The index of the found element, or -1 if the element is not found.
 *
 * @throws {Error} Throws an error if the input parameters are invalid.
 *
 * @example
 * const index = recursiveSearch(0, sortedArray.length, compareFunction, sortedArray, targetElement, 'LEAST_UPPER_BOUND');
 * if (index !== -1) {
 *   console.log(`Element found at index: ${index}`);
 * } else {
 *   console.log('Element not found.');
 * }
 */
/**
 * Compares two generated positions and determines their order.
 *
 * This function evaluates the generated line and column numbers of two positions
 * and returns a boolean indicating whether the second position comes after the first
 * in the generated source.
 *
 * @param {Object} e - The first position object containing generated line and column.
 * @param {Object} r - The second position object containing generated line and column.
 * @param {number} e.generatedLine - The generated line number of the first position.
 * @param {number} e.generatedColumn - The generated column number of the first position.
 * @param {number} r.generatedLine - The generated line number of the second position.
 * @param {number} r.generatedColumn - The generated column number of the second position.
 * @returns {boolean} Returns true if the second position is after the first position,
 *                   otherwise returns false.
 *
 * @example
 * const pos1 = { generatedLine: 1, generatedColumn: 5 };
 * const pos2 = { generatedLine: 2, generatedColumn: 3 };
 * const result = generatedPositionAfter(pos1, pos2); // returns true
 *
 * @throws {TypeError} Throws an error if either argument is not an object or does not
 *                     contain the required properties.
 */
/**
 * Represents a list of mappings with internal storage and sorting capabilities.
 *
 * This class maintains an internal array to store mapping objects and provides
 * functionality to manage and sort these mappings.
 *
 * @class
 * @constructor
 * @property {Array} _array - The internal array that holds the mappings.
 * @property {boolean} _sorted - Indicates whether the mappings are sorted.
 * @property {Object} _last - Stores the last generated line and column information.
 * @property {number} _last.generatedLine - The line number of the last generated mapping.
 * @property {number} _last.generatedColumn - The column number of the last generated mapping.
 */
/**
 * Swaps two elements in an array at specified indices.
 *
 * This function takes an array and two indices, and it exchanges the elements
 * located at those indices. It modifies the original array in place.
 *
 * @param {Array} e - The array in which the elements will be swapped.
 * @param {number} r - The index of the first element to swap.
 * @param {number} n - The index of the second element to swap.
 * @throws {TypeError} Throws an error if the first parameter is not an array,
 *                     or if the indices are out of bounds.
 *
 * @example
 * const arr = [1, 2, 3];
 * swap(arr, 0, 2);
 * console.log(arr); // Output: [3, 2, 1]
 */
/**
 * Generates a random integer within a specified range.
 *
 * This function takes two parameters, a minimum and a maximum value, and returns
 * a random integer that is greater than or equal to the minimum value and less than
 * or equal to the maximum value.
 *
 * @param {number} e - The minimum value of the range (inclusive).
 * @param {number} r - The maximum value of the range (inclusive).
 * @returns {number} A random integer between the specified minimum and maximum values.
 *
 * @example
 * // Returns a random integer between 1 and 10
 * const randomValue = randomIntInRange(1, 10);
 *
 * @throws {RangeError} If the minimum value is greater than the maximum value.
 */
/**
 * Performs the QuickSort algorithm to sort an array in place.
 *
 * This function uses a randomized pivot selection to improve performance
 * on average. It recursively sorts the elements of the array based on the
 * provided comparator function.
 *
 * @param {Array} e - The array to be sorted.
 * @param {function} r - A comparator function that defines the sort order.
 *                       It should take two arguments and return a negative
 *                       number if the first argument is less than the second,
 *                       zero if they are equal, and a positive number if the
 *                       first argument is greater than the second.
 * @param {number} n - The starting index of the portion of the array to sort.
 * @param {number} t - The ending index of the portion of the array to sort.
 *
 * @throws {TypeError} Throws an error if the first argument is not an array
 *                     or if the comparator function is not a function.
 *
 * @example
 * const arr = [3, 6, 8, 10, 1, 2, 1];
 * const comparator = (a, b) => a - b;
 * doQuickSort(arr, comparator, 0, arr.length - 1);
 * console.log(arr); // Output: [1, 1, 2, 3, 6, 8, 10]
 */
/**
 * Creates a new instance of SourceMapConsumer.
 *
 * This function takes a source map input, which can either be a string or an object,
 * and returns an appropriate SourceMapConsumer instance based on the input type.
 *
 * @param {string|Object} e - The source map input, which can be a string representation
 *                            of the source map or an object containing the parsed map.
 * @param {Object} r - Additional options or context for the SourceMapConsumer.
 *
 * @returns {IndexedSourceMapConsumer|BasicSourceMapConsumer} An instance of either
 *          IndexedSourceMapConsumer or BasicSourceMapConsumer depending on the
 *          structure of the provided source map.
 *
 * @throws {Error} Throws an error if the input source map is invalid or cannot be parsed.
 *
 * @example
 * const consumer = new SourceMapConsumer(sourceMapString, options);
 */
/**
 * Creates a new instance of BasicSourceMapConsumer.
 * This class is responsible for parsing and managing source maps,
 * which are used to map compiled code back to the original source code.
 *
 * @param {string|Object} e - The source map input, which can be a string or an object.
 *                            If it's a string, it should be in the JSON format of a source map.
 * @param {string} r - The URL of the source map file.
 *
 * @throws {Error} Throws an error if the version of the source map is unsupported.
 *
 * @example
 * const consumer = new BasicSourceMapConsumer(sourceMapString, 'http://example.com/map.js');
 */
/**
 * Represents a mapping from a generated source to an original source.
 * This class is used to track the relationship between generated code and
 * its original source, including line and column information.
 *
 * @class
 * @property {number} generatedLine - The line number in the generated source.
 * @property {number} generatedColumn - The column number in the generated source.
 * @property {string|null} source - The source file associated with the mapping.
 * @property {number|null} originalLine - The line number in the original source.
 * @property {number|null} originalColumn - The column number in the original source.
 * @property {string|null} name - The name associated with the mapping, if any.
 *
 * @example
 * const mapping = new Mapping();
 * mapping.generatedLine = 10;
 * mapping.generatedColumn = 5;
 * mapping.source = 'example.js';
 * mapping.originalLine = 2;
 * mapping.originalColumn = 3;
 * mapping.name = 'myFunction';
 */
/**
 * Creates an instance of IndexedSourceMapConsumer.
 *
 * This constructor initializes the consumer with a source map input,
 * validating its version and sections. It throws errors for unsupported
 * versions and invalid section offsets.
 *
 * @param {string|Object} e - The source map input, which can be a string
 *                            or an object representing the source map.
 * @param {Object} r - Additional options or context for the consumer.
 *
 * @throws {Error} Throws an error if the source map version is unsupported.
 * @throws {Error} Throws an error if the sections contain a URL field,
 *                 as this feature is not implemented.
 * @throws {Error} Throws an error if the section offsets are not ordered
 *                 or overlapping.
 *
 * @example
 * const consumer = new IndexedSourceMapConsumer(sourceMapString, options);
 */
/**
 * Creates a new instance of the SourceMapGenerator.
 *
 * This constructor initializes a source map generator with the specified options.
 * It sets up the necessary properties for file, source root, validation skipping,
 * sources, names, and mappings.
 *
 * @param {Object} [e] - An optional configuration object.
 * @param {string} [e.file] - The name of the generated file.
 * @param {string} [e.sourceRoot] - The root URL for the sources.
 * @param {boolean} [e.skipValidation=false] - A flag to skip validation checks.
 *
 * @throws {Error} Throws an error if the provided configuration is invalid.
 *
 * @example
 * const generator = new SourceMapGenerator({
 *   file: 'out.js',
 *   sourceRoot: '/source',
 *   skipValidation: true
 * });
 */
/**
 * Represents a source node in a source map.
 *
 * This class is used to create a node that can hold information about
 * its children, source contents, and its position in the source file.
 *
 * @constructor
 * @param {number|null} e - The line number of the source node. If not provided, defaults to null.
 * @param {number|null} r - The column number of the source node. If not provided, defaults to null.
 * @param {string|null} n - The source file associated with this node. If not provided, defaults to null.
 * @param {string|null} o - The name of the node. If not provided, defaults to null.
 * @param {SourceNode|Array<SourceNode>|null} [t] - An optional child node or an array of child nodes to add to this node.
 *
 * @throws {TypeError} Throws an error if the parameters are of incorrect type.
 *
 * @example
 * const node = new SourceNode(1, 0, 'source.js', 'myFunction');
 *
 * @example
 * const childNode = new SourceNode(2, 5, 'source.js', 'childFunction');
 * const parentNode = new SourceNode(1, 0, 'source.js', 'parentFunction', childNode);
 */
/**
 * Retrieves the next line from a collection of lines.
 *
 * This function checks if there are more lines available in the collection.
 * If there are, it returns the next line; otherwise, it returns `undefined`.
 *
 * @returns {string|undefined} The next line from the collection or `undefined` if there are no more lines.
 *
 * @example
 * const line = getNextLine();
 * if (line !== undefined) {
 *   console.log("Next line:", line);
 * } else {
 *   console.log("No more lines available.");
 * }
 */
/**
 * Adds a mapping with the specified code to the mapping collection.
 *
 * This function checks if the provided mapping event is null or if its source is undefined.
 * If so, it adds the provided code directly to the mapping collection. Otherwise, it constructs
 * a new source node using the original line and column from the event, along with the source code
 * and the provided code.
 *
 * @param {Object} e - The mapping event object which may contain source information.
 * @param {string} r - The code to be added to the mapping collection.
 *
 * @throws {TypeError} Throws an error if the provided event is not an object.
 *
 * @example
 * // Example usage of addMappingWithCode
 * addMappingWithCode({ originalLine: 1, originalColumn: 2, source: 'source.js' }, 'console.log("Hello World");');
 */
/**
 * Retrieves the value of a specified property from an object.
 * If the property does not exist and a default value is provided,
 * the default value will be returned. If the property is missing
 * and no default value is provided, an error will be thrown.
 *
 * @param {Object} e - The object from which to retrieve the property.
 * @param {string} r - The name of the property to retrieve.
 * @param {*} [n] - An optional default value to return if the property is not found.
 * @returns {*} The value of the specified property or the default value if provided.
 * @throws {Error} Throws an error if the specified property is required but not found
 *                 and no default value is provided.
 *
 * @example
 * const obj = { key: 'value' };
 * const result = getArg(obj, 'key'); // returns 'value'
 * const resultWithDefault = getArg(obj, 'missingKey', 'default'); // returns 'default'
 * getArg(obj, 'missingKey'); // throws Error: '"missingKey" is a required argument.'
 */
/**
 * Parses a URL string and extracts its components.
 *
 * This function takes a URL string as input and uses a regular expression
 * to match and extract the scheme, authentication information, host,
 * port, and path from the URL. If the URL does not match the expected
 * format, the function returns null.
 *
 * @param {string} e - The URL string to be parsed.
 * @returns {Object|null} An object containing the parsed components of the URL,
 *                       or null if the URL is invalid. The object has the following properties:
 *                       - scheme {string} - The scheme of the URL (e.g., 'http', 'https').
 *                       - auth {string} - The authentication information (if present).
 *                       - host {string} - The host of the URL.
 *                       - port {string} - The port of the URL (if present).
 *                       - path {string} - The path of the URL.
 *
 * @example
 * const result = urlParse('https://user:pass@host.com:8080/path');
 * console.log(result);
 * // Output: { scheme: 'https', auth: 'user:pass', host: 'host.com', port: '8080', path: '/path' }
 *
 * @example
 * const result = urlParse('invalid-url');
 * console.log(result);
 * // Output: null
 */
/**
 * Generates a URL string based on the provided components.
 *
 * This function constructs a URL from the given scheme, authentication, host, port, and path.
 * It concatenates these components in the correct format to produce a valid URL.
 *
 * @param {Object} e - The components used to generate the URL.
 * @param {string} [e.scheme] - The scheme of the URL (e.g., 'http', 'https').
 * @param {string} [e.auth] - The authentication information (e.g., 'user:password').
 * @param {string} [e.host] - The host of the URL (e.g., 'www.example.com').
 * @param {number} [e.port] - The port number (e.g., 80, 443).
 * @param {string} [e.path] - The path of the URL (e.g., '/path/to/resource').
 *
 * @returns {string} The generated URL string.
 *
 * @example
 * const url = urlGenerate({
 *   scheme: 'https',
 *   auth: 'user:password',
 *   host: 'www.example.com',
 *   port: 443,
 *   path: '/path/to/resource'
 * });
 * console.log(url); // Outputs: 'https://user:password@www.example.com:443/path/to/resource'
 */
/**
 * Normalizes a given URL or path by resolving relative segments such as "." and "..".
 *
 * This function takes a string input representing a URL or file path, parses it,
 * and returns a normalized version of the path. If the input is a valid URL, the
 * function will also update the path component of the URL.
 *
 * @param {string} e - The URL or path to normalize.
 * @returns {string} The normalized URL or path.
 *
 * @example
 * // Returns '/path/to/resource'
 * normalize('/path/to/../to/resource');
 *
 * @example
 * // Returns 'http://example.com/path/to/resource'
 * normalize('http://example.com/path/to/../resource');
 *
 * @throws {Error} Throws an error if the input is not a valid string.
 */
/**
 * Joins two URL components into a single URL.
 *
 * This function takes two strings representing parts of a URL and combines them
 * according to specific rules. If either component is an empty string, it defaults
 * to a period ('.'). The function also handles parsing and normalizing the URL
 * components before joining them.
 *
 * @param {string} e - The first URL component. If empty, defaults to '.'.
 * @param {string} r - The second URL component. If empty, defaults to '.'.
 * @returns {string} The combined URL as a string.
 *
 * @throws {Error} Throws an error if the URL components cannot be parsed correctly.
 *
 * @example
 * // Example of joining two URL components
 * const result = join('http://example.com', 'path/to/resource');
 * console.log(result); // Outputs: 'http://example.com/path/to/resource'
 *
 * @example
 * // Example with default values
 * const result = join('', 'path/to/resource');
 * console.log(result); // Outputs: './path/to/resource'
 */
/**
 * Computes a relative path from a given base path to a target path.
 *
 * This function takes two paths as input: a base path and a target path.
 * It returns a relative path that can be used to navigate from the base
 * path to the target path. If the base path is an empty string, it defaults
 * to the current directory ("./"). The function handles cases where the
 * base path may end with a slash and ensures that the resulting relative
 * path is correctly formatted.
 *
 * @param {string} e - The base path from which to calculate the relative path.
 * @param {string} r - The target path to which the relative path is calculated.
 * @returns {string} The relative path from the base path to the target path.
 *
 * @example
 * // Example usage:
 * const basePath = '/users/documents';
 * const targetPath = '/users/documents/projects/file.txt';
 * const result = relative(basePath, targetPath);
 * console.log(result); // Outputs: 'projects/file.txt'
 *
 * @throws {Error} Throws an error if the base path is invalid or if it cannot
 * be resolved to the target path.
 */
/**
 * Returns the input value unchanged.
 *
 * This function is a simple identity function that takes a single argument
 * and returns it without any modification. It can be useful in functional
 * programming contexts where a function is required but no transformation
 * is needed.
 *
 * @param {any} e - The value to be returned.
 * @returns {any} The same value that was passed as the argument.
 *
 * @example
 * const result = identity(5);
 * console.log(result); // 5
 *
 * @example
 * const str = identity("Hello, World!");
 * console.log(str); // "Hello, World!"
 */
/**
 * Converts a given input into a string representation suitable for a specific context.
 * If the input is identified as a prototype string, it prefixes the string with a dollar sign ('$').
 * Otherwise, it returns the input as is.
 *
 * @param {string|*} e - The input to be converted. Can be any type, but is expected to be a string for prototype checking.
 * @returns {string|*} The modified string if the input is a prototype string, otherwise returns the original input.
 *
 * @example
 * // Example usage:
 * const result1 = toSetString('example'); // returns 'example'
 * const result2 = toSetString('protoString'); // returns '$protoString' if 'protoString' is a prototype string
 *
 * @throws {TypeError} Throws an error if the input is not of expected type.
 */
/**
 * Converts a given string from a set representation to its original form.
 *
 * This function checks if the input string is in a prototype format. If it is,
 * the function removes the first character and returns the modified string.
 * If the input string is not in prototype format, it returns the string as is.
 *
 * @param {string} e - The input string to be converted.
 * @returns {string} The converted string, either modified or unchanged based on its format.
 *
 * @example
 * // Returns 'exampleString'
 * fromSetString('exampleString');
 *
 * @example
 * // Returns 'stringWithoutProto'
 * fromSetString('pstringWithoutProto'); // Assuming 'p' indicates a prototype format
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 */
/**
 * Checks if the provided string is a "proto" string.
 * A proto string is defined as a string that is at least 9 characters long,
 * ends with "__otopro__" and starts with one or more dollar signs ($).
 *
 * @param {string} e - The string to be checked.
 * @returns {boolean} Returns true if the string is a proto string, otherwise false.
 *
 * @example
 * // returns true
 * isProtoString("$$$$$$$$__otopro__");
 *
 * @example
 * // returns false
 * isProtoString("not_a_proto_string");
 *
 * @throws {TypeError} Throws an error if the input is not a string.
 */
/**
 * Compares two objects based on their original and generated positions,
 * as well as their names. This function is useful for sorting or ordering
 * objects that represent code positions in a source map or similar context.
 *
 * @param {Object} e - The first object to compare, which should have properties
 *                     related to source mapping, including source, originalLine,
 *                     originalColumn, generatedLine, generatedColumn, and name.
 * @param {Object} r - The second object to compare, with the same expected properties
 *                     as the first object.
 * @param {boolean} n - A flag that indicates whether to consider the generated
 *                      column in the comparison. If true, the generated column
 *                      will be included in the comparison logic.
 * @returns {number} A negative number if the first object should come before the
 *                   second object, a positive number if it should come after,
 *                   and zero if they are considered equal based on the comparison.
 *
 * @throws {TypeError} If either of the provided objects does not have the expected
 *                     properties for comparison.
 *
 * @example
 * const result = compareByOriginalPositions(obj1, obj2, true);
 * if (result < 0) {
 *   console.log('obj1 comes before obj2');
 * } else if (result > 0) {
 *   console.log('obj1 comes after obj2');
 * } else {
 *   console.log('obj1 and obj2 are equal');
 * }
 */
/**
 * Compares two objects based on their generated and original positions,
 * as well as their source and name properties.
 *
 * The comparison is performed in the following order:
 * 1. Generated line number
 * 2. Generated column number (if not equal or if the third parameter is true)
 * 3. Source string comparison
 * 4. Original line number
 * 5. Original column number
 * 6. Name string comparison
 *
 * @param {Object} e - The first object to compare, expected to have properties:
 *                     generatedLine, generatedColumn, source, originalLine,
 *                     originalColumn, and name.
 * @param {Object} r - The second object to compare, expected to have the same properties as `e`.
 * @param {boolean} [n=false] - Optional flag that influences the comparison of generated columns.
 *
 * @returns {number} A negative number if `e` is less than `r`, a positive number if `e` is greater than `r`,
 *                   and zero if they are considered equal based on the comparison criteria.
 *
 * @throws {TypeError} If either `e` or `r` is not an object or does not have the required properties.
 *
 * @example
 * const result = compareByGeneratedPositionsDeflated(obj1, obj2, true);
 * console.log(result); // Outputs the comparison result based on the defined criteria.
 */
/**
 * Compares two values for equality and order.
 *
 * This function checks if the two provided values are equal, and if not, it determines their order.
 * It handles null values by treating them as greater than any other value.
 *
 * @param {any} e - The first value to compare.
 * @param {any} r - The second value to compare.
 * @returns {number}
 *   - Returns 0 if both values are equal.
 *   - Returns 1 if the first value is greater than the second or if the first value is null.
 *   - Returns -1 if the first value is less than the second or if the second value is null.
 *
 * @throws {TypeError} Throws an error if the arguments are not comparable.
 *
 * @example
 * // Example usage:
 * strcmp(5, 10); // returns -1
 * strcmp(10, 5); // returns 1
 * strcmp(null, 5); // returns 1
 * strcmp(5, null); // returns -1
 * strcmp(5, 5); // returns 0
 */
/**
 * Compares two objects based on their generated and original positions,
 * as well as their source and name properties.
 *
 * The comparison is performed in the following order:
 * 1. Generated line number
 * 2. Generated column number
 * 3. Source string
 * 4. Original line number
 * 5. Original column number
 * 6. Name string
 *
 * @param {Object} e - The first object to compare, which should have
 *                     properties: generatedLine, generatedColumn,
 *                     source, originalLine, originalColumn, and name.
 * @param {Object} r - The second object to compare, which should have
 *                     the same properties as the first object.
 * @returns {number} A negative number if `e` is less than `r`,
 *                  a positive number if `e` is greater than `r`,
 *                  and zero if they are considered equal.
 *
 * @throws {TypeError} If either `e` or `r` is not an object or does not
 *                     contain the required properties.
 *
 * @example
 * const result = compareByGeneratedPositionsInflated(obj1, obj2);
 * if (result < 0) {
 *   console.log('obj1 is less than obj2');
 * } else if (result > 0) {
 *   console.log('obj1 is greater than obj2');
 * } else {
 *   console.log('obj1 is equal to obj2');
 * }
 */
/**
 * Parses a source map input string and returns the corresponding JavaScript object.
 *
 * This function takes a string input that may contain a source map in a specific format,
 * removes any leading characters that are not part of the JSON structure, and then parses
 * the cleaned string into a JavaScript object using `JSON.parse`.
 *
 * @param {string} e - The source map input string to be parsed.
 * @returns {Object} The parsed JavaScript object representing the source map.
 *
 * @throws {SyntaxError} Throws an error if the input string is not valid JSON after processing.
 *
 * @example
 * const input = ")]}'\n{\"version\":3,\"file\":\"helloworld.js\",\"sources\":[\"helloworld.ts\"],\"names\":[],\"mappings\":\"AAAA\"}";
 * const result = parseSourceMapInput(input);
 * console.log(result); // { version: 3, file: 'helloworld.js', sources: [ 'helloworld.ts' ], names: [], mappings: 'AAAA' }
 */
/**
 * Computes the source URL based on the provided parameters.
 *
 * This function constructs a source URL by combining a base URL, an optional path,
 * and an optional source map URL. It ensures that the resulting URL is properly formatted
 * and normalized.
 *
 * @param {string} e - The base URL to which the path will be appended.
 * @param {string} [r=""] - An optional path that will be appended to the base URL.
 * @param {string} [n] - An optional source map URL that will be parsed and used to
 *                       generate the final URL.
 * @returns {string} The normalized source URL.
 * @throws {Error} Throws an error if the source map URL cannot be parsed.
 *
 * @example
 * // Example usage:
 * const url = computeSourceURL('http://example.com', 'path/to/resource', 'sourceMapURL');
 * console.log(url); // Outputs the computed source URL.
 */
/**
 * A module loader function that retrieves and initializes modules.
 *
 * This function checks if a module has already been loaded. If it has, it returns the module's exports.
 * If not, it initializes the module and then returns its exports.
 *
 * @param {string} n - The identifier of the module to be loaded.
 * @returns {Object} The exports of the loaded module.
 *
 * @throws {Error} Throws an error if the module fails to initialize.
 *
 * @example
 * const myModule = __webpack_require__('myModuleId');
 * console.log(myModule);
 */
(()=>{var e={296:e=>{var r=Object.prototype.toString;var n=typeof Buffer!=="undefined"&&typeof Buffer.alloc==="function"&&typeof Buffer.allocUnsafe==="function"&&typeof Buffer.from==="function";function isArrayBuffer(e){return r.call(e).slice(8,-1)==="ArrayBuffer"}function fromArrayBuffer(e,r,t){r>>>=0;var o=e.byteLength-r;if(o<0){throw new RangeError("'offset' is out of bounds")}if(t===undefined){t=o}else{t>>>=0;if(t>o){throw new RangeError("'length' is out of bounds")}}return n?Buffer.from(e.slice(r,r+t)):new Buffer(new Uint8Array(e.slice(r,r+t)))}function fromString(e,r){if(typeof r!=="string"||r===""){r="utf8"}if(!Buffer.isEncoding(r)){throw new TypeError('"encoding" must be a valid string encoding')}return n?Buffer.from(e,r):new Buffer(e,r)}function bufferFrom(e,r,t){if(typeof e==="number"){throw new TypeError('"value" argument must not be a number')}if(isArrayBuffer(e)){return fromArrayBuffer(e,r,t)}if(typeof e==="string"){return fromString(e,r)}return n?Buffer.from(e):new Buffer(e)}e.exports=bufferFrom},599:(e,r,n)=>{e=n.nmd(e);var t=n(927).SourceMapConsumer;var o=n(928);var i;try{i=n(896);if(!i.existsSync||!i.readFileSync){i=null}}catch(e){}var a=n(296);function dynamicRequire(e,r){return e.require(r)}var u=false;var s=false;var l=false;var c="auto";var p={};var f={};var g=/^data:application\/json[^,]+base64,/;var d=[];var h=[];function isInBrowser(){if(c==="browser")return true;if(c==="node")return false;return typeof window!=="undefined"&&typeof XMLHttpRequest==="function"&&!(window.require&&window.module&&window.process&&window.process.type==="renderer")}function hasGlobalProcessEventEmitter(){return typeof process==="object"&&process!==null&&typeof process.on==="function"}function globalProcessVersion(){if(typeof process==="object"&&process!==null){return process.version}else{return""}}function globalProcessStderr(){if(typeof process==="object"&&process!==null){return process.stderr}}function globalProcessExit(e){if(typeof process==="object"&&process!==null&&typeof process.exit==="function"){return process.exit(e)}}function handlerExec(e){return function(r){for(var n=0;n<e.length;n++){var t=e[n](r);if(t){return t}}return null}}var m=handlerExec(d);d.push((function(e){e=e.trim();if(/^file:/.test(e)){e=e.replace(/file:\/\/\/(\w:)?/,(function(e,r){return r?"":"/"}))}if(e in p){return p[e]}var r="";try{if(!i){var n=new XMLHttpRequest;n.open("GET",e,false);n.send(null);if(n.readyState===4&&n.status===200){r=n.responseText}}else if(i.existsSync(e)){r=i.readFileSync(e,"utf8")}}catch(e){}return p[e]=r}));function supportRelativeURL(e,r){if(!e)return r;var n=o.dirname(e);var t=/^\w+:\/\/[^\/]*/.exec(n);var i=t?t[0]:"";var a=n.slice(i.length);if(i&&/^\/\w\:/.test(a)){i+="/";return i+o.resolve(n.slice(i.length),r).replace(/\\/g,"/")}return i+o.resolve(n.slice(i.length),r)}function retrieveSourceMapURL(e){var r;if(isInBrowser()){try{var n=new XMLHttpRequest;n.open("GET",e,false);n.send(null);r=n.readyState===4?n.responseText:null;var t=n.getResponseHeader("SourceMap")||n.getResponseHeader("X-SourceMap");if(t){return t}}catch(e){}}r=m(e);var o=/(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/gm;var i,a;while(a=o.exec(r))i=a;if(!i)return null;return i[1]}var v=handlerExec(h);h.push((function(e){var r=retrieveSourceMapURL(e);if(!r)return null;var n;if(g.test(r)){var t=r.slice(r.indexOf(",")+1);n=a(t,"base64").toString();r=e}else{r=supportRelativeURL(e,r);n=m(r)}if(!n){return null}return{url:r,map:n}}));function mapSourcePosition(e){var r=f[e.source];if(!r){var n=v(e.source);if(n){r=f[e.source]={url:n.url,map:new t(n.map)};if(r.map.sourcesContent){r.map.sources.forEach((function(e,n){var t=r.map.sourcesContent[n];if(t){var o=supportRelativeURL(r.url,e);p[o]=t}}))}}else{r=f[e.source]={url:null,map:null}}}if(r&&r.map&&typeof r.map.originalPositionFor==="function"){var o=r.map.originalPositionFor(e);if(o.source!==null){o.source=supportRelativeURL(r.url,o.source);return o}}return e}function mapEvalOrigin(e){var r=/^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(e);if(r){var n=mapSourcePosition({source:r[2],line:+r[3],column:r[4]-1});return"eval at "+r[1]+" ("+n.source+":"+n.line+":"+(n.column+1)+")"}r=/^eval at ([^(]+) \((.+)\)$/.exec(e);if(r){return"eval at "+r[1]+" ("+mapEvalOrigin(r[2])+")"}return e}function CallSiteToString(){var e;var r="";if(this.isNative()){r="native"}else{e=this.getScriptNameOrSourceURL();if(!e&&this.isEval()){r=this.getEvalOrigin();r+=", "}if(e){r+=e}else{r+="<anonymous>"}var n=this.getLineNumber();if(n!=null){r+=":"+n;var t=this.getColumnNumber();if(t){r+=":"+t}}}var o="";var i=this.getFunctionName();var a=true;var u=this.isConstructor();var s=!(this.isToplevel()||u);if(s){var l=this.getTypeName();if(l==="[object Object]"){l="null"}var c=this.getMethodName();if(i){if(l&&i.indexOf(l)!=0){o+=l+"."}o+=i;if(c&&i.indexOf("."+c)!=i.length-c.length-1){o+=" [as "+c+"]"}}else{o+=l+"."+(c||"<anonymous>")}}else if(u){o+="new "+(i||"<anonymous>")}else if(i){o+=i}else{o+=r;a=false}if(a){o+=" ("+r+")"}return o}function cloneCallSite(e){var r={};Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(n){r[n]=/^(?:is|get)/.test(n)?function(){return e[n].call(e)}:e[n]}));r.toString=CallSiteToString;return r}function wrapCallSite(e,r){if(r===undefined){r={nextPosition:null,curPosition:null}}if(e.isNative()){r.curPosition=null;return e}var n=e.getFileName()||e.getScriptNameOrSourceURL();if(n){var t=e.getLineNumber();var o=e.getColumnNumber()-1;var i=/^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;var a=i.test(globalProcessVersion())?0:62;if(t===1&&o>a&&!isInBrowser()&&!e.isEval()){o-=a}var u=mapSourcePosition({source:n,line:t,column:o});r.curPosition=u;e=cloneCallSite(e);var s=e.getFunctionName;e.getFunctionName=function(){if(r.nextPosition==null){return s()}return r.nextPosition.name||s()};e.getFileName=function(){return u.source};e.getLineNumber=function(){return u.line};e.getColumnNumber=function(){return u.column+1};e.getScriptNameOrSourceURL=function(){return u.source};return e}var l=e.isEval()&&e.getEvalOrigin();if(l){l=mapEvalOrigin(l);e=cloneCallSite(e);e.getEvalOrigin=function(){return l};return e}return e}function prepareStackTrace(e,r){if(l){p={};f={}}var n=e.name||"Error";var t=e.message||"";var o=n+": "+t;var i={nextPosition:null,curPosition:null};var a=[];for(var u=r.length-1;u>=0;u--){a.push("\n    at "+wrapCallSite(r[u],i));i.nextPosition=i.curPosition}i.curPosition=i.nextPosition=null;return o+a.reverse().join("")}function getErrorSource(e){var r=/\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(e.stack);if(r){var n=r[1];var t=+r[2];var o=+r[3];var a=p[n];if(!a&&i&&i.existsSync(n)){try{a=i.readFileSync(n,"utf8")}catch(e){a=""}}if(a){var u=a.split(/(?:\r\n|\r|\n)/)[t-1];if(u){return n+":"+t+"\n"+u+"\n"+new Array(o).join(" ")+"^"}}}return null}function printErrorAndExit(e){var r=getErrorSource(e);var n=globalProcessStderr();if(n&&n._handle&&n._handle.setBlocking){n._handle.setBlocking(true)}if(r){console.error();console.error(r)}console.error(e.stack);globalProcessExit(1)}function shimEmitUncaughtException(){var e=process.emit;process.emit=function(r){if(r==="uncaughtException"){var n=arguments[1]&&arguments[1].stack;var t=this.listeners(r).length>0;if(n&&!t){return printErrorAndExit(arguments[1])}}return e.apply(this,arguments)}}var S=d.slice(0);var _=h.slice(0);r.wrapCallSite=wrapCallSite;r.getErrorSource=getErrorSource;r.mapSourcePosition=mapSourcePosition;r.retrieveSourceMap=v;r.install=function(r){r=r||{};if(r.environment){c=r.environment;if(["node","browser","auto"].indexOf(c)===-1){throw new Error("environment "+c+" was unknown. Available options are {auto, browser, node}")}}if(r.retrieveFile){if(r.overrideRetrieveFile){d.length=0}d.unshift(r.retrieveFile)}if(r.retrieveSourceMap){if(r.overrideRetrieveSourceMap){h.length=0}h.unshift(r.retrieveSourceMap)}if(r.hookRequire&&!isInBrowser()){var n=dynamicRequire(e,"module");var t=n.prototype._compile;if(!t.__sourceMapSupport){n.prototype._compile=function(e,r){p[r]=e;f[r]=undefined;return t.call(this,e,r)};n.prototype._compile.__sourceMapSupport=true}}if(!l){l="emptyCacheBetweenOperations"in r?r.emptyCacheBetweenOperations:false}if(!u){u=true;Error.prepareStackTrace=prepareStackTrace}if(!s){var o="handleUncaughtExceptions"in r?r.handleUncaughtExceptions:true;try{var i=dynamicRequire(e,"worker_threads");if(i.isMainThread===false){o=false}}catch(e){}if(o&&hasGlobalProcessEventEmitter()){s=true;shimEmitUncaughtException()}}};r.resetRetrieveHandlers=function(){d.length=0;h.length=0;d=S.slice(0);h=_.slice(0);v=handlerExec(h);m=handlerExec(d)}},517:(e,r,n)=>{var t=n(297);var o=Object.prototype.hasOwnProperty;var i=typeof Map!=="undefined";function ArraySet(){this._array=[];this._set=i?new Map:Object.create(null)}ArraySet.fromArray=function ArraySet_fromArray(e,r){var n=new ArraySet;for(var t=0,o=e.length;t<o;t++){n.add(e[t],r)}return n};ArraySet.prototype.size=function ArraySet_size(){return i?this._set.size:Object.getOwnPropertyNames(this._set).length};ArraySet.prototype.add=function ArraySet_add(e,r){var n=i?e:t.toSetString(e);var a=i?this.has(e):o.call(this._set,n);var u=this._array.length;if(!a||r){this._array.push(e)}if(!a){if(i){this._set.set(e,u)}else{this._set[n]=u}}};ArraySet.prototype.has=function ArraySet_has(e){if(i){return this._set.has(e)}else{var r=t.toSetString(e);return o.call(this._set,r)}};ArraySet.prototype.indexOf=function ArraySet_indexOf(e){if(i){var r=this._set.get(e);if(r>=0){return r}}else{var n=t.toSetString(e);if(o.call(this._set,n)){return this._set[n]}}throw new Error('"'+e+'" is not in the set.')};ArraySet.prototype.at=function ArraySet_at(e){if(e>=0&&e<this._array.length){return this._array[e]}throw new Error("No element indexed by "+e)};ArraySet.prototype.toArray=function ArraySet_toArray(){return this._array.slice()};r.C=ArraySet},818:(e,r,n)=>{var t=n(158);var o=5;var i=1<<o;var a=i-1;var u=i;function toVLQSigned(e){return e<0?(-e<<1)+1:(e<<1)+0}function fromVLQSigned(e){var r=(e&1)===1;var n=e>>1;return r?-n:n}r.encode=function base64VLQ_encode(e){var r="";var n;var i=toVLQSigned(e);do{n=i&a;i>>>=o;if(i>0){n|=u}r+=t.encode(n)}while(i>0);return r};r.decode=function base64VLQ_decode(e,r,n){var i=e.length;var s=0;var l=0;var c,p;do{if(r>=i){throw new Error("Expected more digits in base 64 VLQ value.")}p=t.decode(e.charCodeAt(r++));if(p===-1){throw new Error("Invalid base64 digit: "+e.charAt(r-1))}c=!!(p&u);p&=a;s=s+(p<<l);l+=o}while(c);n.value=fromVLQSigned(s);n.rest=r}},158:(e,r)=>{var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");r.encode=function(e){if(0<=e&&e<n.length){return n[e]}throw new TypeError("Must be between 0 and 63: "+e)};r.decode=function(e){var r=65;var n=90;var t=97;var o=122;var i=48;var a=57;var u=43;var s=47;var l=26;var c=52;if(r<=e&&e<=n){return e-r}if(t<=e&&e<=o){return e-t+l}if(i<=e&&e<=a){return e-i+c}if(e==u){return 62}if(e==s){return 63}return-1}},197:(e,r)=>{r.GREATEST_LOWER_BOUND=1;r.LEAST_UPPER_BOUND=2;function recursiveSearch(e,n,t,o,i,a){var u=Math.floor((n-e)/2)+e;var s=i(t,o[u],true);if(s===0){return u}else if(s>0){if(n-u>1){return recursiveSearch(u,n,t,o,i,a)}if(a==r.LEAST_UPPER_BOUND){return n<o.length?n:-1}else{return u}}else{if(u-e>1){return recursiveSearch(e,u,t,o,i,a)}if(a==r.LEAST_UPPER_BOUND){return u}else{return e<0?-1:e}}}r.search=function search(e,n,t,o){if(n.length===0){return-1}var i=recursiveSearch(-1,n.length,e,n,t,o||r.GREATEST_LOWER_BOUND);if(i<0){return-1}while(i-1>=0){if(t(n[i],n[i-1],true)!==0){break}--i}return i}},24:(e,r,n)=>{var t=n(297);function generatedPositionAfter(e,r){var n=e.generatedLine;var o=r.generatedLine;var i=e.generatedColumn;var a=r.generatedColumn;return o>n||o==n&&a>=i||t.compareByGeneratedPositionsInflated(e,r)<=0}function MappingList(){this._array=[];this._sorted=true;this._last={generatedLine:-1,generatedColumn:0}}MappingList.prototype.unsortedForEach=function MappingList_forEach(e,r){this._array.forEach(e,r)};MappingList.prototype.add=function MappingList_add(e){if(generatedPositionAfter(this._last,e)){this._last=e;this._array.push(e)}else{this._sorted=false;this._array.push(e)}};MappingList.prototype.toArray=function MappingList_toArray(){if(!this._sorted){this._array.sort(t.compareByGeneratedPositionsInflated);this._sorted=true}return this._array};r.P=MappingList},299:(e,r)=>{function swap(e,r,n){var t=e[r];e[r]=e[n];e[n]=t}function randomIntInRange(e,r){return Math.round(e+Math.random()*(r-e))}function doQuickSort(e,r,n,t){if(n<t){var o=randomIntInRange(n,t);var i=n-1;swap(e,o,t);var a=e[t];for(var u=n;u<t;u++){if(r(e[u],a)<=0){i+=1;swap(e,i,u)}}swap(e,i+1,u);var s=i+1;doQuickSort(e,r,n,s-1);doQuickSort(e,r,s+1,t)}}r.g=function(e,r){doQuickSort(e,r,0,e.length-1)}},684:(e,r,n)=>{var t;var o=n(297);var i=n(197);var a=n(517).C;var u=n(818);var s=n(299).g;function SourceMapConsumer(e,r){var n=e;if(typeof e==="string"){n=o.parseSourceMapInput(e)}return n.sections!=null?new IndexedSourceMapConsumer(n,r):new BasicSourceMapConsumer(n,r)}SourceMapConsumer.fromSourceMap=function(e,r){return BasicSourceMapConsumer.fromSourceMap(e,r)};SourceMapConsumer.prototype._version=3;SourceMapConsumer.prototype.__generatedMappings=null;Object.defineProperty(SourceMapConsumer.prototype,"_generatedMappings",{configurable:true,enumerable:true,get:function(){if(!this.__generatedMappings){this._parseMappings(this._mappings,this.sourceRoot)}return this.__generatedMappings}});SourceMapConsumer.prototype.__originalMappings=null;Object.defineProperty(SourceMapConsumer.prototype,"_originalMappings",{configurable:true,enumerable:true,get:function(){if(!this.__originalMappings){this._parseMappings(this._mappings,this.sourceRoot)}return this.__originalMappings}});SourceMapConsumer.prototype._charIsMappingSeparator=function SourceMapConsumer_charIsMappingSeparator(e,r){var n=e.charAt(r);return n===";"||n===","};SourceMapConsumer.prototype._parseMappings=function SourceMapConsumer_parseMappings(e,r){throw new Error("Subclasses must implement _parseMappings")};SourceMapConsumer.GENERATED_ORDER=1;SourceMapConsumer.ORIGINAL_ORDER=2;SourceMapConsumer.GREATEST_LOWER_BOUND=1;SourceMapConsumer.LEAST_UPPER_BOUND=2;SourceMapConsumer.prototype.eachMapping=function SourceMapConsumer_eachMapping(e,r,n){var t=r||null;var i=n||SourceMapConsumer.GENERATED_ORDER;var a;switch(i){case SourceMapConsumer.GENERATED_ORDER:a=this._generatedMappings;break;case SourceMapConsumer.ORIGINAL_ORDER:a=this._originalMappings;break;default:throw new Error("Unknown order of iteration.")}var u=this.sourceRoot;a.map((function(e){var r=e.source===null?null:this._sources.at(e.source);r=o.computeSourceURL(u,r,this._sourceMapURL);return{source:r,generatedLine:e.generatedLine,generatedColumn:e.generatedColumn,originalLine:e.originalLine,originalColumn:e.originalColumn,name:e.name===null?null:this._names.at(e.name)}}),this).forEach(e,t)};SourceMapConsumer.prototype.allGeneratedPositionsFor=function SourceMapConsumer_allGeneratedPositionsFor(e){var r=o.getArg(e,"line");var n={source:o.getArg(e,"source"),originalLine:r,originalColumn:o.getArg(e,"column",0)};n.source=this._findSourceIndex(n.source);if(n.source<0){return[]}var t=[];var a=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",o.compareByOriginalPositions,i.LEAST_UPPER_BOUND);if(a>=0){var u=this._originalMappings[a];if(e.column===undefined){var s=u.originalLine;while(u&&u.originalLine===s){t.push({line:o.getArg(u,"generatedLine",null),column:o.getArg(u,"generatedColumn",null),lastColumn:o.getArg(u,"lastGeneratedColumn",null)});u=this._originalMappings[++a]}}else{var l=u.originalColumn;while(u&&u.originalLine===r&&u.originalColumn==l){t.push({line:o.getArg(u,"generatedLine",null),column:o.getArg(u,"generatedColumn",null),lastColumn:o.getArg(u,"lastGeneratedColumn",null)});u=this._originalMappings[++a]}}}return t};r.SourceMapConsumer=SourceMapConsumer;function BasicSourceMapConsumer(e,r){var n=e;if(typeof e==="string"){n=o.parseSourceMapInput(e)}var t=o.getArg(n,"version");var i=o.getArg(n,"sources");var u=o.getArg(n,"names",[]);var s=o.getArg(n,"sourceRoot",null);var l=o.getArg(n,"sourcesContent",null);var c=o.getArg(n,"mappings");var p=o.getArg(n,"file",null);if(t!=this._version){throw new Error("Unsupported version: "+t)}if(s){s=o.normalize(s)}i=i.map(String).map(o.normalize).map((function(e){return s&&o.isAbsolute(s)&&o.isAbsolute(e)?o.relative(s,e):e}));this._names=a.fromArray(u.map(String),true);this._sources=a.fromArray(i,true);this._absoluteSources=this._sources.toArray().map((function(e){return o.computeSourceURL(s,e,r)}));this.sourceRoot=s;this.sourcesContent=l;this._mappings=c;this._sourceMapURL=r;this.file=p}BasicSourceMapConsumer.prototype=Object.create(SourceMapConsumer.prototype);BasicSourceMapConsumer.prototype.consumer=SourceMapConsumer;BasicSourceMapConsumer.prototype._findSourceIndex=function(e){var r=e;if(this.sourceRoot!=null){r=o.relative(this.sourceRoot,r)}if(this._sources.has(r)){return this._sources.indexOf(r)}var n;for(n=0;n<this._absoluteSources.length;++n){if(this._absoluteSources[n]==e){return n}}return-1};BasicSourceMapConsumer.fromSourceMap=function SourceMapConsumer_fromSourceMap(e,r){var n=Object.create(BasicSourceMapConsumer.prototype);var t=n._names=a.fromArray(e._names.toArray(),true);var i=n._sources=a.fromArray(e._sources.toArray(),true);n.sourceRoot=e._sourceRoot;n.sourcesContent=e._generateSourcesContent(n._sources.toArray(),n.sourceRoot);n.file=e._file;n._sourceMapURL=r;n._absoluteSources=n._sources.toArray().map((function(e){return o.computeSourceURL(n.sourceRoot,e,r)}));var u=e._mappings.toArray().slice();var l=n.__generatedMappings=[];var c=n.__originalMappings=[];for(var p=0,f=u.length;p<f;p++){var g=u[p];var d=new Mapping;d.generatedLine=g.generatedLine;d.generatedColumn=g.generatedColumn;if(g.source){d.source=i.indexOf(g.source);d.originalLine=g.originalLine;d.originalColumn=g.originalColumn;if(g.name){d.name=t.indexOf(g.name)}c.push(d)}l.push(d)}s(n.__originalMappings,o.compareByOriginalPositions);return n};BasicSourceMapConsumer.prototype._version=3;Object.defineProperty(BasicSourceMapConsumer.prototype,"sources",{get:function(){return this._absoluteSources.slice()}});function Mapping(){this.generatedLine=0;this.generatedColumn=0;this.source=null;this.originalLine=null;this.originalColumn=null;this.name=null}BasicSourceMapConsumer.prototype._parseMappings=function SourceMapConsumer_parseMappings(e,r){var n=1;var t=0;var i=0;var a=0;var l=0;var c=0;var p=e.length;var f=0;var g={};var d={};var h=[];var m=[];var v,S,_,C,y;while(f<p){if(e.charAt(f)===";"){n++;f++;t=0}else if(e.charAt(f)===","){f++}else{v=new Mapping;v.generatedLine=n;for(C=f;C<p;C++){if(this._charIsMappingSeparator(e,C)){break}}S=e.slice(f,C);_=g[S];if(_){f+=S.length}else{_=[];while(f<C){u.decode(e,f,d);y=d.value;f=d.rest;_.push(y)}if(_.length===2){throw new Error("Found a source, but no line and column")}if(_.length===3){throw new Error("Found a source and line, but no column")}g[S]=_}v.generatedColumn=t+_[0];t=v.generatedColumn;if(_.length>1){v.source=l+_[1];l+=_[1];v.originalLine=i+_[2];i=v.originalLine;v.originalLine+=1;v.originalColumn=a+_[3];a=v.originalColumn;if(_.length>4){v.name=c+_[4];c+=_[4]}}m.push(v);if(typeof v.originalLine==="number"){h.push(v)}}}s(m,o.compareByGeneratedPositionsDeflated);this.__generatedMappings=m;s(h,o.compareByOriginalPositions);this.__originalMappings=h};BasicSourceMapConsumer.prototype._findMapping=function SourceMapConsumer_findMapping(e,r,n,t,o,a){if(e[n]<=0){throw new TypeError("Line must be greater than or equal to 1, got "+e[n])}if(e[t]<0){throw new TypeError("Column must be greater than or equal to 0, got "+e[t])}return i.search(e,r,o,a)};BasicSourceMapConsumer.prototype.computeColumnSpans=function SourceMapConsumer_computeColumnSpans(){for(var e=0;e<this._generatedMappings.length;++e){var r=this._generatedMappings[e];if(e+1<this._generatedMappings.length){var n=this._generatedMappings[e+1];if(r.generatedLine===n.generatedLine){r.lastGeneratedColumn=n.generatedColumn-1;continue}}r.lastGeneratedColumn=Infinity}};BasicSourceMapConsumer.prototype.originalPositionFor=function SourceMapConsumer_originalPositionFor(e){var r={generatedLine:o.getArg(e,"line"),generatedColumn:o.getArg(e,"column")};var n=this._findMapping(r,this._generatedMappings,"generatedLine","generatedColumn",o.compareByGeneratedPositionsDeflated,o.getArg(e,"bias",SourceMapConsumer.GREATEST_LOWER_BOUND));if(n>=0){var t=this._generatedMappings[n];if(t.generatedLine===r.generatedLine){var i=o.getArg(t,"source",null);if(i!==null){i=this._sources.at(i);i=o.computeSourceURL(this.sourceRoot,i,this._sourceMapURL)}var a=o.getArg(t,"name",null);if(a!==null){a=this._names.at(a)}return{source:i,line:o.getArg(t,"originalLine",null),column:o.getArg(t,"originalColumn",null),name:a}}}return{source:null,line:null,column:null,name:null}};BasicSourceMapConsumer.prototype.hasContentsOfAllSources=function BasicSourceMapConsumer_hasContentsOfAllSources(){if(!this.sourcesContent){return false}return this.sourcesContent.length>=this._sources.size()&&!this.sourcesContent.some((function(e){return e==null}))};BasicSourceMapConsumer.prototype.sourceContentFor=function SourceMapConsumer_sourceContentFor(e,r){if(!this.sourcesContent){return null}var n=this._findSourceIndex(e);if(n>=0){return this.sourcesContent[n]}var t=e;if(this.sourceRoot!=null){t=o.relative(this.sourceRoot,t)}var i;if(this.sourceRoot!=null&&(i=o.urlParse(this.sourceRoot))){var a=t.replace(/^file:\/\//,"");if(i.scheme=="file"&&this._sources.has(a)){return this.sourcesContent[this._sources.indexOf(a)]}if((!i.path||i.path=="/")&&this._sources.has("/"+t)){return this.sourcesContent[this._sources.indexOf("/"+t)]}}if(r){return null}else{throw new Error('"'+t+'" is not in the SourceMap.')}};BasicSourceMapConsumer.prototype.generatedPositionFor=function SourceMapConsumer_generatedPositionFor(e){var r=o.getArg(e,"source");r=this._findSourceIndex(r);if(r<0){return{line:null,column:null,lastColumn:null}}var n={source:r,originalLine:o.getArg(e,"line"),originalColumn:o.getArg(e,"column")};var t=this._findMapping(n,this._originalMappings,"originalLine","originalColumn",o.compareByOriginalPositions,o.getArg(e,"bias",SourceMapConsumer.GREATEST_LOWER_BOUND));if(t>=0){var i=this._originalMappings[t];if(i.source===n.source){return{line:o.getArg(i,"generatedLine",null),column:o.getArg(i,"generatedColumn",null),lastColumn:o.getArg(i,"lastGeneratedColumn",null)}}}return{line:null,column:null,lastColumn:null}};t=BasicSourceMapConsumer;function IndexedSourceMapConsumer(e,r){var n=e;if(typeof e==="string"){n=o.parseSourceMapInput(e)}var t=o.getArg(n,"version");var i=o.getArg(n,"sections");if(t!=this._version){throw new Error("Unsupported version: "+t)}this._sources=new a;this._names=new a;var u={line:-1,column:0};this._sections=i.map((function(e){if(e.url){throw new Error("Support for url field in sections not implemented.")}var n=o.getArg(e,"offset");var t=o.getArg(n,"line");var i=o.getArg(n,"column");if(t<u.line||t===u.line&&i<u.column){throw new Error("Section offsets must be ordered and non-overlapping.")}u=n;return{generatedOffset:{generatedLine:t+1,generatedColumn:i+1},consumer:new SourceMapConsumer(o.getArg(e,"map"),r)}}))}IndexedSourceMapConsumer.prototype=Object.create(SourceMapConsumer.prototype);IndexedSourceMapConsumer.prototype.constructor=SourceMapConsumer;IndexedSourceMapConsumer.prototype._version=3;Object.defineProperty(IndexedSourceMapConsumer.prototype,"sources",{get:function(){var e=[];for(var r=0;r<this._sections.length;r++){for(var n=0;n<this._sections[r].consumer.sources.length;n++){e.push(this._sections[r].consumer.sources[n])}}return e}});IndexedSourceMapConsumer.prototype.originalPositionFor=function IndexedSourceMapConsumer_originalPositionFor(e){var r={generatedLine:o.getArg(e,"line"),generatedColumn:o.getArg(e,"column")};var n=i.search(r,this._sections,(function(e,r){var n=e.generatedLine-r.generatedOffset.generatedLine;if(n){return n}return e.generatedColumn-r.generatedOffset.generatedColumn}));var t=this._sections[n];if(!t){return{source:null,line:null,column:null,name:null}}return t.consumer.originalPositionFor({line:r.generatedLine-(t.generatedOffset.generatedLine-1),column:r.generatedColumn-(t.generatedOffset.generatedLine===r.generatedLine?t.generatedOffset.generatedColumn-1:0),bias:e.bias})};IndexedSourceMapConsumer.prototype.hasContentsOfAllSources=function IndexedSourceMapConsumer_hasContentsOfAllSources(){return this._sections.every((function(e){return e.consumer.hasContentsOfAllSources()}))};IndexedSourceMapConsumer.prototype.sourceContentFor=function IndexedSourceMapConsumer_sourceContentFor(e,r){for(var n=0;n<this._sections.length;n++){var t=this._sections[n];var o=t.consumer.sourceContentFor(e,true);if(o){return o}}if(r){return null}else{throw new Error('"'+e+'" is not in the SourceMap.')}};IndexedSourceMapConsumer.prototype.generatedPositionFor=function IndexedSourceMapConsumer_generatedPositionFor(e){for(var r=0;r<this._sections.length;r++){var n=this._sections[r];if(n.consumer._findSourceIndex(o.getArg(e,"source"))===-1){continue}var t=n.consumer.generatedPositionFor(e);if(t){var i={line:t.line+(n.generatedOffset.generatedLine-1),column:t.column+(n.generatedOffset.generatedLine===t.line?n.generatedOffset.generatedColumn-1:0)};return i}}return{line:null,column:null}};IndexedSourceMapConsumer.prototype._parseMappings=function IndexedSourceMapConsumer_parseMappings(e,r){this.__generatedMappings=[];this.__originalMappings=[];for(var n=0;n<this._sections.length;n++){var t=this._sections[n];var i=t.consumer._generatedMappings;for(var a=0;a<i.length;a++){var u=i[a];var l=t.consumer._sources.at(u.source);l=o.computeSourceURL(t.consumer.sourceRoot,l,this._sourceMapURL);this._sources.add(l);l=this._sources.indexOf(l);var c=null;if(u.name){c=t.consumer._names.at(u.name);this._names.add(c);c=this._names.indexOf(c)}var p={source:l,generatedLine:u.generatedLine+(t.generatedOffset.generatedLine-1),generatedColumn:u.generatedColumn+(t.generatedOffset.generatedLine===u.generatedLine?t.generatedOffset.generatedColumn-1:0),originalLine:u.originalLine,originalColumn:u.originalColumn,name:c};this.__generatedMappings.push(p);if(typeof p.originalLine==="number"){this.__originalMappings.push(p)}}}s(this.__generatedMappings,o.compareByGeneratedPositionsDeflated);s(this.__originalMappings,o.compareByOriginalPositions)};t=IndexedSourceMapConsumer},163:(e,r,n)=>{var t=n(818);var o=n(297);var i=n(517).C;var a=n(24).P;function SourceMapGenerator(e){if(!e){e={}}this._file=o.getArg(e,"file",null);this._sourceRoot=o.getArg(e,"sourceRoot",null);this._skipValidation=o.getArg(e,"skipValidation",false);this._sources=new i;this._names=new i;this._mappings=new a;this._sourcesContents=null}SourceMapGenerator.prototype._version=3;SourceMapGenerator.fromSourceMap=function SourceMapGenerator_fromSourceMap(e){var r=e.sourceRoot;var n=new SourceMapGenerator({file:e.file,sourceRoot:r});e.eachMapping((function(e){var t={generated:{line:e.generatedLine,column:e.generatedColumn}};if(e.source!=null){t.source=e.source;if(r!=null){t.source=o.relative(r,t.source)}t.original={line:e.originalLine,column:e.originalColumn};if(e.name!=null){t.name=e.name}}n.addMapping(t)}));e.sources.forEach((function(t){var i=t;if(r!==null){i=o.relative(r,t)}if(!n._sources.has(i)){n._sources.add(i)}var a=e.sourceContentFor(t);if(a!=null){n.setSourceContent(t,a)}}));return n};SourceMapGenerator.prototype.addMapping=function SourceMapGenerator_addMapping(e){var r=o.getArg(e,"generated");var n=o.getArg(e,"original",null);var t=o.getArg(e,"source",null);var i=o.getArg(e,"name",null);if(!this._skipValidation){this._validateMapping(r,n,t,i)}if(t!=null){t=String(t);if(!this._sources.has(t)){this._sources.add(t)}}if(i!=null){i=String(i);if(!this._names.has(i)){this._names.add(i)}}this._mappings.add({generatedLine:r.line,generatedColumn:r.column,originalLine:n!=null&&n.line,originalColumn:n!=null&&n.column,source:t,name:i})};SourceMapGenerator.prototype.setSourceContent=function SourceMapGenerator_setSourceContent(e,r){var n=e;if(this._sourceRoot!=null){n=o.relative(this._sourceRoot,n)}if(r!=null){if(!this._sourcesContents){this._sourcesContents=Object.create(null)}this._sourcesContents[o.toSetString(n)]=r}else if(this._sourcesContents){delete this._sourcesContents[o.toSetString(n)];if(Object.keys(this._sourcesContents).length===0){this._sourcesContents=null}}};SourceMapGenerator.prototype.applySourceMap=function SourceMapGenerator_applySourceMap(e,r,n){var t=r;if(r==null){if(e.file==null){throw new Error("SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, "+'or the source map\'s "file" property. Both were omitted.')}t=e.file}var a=this._sourceRoot;if(a!=null){t=o.relative(a,t)}var u=new i;var s=new i;this._mappings.unsortedForEach((function(r){if(r.source===t&&r.originalLine!=null){var i=e.originalPositionFor({line:r.originalLine,column:r.originalColumn});if(i.source!=null){r.source=i.source;if(n!=null){r.source=o.join(n,r.source)}if(a!=null){r.source=o.relative(a,r.source)}r.originalLine=i.line;r.originalColumn=i.column;if(i.name!=null){r.name=i.name}}}var l=r.source;if(l!=null&&!u.has(l)){u.add(l)}var c=r.name;if(c!=null&&!s.has(c)){s.add(c)}}),this);this._sources=u;this._names=s;e.sources.forEach((function(r){var t=e.sourceContentFor(r);if(t!=null){if(n!=null){r=o.join(n,r)}if(a!=null){r=o.relative(a,r)}this.setSourceContent(r,t)}}),this)};SourceMapGenerator.prototype._validateMapping=function SourceMapGenerator_validateMapping(e,r,n,t){if(r&&typeof r.line!=="number"&&typeof r.column!=="number"){throw new Error("original.line and original.column are not numbers -- you probably meant to omit "+"the original mapping entirely and only map the generated position. If so, pass "+"null for the original mapping instead of an object with empty or null values.")}if(e&&"line"in e&&"column"in e&&e.line>0&&e.column>=0&&!r&&!n&&!t){return}else if(e&&"line"in e&&"column"in e&&r&&"line"in r&&"column"in r&&e.line>0&&e.column>=0&&r.line>0&&r.column>=0&&n){return}else{throw new Error("Invalid mapping: "+JSON.stringify({generated:e,source:n,original:r,name:t}))}};SourceMapGenerator.prototype._serializeMappings=function SourceMapGenerator_serializeMappings(){var e=0;var r=1;var n=0;var i=0;var a=0;var u=0;var s="";var l;var c;var p;var f;var g=this._mappings.toArray();for(var d=0,h=g.length;d<h;d++){c=g[d];l="";if(c.generatedLine!==r){e=0;while(c.generatedLine!==r){l+=";";r++}}else{if(d>0){if(!o.compareByGeneratedPositionsInflated(c,g[d-1])){continue}l+=","}}l+=t.encode(c.generatedColumn-e);e=c.generatedColumn;if(c.source!=null){f=this._sources.indexOf(c.source);l+=t.encode(f-u);u=f;l+=t.encode(c.originalLine-1-i);i=c.originalLine-1;l+=t.encode(c.originalColumn-n);n=c.originalColumn;if(c.name!=null){p=this._names.indexOf(c.name);l+=t.encode(p-a);a=p}}s+=l}return s};SourceMapGenerator.prototype._generateSourcesContent=function SourceMapGenerator_generateSourcesContent(e,r){return e.map((function(e){if(!this._sourcesContents){return null}if(r!=null){e=o.relative(r,e)}var n=o.toSetString(e);return Object.prototype.hasOwnProperty.call(this._sourcesContents,n)?this._sourcesContents[n]:null}),this)};SourceMapGenerator.prototype.toJSON=function SourceMapGenerator_toJSON(){var e={version:this._version,sources:this._sources.toArray(),names:this._names.toArray(),mappings:this._serializeMappings()};if(this._file!=null){e.file=this._file}if(this._sourceRoot!=null){e.sourceRoot=this._sourceRoot}if(this._sourcesContents){e.sourcesContent=this._generateSourcesContent(e.sources,e.sourceRoot)}return e};SourceMapGenerator.prototype.toString=function SourceMapGenerator_toString(){return JSON.stringify(this.toJSON())};r.x=SourceMapGenerator},565:(e,r,n)=>{var t;var o=n(163).x;var i=n(297);var a=/(\r?\n)/;var u=10;var s="$$$isSourceNode$$$";function SourceNode(e,r,n,t,o){this.children=[];this.sourceContents={};this.line=e==null?null:e;this.column=r==null?null:r;this.source=n==null?null:n;this.name=o==null?null:o;this[s]=true;if(t!=null)this.add(t)}SourceNode.fromStringWithSourceMap=function SourceNode_fromStringWithSourceMap(e,r,n){var t=new SourceNode;var o=e.split(a);var u=0;var shiftNextLine=function(){var e=getNextLine();var r=getNextLine()||"";return e+r;function getNextLine(){return u<o.length?o[u++]:undefined}};var s=1,l=0;var c=null;r.eachMapping((function(e){if(c!==null){if(s<e.generatedLine){addMappingWithCode(c,shiftNextLine());s++;l=0}else{var r=o[u]||"";var n=r.substr(0,e.generatedColumn-l);o[u]=r.substr(e.generatedColumn-l);l=e.generatedColumn;addMappingWithCode(c,n);c=e;return}}while(s<e.generatedLine){t.add(shiftNextLine());s++}if(l<e.generatedColumn){var r=o[u]||"";t.add(r.substr(0,e.generatedColumn));o[u]=r.substr(e.generatedColumn);l=e.generatedColumn}c=e}),this);if(u<o.length){if(c){addMappingWithCode(c,shiftNextLine())}t.add(o.splice(u).join(""))}r.sources.forEach((function(e){var o=r.sourceContentFor(e);if(o!=null){if(n!=null){e=i.join(n,e)}t.setSourceContent(e,o)}}));return t;function addMappingWithCode(e,r){if(e===null||e.source===undefined){t.add(r)}else{var o=n?i.join(n,e.source):e.source;t.add(new SourceNode(e.originalLine,e.originalColumn,o,r,e.name))}}};SourceNode.prototype.add=function SourceNode_add(e){if(Array.isArray(e)){e.forEach((function(e){this.add(e)}),this)}else if(e[s]||typeof e==="string"){if(e){this.children.push(e)}}else{throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e)}return this};SourceNode.prototype.prepend=function SourceNode_prepend(e){if(Array.isArray(e)){for(var r=e.length-1;r>=0;r--){this.prepend(e[r])}}else if(e[s]||typeof e==="string"){this.children.unshift(e)}else{throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got "+e)}return this};SourceNode.prototype.walk=function SourceNode_walk(e){var r;for(var n=0,t=this.children.length;n<t;n++){r=this.children[n];if(r[s]){r.walk(e)}else{if(r!==""){e(r,{source:this.source,line:this.line,column:this.column,name:this.name})}}}};SourceNode.prototype.join=function SourceNode_join(e){var r;var n;var t=this.children.length;if(t>0){r=[];for(n=0;n<t-1;n++){r.push(this.children[n]);r.push(e)}r.push(this.children[n]);this.children=r}return this};SourceNode.prototype.replaceRight=function SourceNode_replaceRight(e,r){var n=this.children[this.children.length-1];if(n[s]){n.replaceRight(e,r)}else if(typeof n==="string"){this.children[this.children.length-1]=n.replace(e,r)}else{this.children.push("".replace(e,r))}return this};SourceNode.prototype.setSourceContent=function SourceNode_setSourceContent(e,r){this.sourceContents[i.toSetString(e)]=r};SourceNode.prototype.walkSourceContents=function SourceNode_walkSourceContents(e){for(var r=0,n=this.children.length;r<n;r++){if(this.children[r][s]){this.children[r].walkSourceContents(e)}}var t=Object.keys(this.sourceContents);for(var r=0,n=t.length;r<n;r++){e(i.fromSetString(t[r]),this.sourceContents[t[r]])}};SourceNode.prototype.toString=function SourceNode_toString(){var e="";this.walk((function(r){e+=r}));return e};SourceNode.prototype.toStringWithSourceMap=function SourceNode_toStringWithSourceMap(e){var r={code:"",line:1,column:0};var n=new o(e);var t=false;var i=null;var a=null;var s=null;var l=null;this.walk((function(e,o){r.code+=e;if(o.source!==null&&o.line!==null&&o.column!==null){if(i!==o.source||a!==o.line||s!==o.column||l!==o.name){n.addMapping({source:o.source,original:{line:o.line,column:o.column},generated:{line:r.line,column:r.column},name:o.name})}i=o.source;a=o.line;s=o.column;l=o.name;t=true}else if(t){n.addMapping({generated:{line:r.line,column:r.column}});i=null;t=false}for(var c=0,p=e.length;c<p;c++){if(e.charCodeAt(c)===u){r.line++;r.column=0;if(c+1===p){i=null;t=false}else if(t){n.addMapping({source:o.source,original:{line:o.line,column:o.column},generated:{line:r.line,column:r.column},name:o.name})}}else{r.column++}}}));this.walkSourceContents((function(e,r){n.setSourceContent(e,r)}));return{code:r.code,map:n}};t=SourceNode},297:(e,r)=>{function getArg(e,r,n){if(r in e){return e[r]}else if(arguments.length===3){return n}else{throw new Error('"'+r+'" is a required argument.')}}r.getArg=getArg;var n=/^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;var t=/^data:.+\,.+$/;function urlParse(e){var r=e.match(n);if(!r){return null}return{scheme:r[1],auth:r[2],host:r[3],port:r[4],path:r[5]}}r.urlParse=urlParse;function urlGenerate(e){var r="";if(e.scheme){r+=e.scheme+":"}r+="//";if(e.auth){r+=e.auth+"@"}if(e.host){r+=e.host}if(e.port){r+=":"+e.port}if(e.path){r+=e.path}return r}r.urlGenerate=urlGenerate;function normalize(e){var n=e;var t=urlParse(e);if(t){if(!t.path){return e}n=t.path}var o=r.isAbsolute(n);var i=n.split(/\/+/);for(var a,u=0,s=i.length-1;s>=0;s--){a=i[s];if(a==="."){i.splice(s,1)}else if(a===".."){u++}else if(u>0){if(a===""){i.splice(s+1,u);u=0}else{i.splice(s,2);u--}}}n=i.join("/");if(n===""){n=o?"/":"."}if(t){t.path=n;return urlGenerate(t)}return n}r.normalize=normalize;function join(e,r){if(e===""){e="."}if(r===""){r="."}var n=urlParse(r);var o=urlParse(e);if(o){e=o.path||"/"}if(n&&!n.scheme){if(o){n.scheme=o.scheme}return urlGenerate(n)}if(n||r.match(t)){return r}if(o&&!o.host&&!o.path){o.host=r;return urlGenerate(o)}var i=r.charAt(0)==="/"?r:normalize(e.replace(/\/+$/,"")+"/"+r);if(o){o.path=i;return urlGenerate(o)}return i}r.join=join;r.isAbsolute=function(e){return e.charAt(0)==="/"||n.test(e)};function relative(e,r){if(e===""){e="."}e=e.replace(/\/$/,"");var n=0;while(r.indexOf(e+"/")!==0){var t=e.lastIndexOf("/");if(t<0){return r}e=e.slice(0,t);if(e.match(/^([^\/]+:\/)?\/*$/)){return r}++n}return Array(n+1).join("../")+r.substr(e.length+1)}r.relative=relative;var o=function(){var e=Object.create(null);return!("__proto__"in e)}();function identity(e){return e}function toSetString(e){if(isProtoString(e)){return"$"+e}return e}r.toSetString=o?identity:toSetString;function fromSetString(e){if(isProtoString(e)){return e.slice(1)}return e}r.fromSetString=o?identity:fromSetString;function isProtoString(e){if(!e){return false}var r=e.length;if(r<9){return false}if(e.charCodeAt(r-1)!==95||e.charCodeAt(r-2)!==95||e.charCodeAt(r-3)!==111||e.charCodeAt(r-4)!==116||e.charCodeAt(r-5)!==111||e.charCodeAt(r-6)!==114||e.charCodeAt(r-7)!==112||e.charCodeAt(r-8)!==95||e.charCodeAt(r-9)!==95){return false}for(var n=r-10;n>=0;n--){if(e.charCodeAt(n)!==36){return false}}return true}function compareByOriginalPositions(e,r,n){var t=strcmp(e.source,r.source);if(t!==0){return t}t=e.originalLine-r.originalLine;if(t!==0){return t}t=e.originalColumn-r.originalColumn;if(t!==0||n){return t}t=e.generatedColumn-r.generatedColumn;if(t!==0){return t}t=e.generatedLine-r.generatedLine;if(t!==0){return t}return strcmp(e.name,r.name)}r.compareByOriginalPositions=compareByOriginalPositions;function compareByGeneratedPositionsDeflated(e,r,n){var t=e.generatedLine-r.generatedLine;if(t!==0){return t}t=e.generatedColumn-r.generatedColumn;if(t!==0||n){return t}t=strcmp(e.source,r.source);if(t!==0){return t}t=e.originalLine-r.originalLine;if(t!==0){return t}t=e.originalColumn-r.originalColumn;if(t!==0){return t}return strcmp(e.name,r.name)}r.compareByGeneratedPositionsDeflated=compareByGeneratedPositionsDeflated;function strcmp(e,r){if(e===r){return 0}if(e===null){return 1}if(r===null){return-1}if(e>r){return 1}return-1}function compareByGeneratedPositionsInflated(e,r){var n=e.generatedLine-r.generatedLine;if(n!==0){return n}n=e.generatedColumn-r.generatedColumn;if(n!==0){return n}n=strcmp(e.source,r.source);if(n!==0){return n}n=e.originalLine-r.originalLine;if(n!==0){return n}n=e.originalColumn-r.originalColumn;if(n!==0){return n}return strcmp(e.name,r.name)}r.compareByGeneratedPositionsInflated=compareByGeneratedPositionsInflated;function parseSourceMapInput(e){return JSON.parse(e.replace(/^\)]}'[^\n]*\n/,""))}r.parseSourceMapInput=parseSourceMapInput;function computeSourceURL(e,r,n){r=r||"";if(e){if(e[e.length-1]!=="/"&&r[0]!=="/"){e+="/"}r=e+r}if(n){var t=urlParse(n);if(!t){throw new Error("sourceMapURL could not be parsed")}if(t.path){var o=t.path.lastIndexOf("/");if(o>=0){t.path=t.path.substring(0,o+1)}}r=join(urlGenerate(t),r)}return normalize(r)}r.computeSourceURL=computeSourceURL},927:(e,r,n)=>{n(163).x;r.SourceMapConsumer=n(684).SourceMapConsumer;n(565)},896:e=>{"use strict";e.exports=require("fs")},928:e=>{"use strict";e.exports=require("path")}};var r={};function __webpack_require__(n){var t=r[n];if(t!==undefined){return t.exports}var o=r[n]={id:n,loaded:false,exports:{}};var i=true;try{e[n](o,o.exports,__webpack_require__);i=false}finally{if(i)delete r[n]}o.loaded=true;return o.exports}(()=>{__webpack_require__.nmd=e=>{e.paths=[];if(!e.children)e.children=[];return e}})();if(typeof __webpack_require__!=="undefined")__webpack_require__.ab=__dirname+"/";var n={};__webpack_require__(599).install();module.exports=n})();