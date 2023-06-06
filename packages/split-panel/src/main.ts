let gutter1 = document.getElementById('gutter1') as HTMLElement;
let gutter2 = document.getElementById('gutter2') as HTMLElement;
let panel1 = document.getElementById('panel1') as HTMLElement;
let panel2 = document.getElementById('panel2') as HTMLElement;
let panel3 = document.getElementById('panel3') as HTMLElement;
let container = document.getElementById('container') as HTMLElement;

let isResizing1: boolean = false;
let isResizing2: boolean = false;
let minWidth: number = 10;
let gutterSize: number = 6;
let offsetSize: number = gutterSize * 2 + 10; // border-size;

function initialize(): void {
  const selectors = ['#panel1', '#panel2', '#panel3'];
  createLayout({ selectors });
}

function createGutter(
  gutterName?: string,
  gutterSize?: number,
  gutterColor?: string,
): HTMLElement {
  const gutter = document.createElement('div');
  gutter.className = gutterName || 'gutter';
  gutter.style.background = gutterColor || '#eee';
  gutter.style.width = `${gutterSize || 5}px`;

  gutter.addEventListener('mousedown', function () {});

  return gutter;
}

function createLayout({ selectors }: { selectors: string[] }): void {
  const panels = selectors.map((selector) =>
    document.querySelector(selector),
  ) as HTMLElement[];

  const container = panels[0].parentElement as HTMLElement;

  panels.forEach((panel) => {
    console.log('a');
    panel.style.flex = 'none';
    panel.style.width = `${100 / panels.length}%`;
    if (panel.nextElementSibling) {
      panel.after(createGutter());
    }
  });
}

// gutter1.addEventListener('mousedown', function () {
//   isResizing1 = true;
//   window.addEventListener('mousemove', resize1);
//   window.addEventListener('mouseup', stopResize1);
// });

// gutter2.addEventListener('mousedown', function () {
//   isResizing2 = true;
//   window.addEventListener('mousemove', resize2);
//   window.addEventListener('mouseup', stopResize2);
// });
// function stopResize1(): void {
//   window.removeEventListener('mousemove', resize1);
//   window.removeEventListener('mouseup', stopResize1);
//   isResizing1 = false;
// }

// function stopResize2(): void {
//   window.removeEventListener('mousemove', resize2);
//   window.removeEventListener('mouseup', stopResize2);
//   isResizing2 = false;
// }

// function resize1(e: MouseEvent): void {
//   if (!isResizing1) return;
//   let panel1Width = Math.min(
//     Math.max(e.clientX - panel1.offsetLeft, minWidth),
//     container.offsetWidth - minWidth * 2 - offsetSize,
//   );
//   let panel2Width = Math.max(
//     panel2.offsetWidth - (panel1Width - panel1.offsetWidth),
//     minWidth,
//   );
//   let panel3Width =
//     container.offsetWidth - panel1Width - panel2Width - offsetSize;

//   panel1.style.flex = 'none';
//   panel1.style.width = panel1Width + 'px';
//   panel2.style.flex = 'none';
//   panel2.style.width = panel2Width + 'px';
//   panel3.style.flex = 'none';
//   panel3.style.width = panel3Width + 'px';

//   if (panel1.offsetWidth === minWidth) {
//     panel1.style.background = 'pink';
//   } else {
//     panel1.style.background = '#ddd';
//   }
//   if (panel2.offsetWidth === minWidth) {
//     panel2.style.background = 'pink';
//   } else {
//     panel2.style.background = '#ddd';
//   }
//   if (panel3.offsetWidth === minWidth) {
//     panel3.style.background = 'pink';
//   } else {
//     panel3.style.background = '#ddd';
//   }
// }

// function resize2(e: MouseEvent): void {
//   if (!isResizing2) return;
//   let panel3Width = Math.min(
//     Math.max(container.offsetWidth - e.clientX, minWidth),
//     container.offsetWidth - minWidth * 2 - offsetSize,
//   );
//   let panel2Width = Math.max(
//     panel2.offsetWidth - (panel3Width - panel3.offsetWidth),
//     minWidth,
//   );
//   let panel1Width =
//     container.offsetWidth - panel3Width - panel2Width - offsetSize;

//   panel3.style.flex = 'none';
//   panel3.style.width = panel3Width + 'px';
//   panel2.style.flex = 'none';
//   panel2.style.width = panel2Width + 'px';

//   panel1.style.flex = 'none';
//   panel1.style.width = panel1Width + 'px';

//   if (panel1.offsetWidth === minWidth) {
//     panel1.style.background = 'pink';
//   } else {
//     panel1.style.background = '#ddd';
//   }
//   if (panel2.offsetWidth === minWidth) {
//     panel2.style.background = 'pink';
//   } else {
//     panel2.style.background = '#ddd';
//   }
//   if (panel3.offsetWidth === minWidth) {
//     panel3.style.background = 'pink';
//   } else {
//     panel3.style.background = '#ddd';
//   }
// }

initialize();
