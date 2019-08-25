import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Header from '../../components/Header/Header';
import MediaCard from '../../components/MediaCard/MediaCard';
import Jobs from '../../components/Jobs/Jobs';

const fethedArray = [1, 2, 3, 4, 5 , 6, 7];

const mediaCards = () => fethedArray.map((index, value) => {
  return <MediaCard  key={index} />;
});

class Home extends Component {
  render () {
    return (
      <div className="Home">
        <Header/>
        <Card>
          <CardContent>
            <h1>Hello Dev Bahia</h1>
            { mediaCards() }
          </CardContent>
        </Card>
        <Jobs />
      </div>
    );
  }
}

export default Home;
