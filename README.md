# Illinois Rise Website V3

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Will be using [react-twitter-widgets](https://www.npmjs.com/package/react-twitter-widgets) and [google-spreadsheet](https://github.com/theoephraim/node-google-spreadsheet)
UI will be using [material-ui](https://mui.com/material-ui/getting-started/usage/)

Routing using [react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview)

Entire website is within illiniulti-website
Changes: Not using Google Tag Manager to keep track of usage

## Adding New Information

Note: this website's design should work as intended until 2029. This is when new tabs have to be made for Team History.

### Awards

Navigate to data >> awards >> awards.data.ts and add information in this format

    {
    year: number
    name: "Name"
    award: "Award"
    }
    
### History

To add images, add image file to src >> images >> history and add the line
`import TeamPhoto20xx from "./history/team-photo-20xx.png";` and make sure to export it in the export statement.


Navigate to data >> history >> history.data.ts and import the image `TeamPhoto20xx` where necessary. 

Add information in this format:

    {
    year: xxxx,
    image: TeamPhoto20xx,
    summaryMarkup: \`paragraph information surrounded by \<p> tags for each paragraph\`
    },


### Results

Navigate to data >> results >> results.data.ts and add information in this format:

    {
    year: number,
    sectionals: "Place",
    regionals: "Place",
    nationals: "Place",
    teamPageLabel: "USAU",
    teamPageLink: "https://usauteampagelink.com"
    },

### Roster

Navigate to data >> roster >> roster.data.ts and add information in this format:

    {
    year: 2022,
    imagePath: "",
    players: [
      {
        number: 0,
        name: "Eli Artemakis",
        year: "Sophomore",
      },
      {}, 
      ...
      ]
    }

Currently, imagePath is not being used to show the image of the team picture. However because it is required by the type, it must be in the object. It can be left blank.

### Tournaments

Navigate to data >> tournaments >> tournaments.data.ts and add information in this format:

    {
        year: 2022,
        tournaments: [
        {
            season: "Spring or Fall",
            nameLabel: "Tournament Name",
            nameLink: "https://play.usaultimate.org/events/tournament_name/",
            when: "Date",
            location: "City, State",
            result: "Place"
        },
        {},
        {},
        ...
        ]
    }



## Available Scripts

In the project directory, you can run:

### `npm run deploy`
Will deploy the app to the gh-pages branch. Once deployed, make sure that you reconfigure the custom domain in Settings>>Pages>>Custom Domain

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. This is usually how you will check changes locally for any new information.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### Do Not Do This.
