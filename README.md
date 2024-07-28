# GameHub

GameHub is a video game discovery web app that helps you find new and interesting games to play. With GameHub, you can search for games by platform, genre, and more. And you can see the game detail infomation when click each game card.

## Project Link

https://game-hub-nu-tan-12.vercel.app/

## Getting Started

To get started with GameHub, follow these steps:

1. Clone this repository to your local machine.
2. Run `npm install` to install the required dependencies.
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
4. Add the API key to **src/services/api-client.ts**
5. Run `npm run dev` to start the web server.

## Features

- **Game Search:** Search for games by title, platform, genre, or by just typing some prefix of the name of the game.
- **Game Card:** View basic information about a specific game, including its rating, platforms, and genre.
- **Platform Filter:** Filter games based on the platform (e.g., PC, PlayStation, Xbox).
- **Genre Filter:** Filter games based on the genre (e.g., action, adventure, strategy).
- **Infinite Scroll:** Seamlessly explore more games with the introduction of infinite scrolling in the Game Grid.
- **Enhanced Data Management:** Utilize the power of React-Query for efficient data fetching, ensuring a smoother and more responsive user experience.
- **State Management with Zustand:** Transition to Zustand for more robust and scalable state management, enhancing the overall performance of the application.
- **Dynamic Routing:** Navigate seamlessly through the application with React Router, providing a more intuitive and user-friendly journey.
- **Reusable API Client:** Introducing a reusable API client for fetching data from the backend, ensuring consistency and maintainability.
- **Game Details Page:** Dive deeper into your favorite games with a dedicated Game Details page, featuring rich information, trailers, screenshots, and more.
- **Layout Routes for Improved Navigation:** Experience a revamped layout with React Router, ensuring a more cohesive and intuitive navigation structure.
- **Responsive layout:** The web page can be adapted both large and small screens.
- **Code Refactoring:** Under-the-hood improvements and optimizations for cleaner, more maintainable code.

### Usage

1. Start the development server: `npm run dev`
2. Open your browser and navigate to `http://localhost:5173/`.

### Deployment

To deploy the GameHub app to a production environment, follow these steps:

1. Build the production-ready assets: `npm run build`
2. Deploy the generated `build` directory to your hosting provider of choice.

## Technologies Used

- React: TypeScript library for building user interfaces
- React-Query: Powerful data-fetching and state management library for React applications
- Zustand: Lightweight state management library for React, offering a simple and scalable solution
- Chakra UI: Simple, modular, and accessible component library for building React applications
- Axios: Promise-based HTTP client for making API requests
- Vite: Next Generation Frontend Tooling
- TypeScript: (ts & tsx)

## Acknowledgments

- Thanks to [Mosh Hamedani](https://github.com/mosh-hamedani) for the Ultimate React courses, which served as the foundation for this project.
