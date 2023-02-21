import path from 'path';
import fs from 'fs/promises';
import { JSDOM } from 'jsdom';
import formatXml from 'xml-formatter';

const origin = { x: 3, y: 8 };
const size = 20;

main();

async function main() {
  const filePath = path.join('./data/blender-icons-orig.svg');
  const svgString = await fs.readFile(filePath, 'utf8');

  const dom = new JSDOM(svgString);
  const svg = dom.window.document;

  const iconGroup = svg.getElementById('layer8');
  if (!iconGroup) return;

  const icons = Array.from(iconGroup.childNodes).filter(child => child.nodeName === 'g');
  // console.log(iconGroup.outerHTML);
  icons.forEach(child => {
    const icon = child as SVGElement;
    cleanup(icon);
    exportIcon(icon, icon.getAttribute('data-label') || 'unknown');
  });
}

async function exportIcon(icon: SVGElement, fileName: string) {
  const coords = calcCoords(icon);
  const output = serializeIconSvg(icon, coords);
  const filePath = path.join('./out', `${fileName}.svg`);
  await fs.writeFile(filePath, output);
}

function calcCoords(icon: SVGElement) {
  const label = icon.getAttribute('data-label') || 'A-1';
  const [alpha, num] = label.split('-');
  const x = origin.x + (Number(num) - 1) * size;
  const y = origin.y + alphaToNum(alpha) * size;
  return { x, y };
}

const codeA = 'A'.charCodeAt(0);
const base = 'Z'.charCodeAt(0) - codeA + 1;
function alphaToNum(alpha: string) {
  const first = alpha.charCodeAt(0) - codeA;
  const sec = alpha.charCodeAt(1) - codeA;

  if (isNaN(sec)) return first;
  return first + (sec + 1) * base;
}

function serializeIconSvg(icon: SVGElement, { x, y }: { x: number; y: number }) {
  return formatXml(
    `<svg xmlns="http://www.w3.org/2000/svg" style="background: #808080" height="64" width="64" viewBox="${x} ${y} ${size} ${size}">${icon.outerHTML}</svg>`,
    {
      indentation: '  ',
    }
  );
}

function cleanup(elem: SVGElement) {
  const attributes = elem.attributes ? Array.from(elem.attributes) : [];
  attributes.forEach(attr => {
    if (attr.name === 'inkscape:label') elem.setAttribute('data-label', attr.value);
    if (attr.name.startsWith('inkscape') || attr.name.startsWith('sodipodi')) elem.removeAttribute(attr.name);
  });

  if (elem.style) {
    toRemove.forEach(prop => elem.style.removeProperty(prop));
    defaults.forEach(({ prop, value }) => {
      if (elem.style.getPropertyValue(prop) == value) elem.style.removeProperty(prop);
    });
  }

  elem.childNodes?.forEach(child => cleanup(child as SVGElement));
}

const defaults = [
  { prop: 'opacity', value: 1 },
  { prop: 'fill-opacity', value: 1 },
  { prop: 'fill-rule', value: 'nonzero' },
  { prop: 'stroke', value: 'none' },
  { prop: 'stroke-width', value: 1 },
  { prop: 'stroke-linecap', value: 'butt' },
  { prop: 'stroke-linejoin', value: 'miter' },
  { prop: 'stroke-miterlimit', value: 4 },
  { prop: 'stroke-dasharray', value: 'none' },
  { prop: 'stroke-dashoffset', value: 0 },
  { prop: 'stroke-opacity', value: 1 },
];

const toRemove = [
  'font-style',
  'font-variant',
  'font-weight',
  'font-stretch',
  'font-size',
  'line-height',
  'font-family',
  'font-variant-ligatures',
  'font-variant-position',
  'font-variant-caps',
  'font-variant-numeric',
  'font-variant-alternates',
  'font-feature-settings',
  'text-indent',
  'text-align',
  'text-decoration',
  'text-decoration-line',
  'text-decoration-style',
  'text-decoration-color',
  'letter-spacing',
  'word-spacing',
  'text-transform',
  'writing-mode',
  'direction',
  'text-orientation',
  'dominant-baseline',
  'baseline-shift',
  'text-anchor',
  'white-space',
  'shape-padding',
  'clip-rule',
  'display',
  'overflow',
  'visibility',
  'isolation',
  'mix-blend-mode',
  'color-interpolation',
  'color-interpolation-filters',
  'solid-color',
  'solid-opacity',
  'vector-effect',
  'color-rendering',
  'image-rendering',
  'shape-rendering',
  'text-rendering',
  'enable-background',
];
