# JSX

    JSX is not html, it is just html like syntax.

# React.createElement vs JSX

    It is not developer friendly to have React.createElement in our application whereas JSX allows us to have easy syntax making it more developer friendly.

# Benefits of JSX

    JSX is easy to understand and write.

# Behind the Scenes of JSX

    JSX is not something that the JS Engine can understand so babel converts this JSX into simple react element which is an object and on redering that object it is converted to html.

# Babel & parcel role in JSX

    Parcel uses babel behind the scenes to transpile JSX into simple react elements that are objects and on redering that object it is converted to html.

# Role of type attribut in script tag

    The script tag usually expects normal js code, but since we have import statements to import react it is not anymore normal js code and so we need to specify type="module".

# {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

    These are all different ways to render the TitleCompoenent in react.
