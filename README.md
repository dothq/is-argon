# is-argon

> ## Install

Install with [npm](https://www.npmjs.com/)

```sh
$ npm i @dothq/is-argon
```

Install with [yarn](https://yarnpkg.com)

```sh
$ yarn add @dothq/is-argon
```

## Usage

```ts
import { isArgon } from '@dothq/is-argon'

isArgon("$argon2i$v=19$m=4096,t=3,p=1$MLhDDWwGdPJNxvvutAvp4g$+/cn3l6/QR9BB5ABYfCZr9Ssa5R1f+kIVh+4Abtx04w")
    .then(valid => console.log(valid))
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/dothq/is-argon/issues)

## License

Copyright © 2021 Dot HQ
Licensed under the MPL-2.0 license.
