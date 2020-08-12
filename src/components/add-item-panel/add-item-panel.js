import React, { Component } from 'react'

import { TextField, Button } from '@material-ui/core'

import './add-item-panel.scss'

export default class AddItemPanel extends Component {
    state = {
        value: ''
    }

    onChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    onAddItem = e => {
        e.preventDefault()

        const { value } = this.state

        if (value) {
            this.props.onAddItem(value)
            this.setState({
                value: ''
            })
        }
    }

    render() {
        return (
            <form 
                className="add-item-panel"
                onSubmit={ this.onAddItem }
            >
                <TextField 
                    id="outlined-basic" 
                    label="Task" 
                    variant="outlined" 
                    onChange={ this.onChange }
                    value = { this.state.value }
                    autoComplete="off"
                />
                <Button 
                    variant="outlined"
                    type="submit"
                >
                    Add
                </Button>
            </form>
        )
    }
}