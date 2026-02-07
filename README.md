# Ivan Lagunov's Personal Website

This repository contains the source code for [ivanlagunov.com](https://ivanlagunov.com), a personal website built with [Hugo](https://gohugo.io/).

## Development

To run the website locally for development:

1.  Clone this repository:
    ```bash
    git clone https://github.com/lagivan/lagivan.github.io.git
    cd lagivan.github.io
    ```
2.  Install Hugo (if you haven't already). Refer to the [Hugo documentation](https://gohugo.io/getting-started/installing/) for installation instructions.
3.  Run the development server:
    ```bash
    hugo server
    ```
    The site will be available at `http://localhost:1313`.

## Deployment

The website is deployed to GitHub Pages via a [GitHub Actions workflow](.github/workflows/hugo.yaml). Deployment is manually triggered from the `source` branch.
