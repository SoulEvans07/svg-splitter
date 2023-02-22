import path from 'path';
import fs from 'fs/promises';
import formatXml from 'xml-formatter';
import { notionIcons } from './data';

export async function extractNotionIcons() {
  for (const [name, svg] of Object.entries(notionIcons)) {
    const filePath = path.join('./out/notion', `${name}.svg`);
    await fs.writeFile(filePath, formatSvg(svg));
  }
}

function formatSvg(svg: string) {
  return formatXml(svg, { indentation: '  ' });
}
