import React from 'react'
import {Route} from 'react-router'
import {Row} from 'react-bootstrap'
import AsteroidTable from '../components/AsteroidTable.js'
import ChartHazardous from '../components/ChartHazardous.js'

export const ContainerTables = () => (
    <Row>

        <Route path="/asteroids" component={AsteroidTable} />
        <Route path="/asteroids" component={ChartHazardous} />

    </Row>
)
