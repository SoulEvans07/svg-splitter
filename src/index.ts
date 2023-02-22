import { exportBlenderIcons } from './blender/blender';
import { extractNotionIcons } from './notion';

async function main() {
  await exportBlenderIcons();
  await extractNotionIcons();
}

main();
