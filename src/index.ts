import './types-global';
import './types-html';
import './types-svg';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements extends SVGTagMap, HTMLTagMap {}

    type Value =
      | string
      | boolean
      | number
      | bigint
      | Date
      | null
      | undefined
      | Iterable<Value>
      | Promise<
          | string
          | boolean
          | number
          | bigint
          | Date
          | null
          | undefined
          | Iterable<Value>
        >;

    type Children = Value | Element | Iterable<Children>;

    type Props = { [key: string]: unknown } & { children?: Children };

    type FC<P extends JSX.Props = JSX.Props> = (props: P) => JSX.Element;

    type FunctionComponent<P extends JSX.Props = JSX.Props> = FC<P>;

    type FunctionElement = {
      props: Props;
      fn: (props: { [key: string]: unknown }) => Element;
      render(): Promise<string>;
    };

    type IntrinsicElement = {
      props: Props;
      tag: string;
      render(): Promise<string>;
    };

    type SyncElement = FunctionElement | IntrinsicElement;

    type AsyncElement = Promise<SyncElement>;

    type Element = SyncElement | AsyncElement;
  }
}

/**
 * Creates an `JSX.Element`.
 *
 * @param tag The JSX tag of the element
 * @param properties The properties of the JSX element
 * @param children The children of the JSX element.
 */
function createElement(tag: string | JSX.FC, props: JSX.Props): JSX.Element {
  if (typeof tag === 'string') {
    return new IntrinsicElement(tag, props);
  }

  if (typeof tag === 'function') {
    return new FunctionElement(tag, props);
  }

  const message = `Invalid JSX Element: it must be a tag (string) or a component (function).`;
  throw new TypeError(message);
}

/**
 * Returns the children of the fragment.
 * @param props The JSX Children
 */
function Fragment(props: JSX.Props): JSX.Children {
  return props.children;
}

/**
 * Render an `JSX` tree into a string.
 *
 * @param root The root of the tree to be rendered
 */
function render(root: JSX.Children): Promise<string> {
  return renderChildren(root);
}

/**
 * Represents an `JSX` instrinsic element
 */
class IntrinsicElement implements JSX.IntrinsicElement {
  readonly tag: string;
  readonly props: JSX.Props;

  constructor(tag: string, props: JSX.Props) {
    this.props = props;
    this.tag = tag;
  }

  async render(): Promise<string> {
    const [attributes, contents] = await Promise.all([
      renderProps(this.props),
      renderChildren(this.props.children),
    ]);

    const divider = attributes.length === 0 ? '' : ' ';

    return contents.length === 0 && isVoidTag(this.tag)
      ? `<${this.tag}${divider}${attributes}/>`
      : `<${this.tag}${divider}${attributes}>${contents}</${this.tag}>`;
  }
}

/**
 * Represents an `JSX` functional element
 */
class FunctionElement implements JSX.FunctionElement {
  readonly fn: JSX.FC;
  readonly props: JSX.Props;

  constructor(fn: JSX.FC, props: JSX.Props) {
    this.fn = fn;
    this.props = props;
  }

  async render(): Promise<string> {
    const element = await this.fn.call(null, this.props);
    return renderChildren(element);
  }
}

/**
 * Render children into a string.
 *
 * @param children The child to be rendered
 */
async function renderChildren(children: JSX.Children): Promise<string> {
  if (children == null) return '';
  if (typeof children === 'string') return children;
  if (typeof children === 'boolean') return children ? 'true' : 'false';
  if (typeof children === 'bigint') return children.toString(10);
  if (typeof children === 'number') return children.toString(10);
  if (isDate(children)) return children.toISOString();
  if (isIterable(children)) {
    const promises = Array.from(children, (item) => renderChildren(item));
    const renderings = await Promise.all(promises);
    return renderings.join('');
  }
  if (isPromise(children)) {
    return children.then((value) => renderChildren(value));
  }
  if (isElement(children)) return await children.render();
  return '';
}

/**
 * Render a JSX props into a string.
 *
 * @param props The props of the element
 */
async function renderProps(props: JSX.Props): Promise<string> {
  const promises = Object.entries(props).map(renderAttribute);
  const attributes = await Promise.all(promises);
  return attributes.filter((attr) => attr.length > 0).join(' ');
}

/**
 * Render an JSX attribute into a string.
 *
 * @param attribute A pair of a name and a value
 */
async function renderAttribute(attribute: [string, unknown]): Promise<string> {
  if (attribute[0] === 'children') return '';
  const value = await renderValue(attribute[1]);
  if (value == null) return '';
  const escaped = escapeAttribute(value);
  return `${attribute[0]}="${escaped}"`;
}

/**
 * Renders an JSX value into a string or null.
 *
 * @param value An `JSX.Value`
 */
async function renderValue(value: unknown): Promise<string | null> {
  if (value == null) return null;
  if (typeof value === 'string') return value;
  if (typeof value === 'boolean') return value ? '' : null;
  if (typeof value === 'bigint') return value.toString(10);
  if (typeof value === 'number') return value.toString(10);
  if (isDate(value)) {
    return Number.isNaN(value.valueOf()) ? '' : value.toISOString();
  }
  if (isIterable(value)) {
    const promises = Array.from(value, (element) => renderValue(element));
    const renderings = await Promise.all(promises);
    return renderings.join('');
  }
  if (isPromise(value)) {
    return value.then((value) => renderValue(value));
  }
  return '';
}

/**
 * Escapes the attribute value for each one of the following cases:
 * - Ampersand (`&`) are replaced with `&amp;`;
 * - Quotes (`"`) are replaced with `&quot;`;
 * - Non-breaking spaces (`\u00A0`) are replaced with `&nbsp;`.
 *
 * @param value the attribute value.
 */
function escapeAttribute(value: string) {
  return value.replace(/(&)|(")|(\u00A0)/g, (_, amp, quote) => {
    if (amp) return '&amp;';
    if (quote) return '&quot;';
    return '&nbsp;';
  });
}

/**
 * Returns `true` if the value is an `JSX.Element`; `false` otherwise.
 * @param value
 */
function isElement(value: unknown): value is JSX.Element {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value instanceof IntrinsicElement || value instanceof FunctionElement)
  );
}

/**
 * Returns `true` if the value is a Promise; `false` otherwise.
 * @param value
 */
function isPromise(value: unknown): value is Promise<unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    (value instanceof Promise ||
      ('then' in value && typeof value.then === 'function'))
  );
}

/**
 * Returns `true` if the value is an iterable; `false` otherwise.
 * @param value
 */
function isIterable(value: unknown): value is Iterable<unknown> {
  return (
    typeof value === 'object' &&
    value !== null &&
    Symbol.iterator in value &&
    typeof value[Symbol.iterator] === 'function'
  );
}

/**
 * Returns `true` if the value is an instance of `Date`, `false` otherwise.
 * @param value
 */
function isDate(value: unknown): value is Date {
  return typeof value === 'object' && value !== null && value instanceof Date;
}

const voidTags = {
  html: [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ],
};

/**
 * Checks if the tag is a void element or not.
 * @param tag
 */
function isVoidTag(tag: string): boolean {
  return voidTags.html.includes(tag);
}

export { createElement, Fragment, isElement, render };
