import { screen, render, waitFor } from '@testing-library/react';
import PokemonList from '../content';
import { getPokemon } from '@/app/api/apiCall';

describe('test', () => {
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

    // const loadBtn = screen.getByText('Load More');
    // expect(loadBtn).toBeInTheDocument();

    await waitFor(() => {
      mockData.results.forEach((pokemon) => {
        expect(screen.getByText(pokemon.name)).toBeInTheDocument();
      });
    });
  });
});
