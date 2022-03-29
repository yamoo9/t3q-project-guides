import path from 'path';
import fs from 'fs';

export function getPackageDir(filepath: string) {
  let currDir = path.dirname(require.resolve(filepath));

  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) return currDir;

    const { dir, root } = path.parse(currDir);

    if (dir === root) {
      throw new Error(
        `${filepath} 경로의 상위 디렉토리에서 package.json을 찾을 수 없습니다.`
      );
    }

    currDir = dir;
  }
}
