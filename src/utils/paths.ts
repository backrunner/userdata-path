import path from 'path';
import fs from 'fs';
import os from 'os';

const { env } = process;
const homeDir = os.homedir();

const pathGetter = {
  win32: () => {
    return env.APPDATA || path.resolve(homeDir, 'AppData', 'Roaming');
  },
  darwin: () => {
    return path.resolve(homeDir, 'Library', 'Preferences');
  },
  default: () => {
    if (env.XDG_DATA_HOME) {
      return env.XDG_DATA_HOME;
    }
    const homeShare = path.resolve(homeDir, '.local', 'share');
    if (fs.existsSync(homeShare)) {
      return homeShare;
    }
    return '/usr/local/share';
  },
};

let platform: keyof typeof pathGetter;

if (!['win32', 'darwin'].includes(process.platform)) {
  platform = 'default';
} else {
  platform = process.platform as keyof typeof pathGetter;
}
export default pathGetter[platform]();
