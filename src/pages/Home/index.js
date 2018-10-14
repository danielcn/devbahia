import React, {Component} from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Header from '../../components/Header';

class Home extends Component {
    render () {
        return (
            <div className="Home">
                <Header/>
                <Card>
                    <CardContent>
                        <h1>Hello Dev Bahia</h1>
                        <CardActions>
                            <Button size="small" color="primary">Learn More</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Home;
