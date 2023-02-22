import path from 'path';
import fs from 'fs/promises';
import formatXml from 'xml-formatter';
import { notionIcons } from './data';
import { select } from './select';

export async function extractNotionIcons() {
  for (const [name, svg] of Object.entries(notionIcons)) {
    const filePath = path.join('./out/notion', `${name}.svg`);

    const output = formatSvg(svg);
    await fs.writeFile(filePath, output);

    if (select.includes(name)) {
      const selectPath = path.join('./out/notion/selected', `${name}.svg`);
      await fs.writeFile(selectPath, removeColor(output));
    }
  }
}

function removeColor(svg: string) {
  return svg.replace(/fill="\S+"/, '');
}

function formatSvg(svg: string) {
  return formatXml(svg, { indentation: '  ' });
}
