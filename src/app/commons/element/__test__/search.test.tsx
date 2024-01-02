import { screen, render, fireEvent } from '@testing-library/react';
import SearchUi from '../searchUi';

describe('check SearchUi component', () => {
  test('render search input with search icon', () => {
    render(<SearchUi onSearch={() => ''} />);

    const searchIcon = screen.getByTestId('search-icon');
    const searchInput = screen.getByPlaceholderText('Search');

    expect(searchIcon).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
  });
  test('update search value when input changes', () => {
    render(<SearchUi onSearch={() => ''} />);

    const searchInput = screen.getByPlaceholderText('Search');

    fireEvent.change(searchInput, { target: { value: 'pikachu' } });

    expect(searchInput).toHaveValue('pikachu');
  });
  test('check display delete button', () => {
    render(<SearchUi onSearch={() => ''} />);
    const searchInput = screen.getByPlaceholderText('Search');
    const deleteBtn = screen.getByRole('button');

    expect(deleteBtn).toHaveClass('hidden');

    fireEvent.change(searchInput, { target: { value: 'pikachu' } });
    expect(deleteBtn).toHaveClass('flex');
  });
  test('check delete button function', () => {
    render(<SearchUi onSearch={() => ''} />);
    const searchInput = screen.getByPlaceholderText('Search');
    const deleteBtn = screen.getByRole('button');

    fireEvent.change(searchInput, { target: { value: 'pikachu' } });
    fireEvent.click(deleteBtn);
    expect(searchInput).toHaveValue('');
  });
});
