# storybook-addon-application-insights

[Storybook](https://storybook.js.org) Addon for tracking viewed Stories as page views in [Application Insights](https://azure.microsoft.com/services/application-insights/).

## Getting Started

1. Install package (and peer dependencies):

```sh
npm i -D storybook-addon-application-insights applicationinsights-js
# or
yarn add -D storybook-addon-application-insights applicationinsights-js
```

2. Register addon:

```js
// add to or create .storybook/addons.js
import 'storybook-addon-application-insights/register'
```

3. Configure Instrumentation Key:
   - Retrieve your Application Insights Instrumentation Key from the Azure portal
   - set `STORYBOOK_INSTRUMENTATION_KEY` env variable either in JS
     ```javascript
     // only set it in production environments to prevent tracking pageviews during development
     if (process.env.NODE_ENV === 'production') {
       window.STORYBOOK_INSTRUMENTATION_KEY =
         '00000000-0000-0000-0000-000000000000'
     }
     ```
   - or better, as an env variable during your storybook build
     ```sh
     STORYBOOK_INSTRUMENTATION_KEY=00000000-0000-0000-0000-000000000000 build-storybook -c .storybook
     ```
