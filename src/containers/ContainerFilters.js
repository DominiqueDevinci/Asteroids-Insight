import React, { Component } from 'react'
import {Route} from 'react-router'
import {Row} from 'react-bootstrap'

export const ContainerFilters = () => (
    <Row>
        <Route Path="/browse" >
            <p> main </p>
        </Route>
        <Route Path="/closest" >
            <p> test </p>
        </Route>
    </Row>
)
