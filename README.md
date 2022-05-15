# Cypress and K6

Smoke tests for a front page search and a load test of an API

## Cypress

To run the Cypress specs in interactive mode:

```sh
yarn
cypress open
```

And in headless mode:

```sh
yarn
cypress run
```

[CI/CD guides and examples](https://docs.cypress.io/guides/continuous-integration/ci-provider-examples#BitBucket "CI/CD guides and examples")

## K6

[Installation steps for K6](https://k6.io/docs/getting-started/installation/ "Installation steps for K6")

To run the K6 tests:

```sh
k6 run k6/name_of_test.js
```

With JSON output:

```sh
k6 run --out json=my_test_result.json k6/name_of_test.js
```

[CI/CD guides and examples](https://k6.io/docs/integrations/#continuous-integration-and-continuous-delivery "CI/CD guides and examples")
