import React from 'react'
import {Route} from 'react-router'
import {Row} from 'react-bootstrap'
import AsteroidTable from '../components/AsteroidTable.js'

export const ContainerTables = () => (
    <Row>
        <AsteroidTable />
    </Row>
)
