import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Header from '../../components/Header/Header';

const fethedArray = [1, 2, 3, 4, 5 , 6, 7];

const mediaCards = () => fethedArray.map((index, value) => {
    // <MediaCard />
    return console.log(index, value);
});

class Home extends Component {
    render () {
        return (
            <div className="Home">
                <Header/>
                <Card>
                    <CardContent>
                        <h1>Hello Dev Bahia</h1>
                        { mediaCards()}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Home;
