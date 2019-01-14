import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Header from '../../components/Header/Header';
import MediaCard from '../../components/Card/MediaCard';

class Home extends Component {
    render () {
        return (
            <div className="Home">
                <Header/>
                <Card>
                    <CardContent>
                        <h1>Hello Dev Bahia</h1>
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                        <MediaCard />
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Home;
