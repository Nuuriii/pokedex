import { screen, render } from '@testing-library/react';
import SearchUi from '../searchUi';

describe('check SearchUi component', () => {
  test('check react icons', () => {
    render(<SearchUi onSearch={() => ''} />);
    const searchIcon = screen.getByTestId('search-icon');

    expect(searchIcon).toBeInTheDocument();
  });
});
