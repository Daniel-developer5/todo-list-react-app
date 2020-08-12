import React, { Component } from 'react'

import Item from '../item/'

import './list.scss'

export default class List extends Component {
    render() {
        const { 
            todos, onMarkAsDone,
            onDeleteItem, onEdit
        } = this.props

        const elems = todos.map(({ id, ...other }) => {
            return (
                <Item 
                    { ...other }
                    key={ id }
                    onMarkAsDone={ () => { onMarkAsDone(id) } }
                    onDeleteItem={ () => { onDeleteItem(id) } }
                    forEdit={ {id, edit: onEdit } }
                />
            )
        })

        return (
            <ul className="list">
                { elems }
            </ul>
        )
    }
}