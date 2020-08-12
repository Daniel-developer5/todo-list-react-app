import React, { Component } from 'react'

import { Paper, Container } from '@material-ui/core'

import List from '../list'
import AddItemPanel from '../add-item-panel'

import './layout.scss'

export default class Layout extends Component {
    render() {
        const { 
            todos, onAddItem, 
            onMarkAsDone, onDeleteItem, onEdit
        } = this.props

        const list = (
            <List 
                todos={ todos }
                onMarkAsDone={ onMarkAsDone }
                onDeleteItem={ onDeleteItem }
                onEdit={ onEdit }
            />
        )

        const emptyBlock = <div className="empty-block">Nothing here...</div>

        const content = todos.length ? list : emptyBlock

        return (
            <Container maxWidth="lg">
                <Paper elevation={3} className="layout">
                    <AddItemPanel onAddItem={ onAddItem } />
                    { content }
                </Paper>
            </Container>
        )
    }
}