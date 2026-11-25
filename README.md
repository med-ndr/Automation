# GitHub Contribution Graph Generator

A Node.js project that uses Git commits with custom dates to generate activity patterns on your GitHub contribution graph.

## Features

- Generate multiple Git commits automatically.
- Assign custom dates to commits.
- Generate randomized dates using Moment.js and Random.
- Automatically stage and commit changes.
- Push commits to a remote GitHub repository.

## Technologies Used

- **Node.js** – JavaScript runtime.
- **jsonfile** – Read and write JSON files.
- **Moment.js** – Date manipulation.
- **Simple Git** – Interact with Git repositories.
- **Random** – Generate random numbers.

## Installation

Clone the repository:

```bash
git clone https://github.com/med-ndr/Automation.git
cd REPOSITORY
```

Install dependencies:

```bash
npm install
```

## Configuration

Make sure Git is configured:

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Also, configure authentication with GitHub using SSH or a Personal Access Token.

## Usage

Run the project:

```bash
node index.js
```

The script is configured to generate 100 commits using randomized dates.

## Project Structure

```text
.
├── index.js
├── data.json
├── package.json
├── package-lock.json
└── README.md
```

## Important Notes

- This project modifies Git commit timestamps.
- Generated contribution activity does not necessarily represent actual development work.
- Use responsibly and do not misrepresent automated activity as genuine contributions.
- Review the code before running it on an important repository.

## License

This project is licensed under the ISC License.
