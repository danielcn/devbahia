import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const App = () =>(
    <Card className="App">
        <CardContent>
            <h1>Hello Dev Bahia</h1>
            <CardActions>
                <Button size="small" color="primary">Learn More</Button>
            </CardActions>
        </CardContent>
    </Card>
);

export default App;
