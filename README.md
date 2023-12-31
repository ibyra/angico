# Angico

A small JSX async-rendering library.

## Installation

Use the `npm` package manager or `bun` runtime to install Immutable CPF

```bash
npm i @ibyra/angico
bun i @ibyra/angico
```

## Configuration

Firstly, you'll need to configure your JSX transformer to use Angico.

If you are using Typescript, you'll need to set the JSX properties your
`tsconfig.json` as follow:

```json
{
  "jsx": "react",
  "jsxFactory": "Angico.createElement",
  "jsxFragmentFactory": "Angico.Fragment"
}
```

If you are using ESLint as your linter with the `@typescript-eslint/recommended`
plugin, you can face an error that the `Angico` variable is not used, due
the ESLint not being able to check after the transpilation. You can safely
ignore these errors by setting up this config on your ESlint config file.

```json
{
  "rules": {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "varsIgnorePattern": "Angico" }
    ]
  }
}
```

If you are using other transpiler, like [Babel][babel-jsx], you can use these
pragma comments on the top of the your source file.

```jsx
/** @jsx Angico.createElement */
/** @jsxFrag Angico.Fragment */

import Angico from '@ibyra/angico';

var descriptions = items.map((item) => (
  <>
    <dt>{item.name}</dt>
    <dd>{item.value}</dd>
  </>
));
```

## Usage

After setting up the configuration, using Angico is very similar to any other
JSX library. You can create and compose your components/fragments, even if they
are asynchronous.

```tsx
import Angico from '@ibyra/angico';

function Input(props: { type: 'text' | 'number' }): JSX.Element {
  return <input type={props.type} />;
}

type BoxProps = {
  width: JSX.StringNumber;
  height: JSX.StringNumber;
  children?: JSX.Children;
};

async function AsyncBox(props: BoxProps): JSX.AsyncElement {
  const { height, width, children } = props;
  const style = `height: ${height}px; width: ${width}px`;
  await timeout(10);
  return (
    <div style={style} class="box">
      {timeout(10).then(() => children)}
    </div>
  );
}

// Just to here to simulate an asynchronous operation
function timeout(ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(resolve, ms, ms));
}

const box = (
  <AsyncBox height="100" width="100">
    <Input type="number" />
    Type a number.
    <button type="submit">Submit</button>
  </AsyncBox>
);

console.log(box); // FunctionElement { ... }
```

As you can see, the JSX does not return an rendered version, but a instance of
`FunctionElement`. This is because Angico does not renders anything immediately,
only when it is request.

You can request an JSX element to render into a string using the `render`
function, also available on Angico package.

```tsx
import Angico, { render } from '@ibyra/angico';

// ...

const box = (
  <AsyncBox height="100" width="100">
    <Input type="number" />
    Type a number.
    <button type="submit">Submit</button>
  </AsyncBox>
);

const rendered = await render(box);

const expected = `<div style="height: 100px; width: 100px" class="box"><input type="number"/>Type a number.<button type="submit">Submit</button></div>`;

assert(rendered === expected);
```

Usually, you'll only need to call `render` on the boundaries of your
application, when everything is ready to be rendered and sent as a HTML
response.

### HTML, SVG, XML…

You can use Angico to render any XML markup you desire. You can use SVG out of
the box!

```tsx
import Angico from '@ibyra/angico';

export type IconProps = JSX.SVGSVGTag & {
  fill?: string;
};

// The "envelope-simple" icon provided by @phosphor-icons/core
// https://github.com/phosphor-icons/core
export function EnvelopeSimple(props: IconProps): JSX.Element {
  const {
    fill = 'currentColor',
    height = '1.5em',
    width = '1.5em',
    ...rest
  } = props;
  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      inert
      {...rest}
      viewBox="0 0 256 256"
    >
      <path
        fill={fill}
        d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8Zm-20.57 16L128 133.15L52.57 64ZM216 192H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19V192Z"
      />
    </svg>
  );
}
```

> [!WARNING]
> The current support for SVG is limited, only a few elements/attributes are
> defined. We aim to improve the support in the future.

## Roadmap

- Support all SVG-related tags/attributes;

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT © [Ibyra](https://github.com/ibyra)

[babel-jsx]: https://babeljs.io/docs/babel-plugin-transform-react-jsx