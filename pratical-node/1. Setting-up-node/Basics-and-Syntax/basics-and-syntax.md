# Practical Node.js : Building Real-World Scalable Web Apps

https://relx.percipio.com/books/f24aee43-b199-425d-b51e-91fe815d1d4e

https://github.com/azat-co/practicalnode

## Node.js Basics and Syntax
---

## Node.js Globals and Reserved Keywords

* process
* global
* module.exports & exports

## global.process

* __process.pid:__ This process's ID

* __process.argv:__ A list of command-line argument supplied to this process

* __process.env:__ A list of environment variables

* __process.platform:__ Platform name, such as darwin for macOS

* __process.release:__ This Node's release URL

* __process.versions:__ A list of versions of Google Chrome V8, zlib, uv, etc.

* __process.stdin():__ The standard input (for reading)

* __process.stdout():__ The Standard output (for writing)

* __process.uptime():__ Time of how long this process is running

* __process.memoryUsage():__ Resident set size, total heap and used heap memory usage

* __process.exit():__ Terminating this process

* __process.kill():__ Termination of another process

## Common Browser Application Programming Interface Helpers

#### Array
* __some() and every()__: Assertions for array items

* __join() and concat():__ Conversion to a string

* __pop(), push(), shift(), and unshift():__ Working with stacks and queues

* __map():__ Model mapping for array items

* __filter():__ Querying array items

* __sort():__ Ordering items

* __reduce(), reduceRight():__ Computing

* __slice():__ Copying

* __splice():__ Removing

* __indexOf():__ Lookups of finding the value in the array

* __reverse():__ Reversing the order

* __The in operator:__ Iteration over array items

#### Math
* __random():__ random real number less than one

#### String
* __substr() and substring():__ extracting substrings

* __length:__ length of the string

* __indexOf():__ index of finding the value in the string

* __split():__ converting the string to an array


## Node.js Core Modules 

# [http](https://nodejs.org/api/http.html#http_http)

Allows you to create HTTP client and servers

* http.createServer(): Returns a new web server object

* http.listen(): Begins accepting connections on the specified port and hostname

* http.createClient(): Creates a client and makes requests to other servers

* http.ServerRequest(): Passes incoming requests to request handlers

    * data: Emitted when a part of the message body is received

    * end: Emitted exactly once for each request

    * request.method(): Returns the request method as a string

    * request.url(): Returns the request URL string

* http.ServerResponse(): Creates this object internally by an HTTP server—not by the user —and is used as an output of request handlers

    * response.writeHead(): Sends a response header to the request

    * response.write(): Sends a response body

    * response.end(): Sends and ends a response body

# [util](http://nodejs.org/api/util.html)
Has a set of utilities 

* __util.inspect():__ Returns a string representation of an object, which is useful for debugging

# [querystring](http://nodejs.org/api/querystring.html) 
parses query-string formatted data

* __querystring.stringify():__ Serializes an object to a query string

* __querystring.parse():__ Deserializes a query string to an object


# [url](http://nodejs.org/api/url.html)
 parses URL data

* __parse():__ Takes a URL string and returns an objec

# [fs](http://nodejs.org/api/fs.html)
works with file system (write, read)

* __fs.readFile():__ Reads files asynchronously

* __fs.writeFile():__ Writes data to files asynchronously

# Handy Node.js Utilities

* [Crypto](http://nodejs.org/api/crypto.html): Has randomizer, MD5, HMAC-SHA1, and other algorithms

* [Path](http://nodejs.org/api/path.html): Handles system paths

* [String decoder](http://nodejs.org/api/string_decoder.html): Decodes to and from Buffer and String types