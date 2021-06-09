import React from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid, GridRow} from 'semantic-ui-react'
import { Route } from 'react-router'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <Grid.Column width={4}>
                        <Categories/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route path="/" component={ProductList}/>
                    </Grid.Column>
                </GridRow>
            </Grid>
        </div>
    )
}
