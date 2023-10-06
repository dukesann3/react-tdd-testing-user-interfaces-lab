import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test('displays a top-level heading with the text \'Hi, I\'m Dude', () => {
    //need to render the App component first...
    //must render first to figure out if it has been mounted.
    render(<App />);

    //Act
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, I'm/i,
        exact: false,
        level: 1,
    })

    //Assert
    expect(topLevelHeading).toBeInTheDocument();
});

test('displays an image of yourself with alt text identifying the content of the image', () => {
    //ok, render App...
    render(<App />);
    const getImage = screen.getByAltText(/this is me hoohoo/i);
    expect(getImage).toBeInTheDocument();
});

test('displays a second-level heading with the text About Me', () => {
    render(<App />);
    const aboutMeSecondLevel = screen.getByRole('heading', {
        name: /About Me/i,
        level: 2,
        exact: false
    });
    expect(aboutMeSecondLevel).toBeInTheDocument();
});

test('displays a paragraph for your biography', () => {
    render(<App />);
    const paragraphWorkAround = document.querySelector('p')
    expect(paragraphWorkAround).toBeInTheDocument();
})

