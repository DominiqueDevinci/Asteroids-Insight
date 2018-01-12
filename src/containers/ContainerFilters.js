import React, { Component } from 'react'
import {Route} from 'react-router'
import {Row} from 'react-bootstrap'
import FilterDateClosest from '../components/FilterDateClosest.js'

export const ContainerFilters = () => (
    <Row>
        <Route path="/closest" component={FilterDateClosest} />
    </Row>
)
