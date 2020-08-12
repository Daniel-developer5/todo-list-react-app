import React, { Component } from 'react'

import { Checkbox } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { TextField } from '@material-ui/core'

import './item.scss'

export default class Item extends Component {
    state = {
        edit: false,
        newLabel: this.props.label
    }

    onStartEdit = () => {
        this.setState({
            edit: true
        })
    }

    onEdit = e => {
        this.setState({
            newLabel: e.target.value
        })
    }

    saveChanging = e => {
        if (e.target.className === 'edit-form') {
            e.preventDefault()
        }

        if (
            e.target.className.match(/InputBase/i) &&
            !e.target.className.match(/OutlinedInput/i)
        ) {
            return
        }

        this.setState({
            edit: false
        })

        const { edit, id } = this.props.forEdit

        edit(id, this.state.newLabel)
    }

    render() {
        const { 
            label, done, 
            onMarkAsDone, onDeleteItem,
        } = this.props

        const { edit } = this.state

        let classNames = 'item'

        if (done) classNames += ' done'

        return (
            <li className={ classNames }>
                <div>
                    <div>
                        <Checkbox 
                            color="secondary"
                            onClick={ onMarkAsDone }
                            checked={ done }
                        />
                    </div>
                    <Content 
                        label={ label }
                        edit={ edit }
                        onStartEdit={ this.onStartEdit }
                        onEdit={ this.onEdit }
                        saveChanging={ this.saveChanging }
                    />
                </div>
                <button onClick={ onDeleteItem }>
                    <CloseIcon color="secondary" />
                </button>
            </li>
        )
    }
}

const Content = props => {
    if (props.edit) {
        return (
            <EditTask 
                label={ props.label }
                onEdit={ props.onEdit }
                saveChanging={ props.saveChanging }
            />
        )
    } else {
        return (
            <Task
                label={ props.label }
                onStartEdit={ props.onStartEdit }
            />
        )
    }
}

const Task = props => {
    return (
        <span 
            className="label"
            title="Click to edit"
            onClick={ props.onStartEdit }
        >
            { props.label }
        </span> 
    )
}

class EditTask extends Component {
    componentDidMount() {
        document.addEventListener('click', this.props.saveChanging)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.props.saveChanging)
    }

    render() {
        const { label, onEdit, saveChanging } = this.props

        return (
            <form 
                onSubmit={ saveChanging }
                className="edit-form"
            >
                <TextField 
                    autoFocus
                    id="standard-basic"
                    onChange={ onEdit }
                    defaultValue={ label }
                />
            </form>
        )
    }
}