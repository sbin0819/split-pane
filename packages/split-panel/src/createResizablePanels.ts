// Function to create event listeners
type GutterOptions = {
  selectors: string[];
  size: number;
  color?: string;
  hoverColor?: string;
  cursor?: string;
  gutterName?: string;
};
type Props = {
  container?: string;
  selectors: string[];
  sizes?: number[] | number;
  minSize?: number[] | number;
  gutterSize?: number;
  gutterName?: string;
  gutteOptions?: GutterOptions;
};
export const createResizablePanels = ({
  container,
  selectors,
  sizes,
  minSize,
  gutterSize,
  gutterName,
  gutteOptions,
}: Props) => {
  const panels = selectors.map((selector) => document.querySelector(selector));
};
