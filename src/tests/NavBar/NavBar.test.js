import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {NavBar} from "../../components/NavBar/NavBar";

describe('NavBar component', () => {

    test('renders NavBar component', () => {
        render(<Router><NavBar /></Router>);
        const navElement = screen.getByRole('navigation');
        expect(navElement).toBeInTheDocument();
    });

    test('renders logo', () => {
        render(<Router><NavBar /></Router>);
        const logo = screen.getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });

    test('renders Home link', () => {
        render(<Router><NavBar /></Router>);
        const homeLink = screen.getByText(/home/i);
        expect(homeLink).toBeInTheDocument();
    });

    test('renders Search link', () => {
        render(<Router><NavBar /></Router>);
        const searchLink = screen.getByText(/search/i);
        expect(searchLink).toBeInTheDocument();
    });

});

