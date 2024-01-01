import { screen, render, waitFor } from '@testing-library/react';
import PokemonList from '../content';
import { getPokemon } from '@/app/api/apiCall';

describe('test', () => {
  test('check Load Btn', () => {
    render(<PokemonList />);
    const loadBtn = screen.getByText('Load More');
    expect(loadBtn).toBeInTheDocument();
  });
  it('renders PokemonList component with default data', async () => {
    const mockData = {
      results: [
        { name: 'Bulbasaur' },
        { name: 'Ivysaur' },
        { name: 'Venusaur' },
        { name: 'Charmander' },
        { name: 'Charmeleon' },
        { name: 'Charizard' },
      ],
    };

    getPokemon(20);

    render(<PokemonList propsName="" />);

    await waitFor(() => {
      mockData.results.forEach((pokemon) => {
        expect(screen.getByText(pokemon.name)).toBeInTheDocument();
      });
    });
  });
});
