import { screen, render } from '@testing-library/react';
import LoadBtn from '../loadBtn';

describe('test btn text', () => {
  test('if btn not load data', () => {
    render(<LoadBtn onClick={() => Boolean} loading={false} />);

    const loadMoreText = screen.getByText('Load More');

    expect(loadMoreText).toBeInTheDocument();
  });
  test('if btn is load data', () => {
    render(<LoadBtn onClick={() => Boolean} loading={true} />);

    const loadingText = screen.getByText('Loading . . .');

    expect(loadingText).toBeInTheDocument();
  });
});
