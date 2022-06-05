import path from 'path';
import fs from 'fs';
import userDataPath from './utils/paths';

export const resolve = (target: string, createIfNotExist = true) => {
  const resolved = path.resolve(userDataPath, target);
  if (!fs.existsSync(resolved)) {
    if (createIfNotExist) fs.mkdirSync(resolved);
  }
  return resolved;
};

export default userDataPath;
