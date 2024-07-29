<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# oneTo

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a linearly spaced numeric array whose elements increment by `1` starting from one.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-one-to
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var oneTo = require( '@stdlib/array-one-to' );
```

#### oneTo( n\[, dtype] )

Generates a linearly spaced numeric array whose elements increment by `1` starting from one.

```javascript
var arr = oneTo( 5 );
// returns <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
```

If `n == 0`, the function returns an empty array.

```javascript
var arr = oneTo( 0 );
// returns <Float64Array>[]
```

The function recognizes the following data types:

-   `float64`: double-precision floating-point numbers (IEEE 754)
-   `float32`: single-precision floating-point numbers (IEEE 754)
-   `complex128`: double-precision complex floating-point numbers
-   `complex64`: single-precision complex floating-point numbers
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `generic`: generic JavaScript values

By default, the output array data type is `float64` (i.e., a [typed array][mdn-typed-array]). To specify an alternative data type, provide a `dtype` argument.

```javascript
var arr = oneTo( 5, 'int32' );
// returns <Int32Array>[ 1, 2, 3, 4, 5 ]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For complex number arrays, each element of the returned array has an imaginary component equal to `0`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sort2hp = require( '@stdlib/blas-ext-base-gsort2hp' );
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var oneTo = require( '@stdlib/array-one-to' );

// Generate an array of random numbers:
var opts = {
    'dtype': 'generic'
};
var x = discreteUniform( 10, 100, 200, opts );

// Generate a linearly-spaced array:
var y = oneTo( x.length, opts.dtype );

// Create a temporary array to avoid mutation:
var tmp = x.slice();

// Sort `y` according to the sort order of `x`:
sort2hp( x.length, 1, tmp, 1, y, 1 );

console.log( x );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-full`][@stdlib/array/full]</span><span class="delimiter">: </span><span class="description">create a filled array having a specified length.</span>
-   <span class="package-name">[`@stdlib/array-ones`][@stdlib/array/ones]</span><span class="delimiter">: </span><span class="description">create an array filled with ones and having a specified length.</span>
-   <span class="package-name">[`@stdlib/array-one-to-like`][@stdlib/array/one-to-like]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from one and having the same length and data type as a provided input array.</span>
-   <span class="package-name">[`@stdlib/array-zero-to`][@stdlib/array/zero-to]</span><span class="delimiter">: </span><span class="description">generate a linearly spaced numeric array whose elements increment by 1 starting from zero.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-one-to.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-one-to

[test-image]: https://github.com/stdlib-js/array-one-to/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/array-one-to/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-one-to/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-one-to?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-one-to.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-one-to/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-one-to/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-one-to/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-one-to/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-one-to/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-one-to/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-one-to/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-one-to/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-one-to/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/array/full]: https://github.com/stdlib-js/array-full

[@stdlib/array/ones]: https://github.com/stdlib-js/array-ones

[@stdlib/array/one-to-like]: https://github.com/stdlib-js/array-one-to-like

[@stdlib/array/zero-to]: https://github.com/stdlib-js/array-zero-to

<!-- </related-links> -->

</section>

<!-- /.links -->
