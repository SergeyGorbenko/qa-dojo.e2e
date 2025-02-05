<div align="center">
<h1 align="center">qa-dojo.e2e</h1>

<a>
  <img
    height="80"
    width="80"
    alt="qa-dojo.e2e"
    src="./assets/logo.webp"
  />
</a>

<p>qa-dojo.e2e is a end-to-end (E2E) testing framework designed for educational purposes. It provides a robust environment for practicing and mastering E2E test automation.</p>
</div>

---

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About the Project](#about-the-project)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Run](#run)
  - [E2E Tests](#e2e-tests)
- [Contributing](#contributing)
- [License](#license)

## About the Project

qa-dojo.e2e is a streamlined project for implementing and executing E2E tests. It aims to facilitate learning and skill development in test automation by using modern tools and techniques.

### Built With

- [Playwright](https://playwright.dev/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Features

- Cross-browser testing with Playwright.
- Support for headless and headed test executions.
- Detailed reporting and debugging capabilities.
- Easy-to-setup and run tests.

## Prerequisites

Ensure the following tools and environments are set up before starting:

- [Git](https://git-scm.com/) installed and configured.
- [Node.js](https://nodejs.org/) (latest version).
- [npm](https://www.npmjs.com/) (latest version).
- An integrated development environment (IDE) like [Visual Studio Code](https://code.visualstudio.com/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SergeyGorbenko/qa-dojo.e2e.git
   ```

2. Navigate to the project directory:

   ```bash
   cd qa-dojo.e2e
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

## Run

### E2E Tests

To execute the E2E tests in headless mode:

```bash
npx playwright test
```

To run the tests in headed mode (with a visible browser):

```bash
npx playwright test --headed
```

To run specific tests or test suites, specify the test file path:

```bash
npx playwright test tests/example.spec.ts
```

## Contributing

Contributions are welcome! If you would like to contribute, please fork the repository and submit a pull request. Ensure your code follows the project's guidelines and passes all tests.

1. Fork the project.
2. Create your feature branch:

   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. Push to the branch:

   ```bash
   git push origin feature/AmazingFeature
   ```

5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.
