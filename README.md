Cypress E2E Testing Framework for Magento

This repository contains an End-to-End (E2E) testing framework using Cypress for the Magento site https://magento.softwaretestingboard.com/. The framework is designed for running a small regression set of tests.
Prerequisites

Before running the tests, ensure you have the following installed on your machine:

    Node.js: Make sure to install the latest LTS version.

Installation

Clone the repository:
    
    git clone https://github.com/Nandi-007/magento_cypress_js_testing.git

Navigate to the project folder:

    cd magento_cypress_js_testing

Install dependencies:

    npm install

Configuration

Running Tests

To run the Cypress tests, use the following command:

    npx cypress open

This will open the Cypress Test Runner. Click on the test file you want to execute or run all tests.
Writing Tests

Add your Cypress tests to the cypress/integration directory.

Additional Notes

    This framework uses Cypress with JavaScript. If you want to switch to TypeScript, additional setup is required.
    Make sure your Magento site is accessible and responsive during the test runs.

Feel free to customize and expand the framework based on your specific testing requirements. Happy testing!