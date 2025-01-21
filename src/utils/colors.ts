export const rootColors = {
  'main-color': '#06382E',
  'sec-color': '#DD9940',
  'text-color': '#333',
  'sub-text-color': '#8B8787',
};

export type Color = ReturnType<() => typeof rootColors>

export default function generateColorsCss() {
  let css = '';
  let rootVariables = '';

  Object.entries(rootColors).forEach(([key, value]) => {
    css += `.${key} {
      color: var(--${key}) !important;
    }`;

    css += `.bg-${key} {
      background-color: var(--${key}) !important;  
    }`;

    rootVariables += `--${key}: ${value};`;
  });

  return `${css} :root { ${rootVariables} }`;
}
