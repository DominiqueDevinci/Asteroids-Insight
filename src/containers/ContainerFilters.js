import React from 'react'
import {Route} from 'react-router'
import {Row} from 'react-bootstrap'
import FilterDateClosest from '../components/FilterDateClosest.js'
import FilterGeneric from '../components/FilterGeneric.js'


export const ContainerFilters = () => (
    <Row>
        <Route path="/asteroids/closest" component={FilterDateClosest} />
        <Route path="/asteroids/browse" component={FilterGeneric} />
    </Row>
)
