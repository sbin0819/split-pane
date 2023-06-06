let isResizing1: boolean = false;
let isResizing2: boolean = false;
let minWidth: number = 10;
let gutterSize: number = 5;
let offsetSize: number = gutterSize * 2 + 10; // border-size;
let isResizing: boolean = false;

function initialize(): void {
  const selectors = ['#panel1', '#panel2', '#panel3'];
  const minSize = [10, 10, 10];
  const gutterSize = 5;
  createLayout({ selectors, minSize, gutterSize });
}

function resize(
  e: MouseEvent,
  panels?: HTMLElement[],
  isReverse?: boolean,
  options?: { minWidth?: number; offsetSize?: number },
): void {
  if (!isResizing) return;
  const [panel1, panel2, panel3] = panels as HTMLElement[];
  const container = panel1.parentElement as HTMLElement;
  // const minWidth = +panel1.style.minWidth || options?.minWidth || 10;

  let [panel1Width, panel2Width, panel3Width] = [0, 0, 0];

  if (!isReverse) {
    panel1Width = Math.min(
      Math.max(e.clientX - panel1.offsetLeft, minWidth),
      container.offsetWidth - minWidth * 2 - offsetSize,
    );
    panel2Width = Math.max(
      panel2.offsetWidth - (panel1Width - panel1.offsetWidth),
      minWidth,
    );
    panel3Width =
      container.offsetWidth - panel1Width - panel2Width - offsetSize;
  } else {
    panel3Width = Math.min(
      Math.max(container.offsetWidth - e.clientX, minWidth),
      container.offsetWidth - minWidth * 2 - offsetSize,
    );
    panel2Width = Math.max(
      panel2.offsetWidth - (panel3Width - panel3.offsetWidth),
      minWidth,
    );
    panel1Width =
      container.offsetWidth - panel3Width - panel2Width - offsetSize;
  }

  panel1.style.flex = 'none';
  panel1.style.width = panel1Width + 'px';
  panel2.style.flex = 'none';
  panel2.style.width = panel2Width + 'px';
  panel3.style.flex = 'none';
  panel3.style.width = panel3Width + 'px';
}

function stopResize(): void {
  window.removeEventListener('mousemove', resize);
  window.removeEventListener('mouseup', stopResize);
  isResizing = false;
}

function createGutter({
  panels,
  gutterName,
  gutterSize,
  gutterColor,
  isReverse,
}: {
  panels: HTMLElement[];
  gutterName?: string;
  gutterSize?: number;
  gutterColor?: string;
  isReverse: boolean;
}): HTMLElement {
  const gutter = document.createElement('div');
  gutter.className = gutterName || 'gutter';
  gutter.style.background = gutterColor || '#eee';
  gutter.style.width = `${gutterSize || 5}px`;
  gutter.addEventListener('mousedown', function () {
    isResizing = true;
    window.addEventListener('mousemove', (e) => resize(e, panels, isReverse));
    window.addEventListener('mouseup', stopResize);
  });

  return gutter;
}

function createLayout({
  selectors,
  minSize,
  gutterSize = 5,
}: {
  selectors: string[];
  minSize: number[];
  gutterSize?: number;
}): void {
  const panels = selectors.map((selector) =>
    document.querySelector(selector),
  ) as HTMLElement[];

  panels.forEach((panel, idx) => {
    panel.style.flex = 'none';
    panel.style.width = `calc(${100 / panels.length}%)`;
    panel.style.minWidth = `${minSize[panels.indexOf(panel)]}px`;
    if (panel.nextElementSibling) {
      panel.style.width = panel.offsetWidth - gutterSize + 'px';
      const isReverse = idx % 2 === 1;
      panel.after(createGutter({ panels, gutterSize, isReverse }));
    }
  });
}

initialize();
