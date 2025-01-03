
### Project Live Link : https://infinite-scrolling-nine-tau.vercel.app/

# Infinite Scroll Gallery with Redux

This project implements an infinite scroll gallery using React, Redux, and Axios to fetch images from the JSONPlaceholder API. The gallery fetches 10 images per page and appends them as the user scrolls down, providing a seamless experience with lazy loading.



## Features

- Infinite scroll: The gallery loads more images as the user scrolls to the bottom.
- Lazy loading: Images are loaded only when they come into view to improve performance.
- Redux: State management is handled by Redux to store and manage images and pagination.
- Responsive design: The gallery layout adapts to different screen sizes using Tailwind CSS.

## Tech Stack

- **Frontend**: React, Redux, Axios, Tailwind CSS
- **State Management**: Redux Toolkit (with `createSlice` and `createAsyncThunk`)
- **API**: JSONPlaceholder API (`https://jsonplaceholder.typicode.com/photos`)

## Installation

1. Clone the repository:

   ```bash
   https://github.com/puneetuttam/InfiniteScrolling.git

2. Clone the repository:

   ```bash
   cd InfiniteScrolling

3. Install dependencies:

   ```bash
   npm install

4. Run the development server:

   ```bash
   npm start

5. Open your browser and go to http://localhost:5173 to see the gallery in action.