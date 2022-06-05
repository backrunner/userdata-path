# userdata-path

Get the path of `userData` folder in system (This library is only available in the Node.js environment).

## Usage

Step 1: Use `npm` or other package manager to install this package.

```bash
$ npm install userdata-path
```

Step 2: Import and use it.

```ts
import userDataPath, { resolve } from 'userdata-path';

const configData = resolve('config');

console.log(userDataPath);
// Library/Preferences for macOS
// AppData/Roaming or specific path in environment paths for Windows
// .local/share or /usr/local/share or specific path in environment paths for Linux

console.log(configData);
// if not exist, resolve method will create it.
// equal to path.resolve(userDataPath, 'config');
```

## License

MIT
