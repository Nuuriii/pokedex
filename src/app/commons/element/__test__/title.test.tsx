import { screen, render } from '@testing-library/react';
import TitleIcon from '../titleIcon';

describe('check img alt', () => {
  test('check alt text', () => {
    render(<TitleIcon />);
    const pokeball = screen.getByAltText('pokeball-icon');
    const pokedex = screen.getByAltText('pokedex-title');

    expect(pokeball).toBeVisible();
    expect(pokedex).toBeVisible();
  });
});
