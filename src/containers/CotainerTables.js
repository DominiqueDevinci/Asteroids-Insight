import React, { Component } from 'react'
import {Route} from 'react-router'
import {Row} from 'react-bootstrap'

export const ContainerTables = () => (
    <Row>
        <Route Path="/closest" >
            <p> main </p>
        </Route>
        <Route Path="/browse" >
            <p> test </p>
        </Route>
    </Row>
)
