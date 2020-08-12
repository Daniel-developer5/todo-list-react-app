import React, { Component } from 'react'

import Layout from '../layout/'

import './app.scss'

export default class App extends Component {
    maxId = localStorage.getItem('maxId') || 0

    state = {
        todos: JSON.parse(localStorage.getItem('todos')) || []
    }

    onAddItem = text => {
        this.setState(({ todos }) => {
            return {
                todos: [
                    ...todos,
                    { 
                        label: text, 
                        id: this.maxId++,
                        done: false
                    }
                ]
            }
        })
    }

    getIndex = id => {
        return this.state.todos.findIndex(elem => elem.id === id)
    }

    stateProcessing = (id, prop, label) => {
        const index = this.getIndex(id)
        const oldItem = this.state.todos[index]
        const newItem = { ...oldItem, [prop]: label ? label : !oldItem[prop] }

        this.setState(({ todos }) => {
            return {
                todos: [
                    ...todos.slice(0, index),
                    newItem,
                    ...todos.slice(index + 1)
                ]
            }
        })
    }

    onDeleteItem = id => {
        this.setState(({ todos }) => {
            const index = this.getIndex(id)

            return {
                todos: [
                    ...todos.slice(0, index),
                    ...todos.slice(index + 1)
                ]
            }
        })
    }

    onMarkAsDone = id => {
        this.stateProcessing(id, 'done')
    }

    onEdit = (id, newLabel) => {
        if (!newLabel) {
            this.onDeleteItem(id)
            return
        } 

        this.stateProcessing(id, 'label', newLabel)
    }

    render() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos))
        localStorage.setItem('maxId', this.maxId)

        return (
            <Layout 
                todos={ this.state.todos }
                onAddItem={ this.onAddItem }
                onMarkAsDone={ this.onMarkAsDone }
                onDeleteItem={ this.onDeleteItem }
                onEdit={ this.onEdit }
            />
        )
    }
}