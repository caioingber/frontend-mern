# Ecological Report Card

For this project, I developed a full stack MERN application that allows users to view countries and their respective demographic and ecological footprint data. This repository is for the front-end UI which was built using React.

Link to [backend repo](https://github.com/caioingber/backend-mern)

![landing page](eco-screenshot.png)

## Development

I approached this project by first building out my backend models and API and then designed, wireframed and implemented the front end based off the data I was utilizing. I began by thinking of how to utilize the data to structure the frontend and overall user experience. I wrote user stories to highlight the basic features of the product and worked from there.

Initially, I worked on retrieving data from my API by utilizing the JS Fetch method and storing that data as state in the App component of my React application. Once I was able to retrieve the data I broke down the separate views of the application and created boilerplate for the necessary components and configured the routes utilizing the React Router library. After this, I began mapping the data in the appropriate components, passing them down as props through the app component. The region component is stateful as it includes a search bar that implements a filter as well as two other buttons that filter out countries.

```Javascript

 thumbNails = thumbNails.filter(thumb => {
      if (thumb) {
        let result = thumb.props.children.props.children[0].props.children;
        result = result[0].toUpperCase() + result.substr(1);
        let word = this.state.search;
        if (word != "") {
          word = word[0].toUpperCase() + word.substr(1);
        }
        if (result.includes(word)) {
          return thumb;
        }
      }
    });
    if (this.state.excess) {
      thumbNails = thumbNails.filter(thumb => {
        let result = thumb.props.children.props.children[1].props.children;
        if (result > 0) {
          return thumb;
        }
      });
    }
    if (this.state.deplete) {
      thumbNails = thumbNails.filter(thumb => {
        let result = thumb.props.children.props.children[1].props.children;
        if (result < 0) {
          return thumb;
        }
      });
    }

```

## Challenges

Aside from the filters, I struggled most with presenting the 'All' country view, as there was no value in my data that allowed a view of all countries. In order to solve for this I iterated through the length of an established region area and pushed all countries into a last 'all' value.

```Javascript

 if (!regions.includes(place.country.region)) {
      regions.push(place.country.region);
      return (
        <Link to={`/region/${place.country.region}`} className="flex column">
          <div
            key={place._id}
            className="region flex cover"
            id={place.country.region}
            data={props.data}
            key={place.country.region}
          >
            <h1>{place.country.region}</h1>
          </div>
        </Link>
      );
    } else if (regions.length === 5 && counter < 1) {
      counter++;
      return (
        <Link to={`/region/World`} className="flex column">
          <div
            key={place._id}
            className="region flex cover"
            id="All"
            data={props.data}
            key={place.country.region}
          >
            <h1>All</h1>
          </div>
        </Link>
      );
    }

```

## Technologies Used

- React.js
- CSS (Bootstrap)

## Contributing

I welcome any and all feedback. Please fork and clone the repository and submit a pull request for any recommendations.
