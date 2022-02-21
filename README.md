## Live Project - [Crux Notes](https://crux-notes.netlify.app/login)


# Credentials
* username : mukulsaini@test.com
* password : mukulsn1@

# Environment variables
REACT_APP_EMAIL 
REACT_APP_PASSWORD 

REACT_APP_FIREBASE_API_KEY 
REACT_APP_FIREBASE_AUTH_DOMAIN 
REACT_APP_FIREBASE_PROJECT_ID 
REACT_APP_FIREBASE_STORAGE 
REACT_APP_FIREBASE_SENDER_ID 
REACT_APP_FIREBASE_APP_ID 



# Tech Stack 
 
 * Fronted 
   * HTML5
   * CSS
   * ReactJs
   * Router - React Router v6 
 
 * Backend
   Firebase 
   
* MarkDown Support




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)













notes -> {
            text:
            title:
            ownerID:
            tagName:
        }

users -> tags -> collection : {
                                notesID:[

                                ]

                                ownerID:' '
                                tagName:' '
                                
                                
                                } 










   <section className="home__left">
        <div className="home__left-header">
          <span className="left-header__text">Views</span>
          <span className="add__button">
            <GrFormAdd size={"1.2rem"} />
          </span>
        </div>

        <div className="home__left-actions">
          <div className="left-action__notes">
            <span className="left-action__name">All Notes</span>
            <span className="left-action__count">3</span>
          </div>

          <div className="left-action__tags">
            <h3 className="left-action__name tag-name">Tags</h3>
            {/* tags container start */}

            <TagsShow />

            {/* tags conatiner end */}
          </div>
        </div>
      </section>
















      function TagsShow() {
  return (
    <div className="tags__container">
      <div className="tags__name-info">
        <HiOutlineHashtag size={"1rem"} color={"#086dd6"} />
        <span className="tags__name">Hey Buddy</span>
      </div>
      <span className="tags__count">45</span>
    </div>
  );
}
