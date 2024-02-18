# When and why do we need lazy()?

    Whenever we build our app, our bundler bundles it into a single js file, now suppose we have a component in our app that we don't want to be loaded immediately, so for that we can have a different bundle rather than just having it bundled in one file, this will optimize the performance of our app. So for this pupose we can use lazy loding and load that componnet only when needed.

# Suspense?

    On using lazy we will get a suspense error, since it will try to render the UI whereas the lazy will take some time to load the component, and hence we need to have a fallback defined for it.

# A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

    Suspense will wrap our component and provide a fallback for it, so once the component is loading the UI should not throw an error but just load the fallback thing.

# Advantages and disadvantages of using this code splitting pattern?

    ADV - Reusable, Maintainable, Testable
    DISADV - Increase build time, Debugging

# When do we and why do we need suspense?

     On using lazy we will get a suspense error, since it will try to render the UI whereas the lazy will take some time to load the component, and hence we need to have a fallback defined for it.
     Suspense will wrap our component and provide a fallback for it, so once the component is loading the UI should not throw an error but just load the fallback thing.
