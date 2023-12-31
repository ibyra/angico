import Angico, { render } from './index';
import { expect, it, describe } from 'bun:test';

function timeout(ms: number): Promise<number> {
  return new Promise((resolve) => setTimeout(resolve, ms, ms));
}

function Input(props: { type: 'text' | 'number' }): JSX.Element {
  return <input type={props.type} />;
}

type BoxProps = {
  width: JSX.StringNumber;
  height: JSX.StringNumber;
  children?: JSX.Children;
};

function Box(props: BoxProps): JSX.Element {
  const { height, width, children } = props;
  const style = `height: ${height}px; width: ${width}px`;
  return (
    <div style={style} class="box">
      {children}
    </div>
  );
}

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

describe('render tests', () => {
  it('should render void JSX tags', async () => {
    const element = <Input type="text" />;
    const rendering = await render(element);
    expect(rendering).toBe(`<input type="text"/>`);
  });

  it('should render JSX tags', async () => {
    const element = <Box height="100" width="100"></Box>;
    const rendering = await render(element);
    expect(rendering).toBe(
      `<div style="height: 100px; width: 100px" class="box"></div>`,
    );
  });

  it('should render JSX tags with one child', async () => {
    const children = 'Lorem Ipsum';
    const element = (
      <Box height="100" width="100">
        {children}
      </Box>
    );
    const rendering = await render(element);
    expect(rendering).toBe(
      `<div style="height: 100px; width: 100px" class="box">Lorem Ipsum</div>`,
    );
  });

  it('should render JSX tags with multiple children', async () => {
    const children = [
      '"Lorem Ipsum" ',
      null,
      'dolor sit amet ',
      ['consectetur ', undefined, ['adipisicing ', ['elit.', null]]],
    ];
    const element = (
      <Box height="100" width="100">
        {children}
      </Box>
    );
    const rendering = await render(element);
    expect(rendering).toBe(
      `<div style="height: 100px; width: 100px" class="box">"Lorem Ipsum" dolor sit amet consectetur adipisicing elit.</div>`,
    );
  });

  it('should render JSX tags with tags children', async () => {
    const element = (
      <Box height="100" width="100">
        <Input type="number" />
        Type a number.
        <button type="submit">Submit</button>
      </Box>
    );
    const rendering = await render(element);
    expect(rendering).toBe(
      `<div style="height: 100px; width: 100px" class="box"><input type="number"/>Type a number.<button type="submit">Submit</button></div>`,
    );
  });

  it('should render JSX fragments', async () => {
    const children = (
      <>
        <Input type="number" />
        Type a number.
        <button type="submit">Submit</button>
      </>
    );
    const rendering = await render(children);
    expect(rendering).toBe(
      `<input type="number"/>Type a number.<button type="submit">Submit</button>`,
    );
  });

  it('should render async JSX tags with children', async () => {
    const element = (
      <AsyncBox height="100" width="100">
        <Input type="number" />
        Type a number.
        {timeout(10).then(() => (
          <button type="submit">Submit</button>
        ))}
      </AsyncBox>
    );
    const rendering = await render(element);
    expect(rendering).toBe(
      `<div style="height: 100px; width: 100px" class="box"><input type="number"/>Type a number.<button type="submit">Submit</button></div>`,
    );
  });

  it('should render JSX tags with async children', async () => {
    const element = (
      <Box height="100" width="100">
        {timeout(10).then(() => (
          <>
            <Input type="number" />
            Type a number.
            <button type="submit">Submit</button>
          </>
        ))}
      </Box>
    );
    const rendering = await render(element);
    expect(rendering).toBe(
      `<div style="height: 100px; width: 100px" class="box"><input type="number"/>Type a number.<button type="submit">Submit</button></div>`,
    );
  });

  it('should render async JSX fragments', async () => {
    const children = timeout(10).then(() => (
      <>
        <Input type="number" />
        Type a number.
        <button type="submit">Submit</button>
      </>
    ));
    const rendering = await render(children);
    expect(rendering).toBe(
      `<input type="number"/>Type a number.<button type="submit">Submit</button>`,
    );
  });
});
