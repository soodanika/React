# Props Drilling

    It is a way in which we pass down props from one component to another.

# Lifting the state up

    It is a pattern where we move the state of a component higher up in the component hierarchy to share it with other components. This is useful when multiple components need access to the same state or when the state needs to be manipulated by a common ancestor.

# Context Consumer Provider

    Context provides a way to pass data without having to do props drilling.
    Context Provider is used to provide the data to the rest of the component tree. It accepts a value prop which can be any JavaScript value.
    Context Consumer is used to consume the data provided by the Context Provider.

# If you don’t pass a value to the provider does it take the default value?

    Yes, it takes the default value provided to the context while creating it.
