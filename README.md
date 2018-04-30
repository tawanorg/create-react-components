## TGP React Components


## Installation

Those third-parties are required
- Bootstrap 4 
- Material Design Iconic Font (http://zavoloklom.github.io/material-design-iconic-font/)
- Google Fonts ```Roboto``` weight 300,400,500,700

index.html
```
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
```

index.js (React main file)

```
import 'normalize.css';
import ThemeProvider from 'tgp-react-components/ThemeProvider'

<ThemeProvider>
 <App />
</ThemeProvider>
```

Custom theme
```
import ThemeProvider from 'tgp-react-components/ThemeProvider'

const customTheme = {
 colors: {
 	red: '#F83111'
 }
}

<ThemeProvider theme={customTheme}>
 <App />
</ThemeProvider>
```


## Get it running
- ```npm run storybook``` | run the storybook for development
- ```npm start``` | start web document server for static document website
- ```npm run build:lib``` | building the component library

## Resources
- https://polished.js.org/
- styled-components