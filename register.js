import addons from '@storybook/addons'
import { window } from 'global'
import { AppInsights } from 'applicationinsights-js'

addons.register('application-insights', api => {
  const instrumentationKey =
    window.STORYBOOK_INSTRUMENTATION_KEY ||
    process.env.STORYBOOK_INSTRUMENTATION_KEY

  if (instrumentationKey) {
    AppInsights.downloadAndSetup({
      instrumentationKey: instrumentationKey,
    })
  } else {
    if (process.env.NODE_ENV === 'production') {
      console.warning(
        `[storybook-addon-application-insights] instrumentation key not found in window or env variable 'STORYBOOK_INSTRUMENTATION_KEY'`,
      )
    }
  }

  api.onStory((kind, story) => {
    let path = window.location.pathname

    if (path === '/') {
      path = ''
    }

    if (instrumentationKey) {
      AppInsights.trackPageView(`${path}/${kind}/${story}`)
    }
  })
})
