import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import {FilterShows} from "../../components/FilterShows/FilterShows";


describe('<FilterShows />', () => {
    const mockData = [
        { id: 1, name: "Show1", rating: { average: 9 }, genres: ["Action"], image: { medium: 'url1' } },
        { id: 2, name: "Show2", rating: { average: 7 }, genres: ["Comedy"], image: { medium: 'url2' } },
        { id: 3, name: "Show3", rating: { average: 8.5 }, genres: ["Action"], image: null },
    ];

    test('renders without crashing', () => {
        render(<FilterShows apiResult={[]} />, { wrapper: MemoryRouter });
    });

    test('displays provided category', () => {
        render(<FilterShows apiResult={[]} category="Action" />, { wrapper: MemoryRouter });
        expect(screen.getByText('Action')).toBeInTheDocument();
    });

    test('filters shows based on rating and category', () => {
        render(<FilterShows apiResult={mockData} category="Action" minimumRating={8.5} />, { wrapper: MemoryRouter });
        expect(screen.getByText(/Show3/i)).toBeInTheDocument();
        expect(screen.queryByText('Show1')).not.toBeInTheDocument();
    });

    test('handles shows without images', () => {
        render(<FilterShows apiResult={mockData} category="Action" />, { wrapper: MemoryRouter });
        expect(screen.getByText(/No image available of Show3/)).toBeInTheDocument();
    });
});
