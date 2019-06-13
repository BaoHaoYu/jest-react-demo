import * as React from 'react'
// @ts-ignore
import s from './style.scss'
export interface IInput {
    label?: string
    value?: string
    showLabel?: boolean
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.StatelessComponent<IInput> = function (props) {
    return (
        <div className={ s.inputBox }>
            { props.showLabel && (
                <div className={ s.inputBox__label }>
                    <label>
                        { props.label }
                    </label>
                    <span>
                        :
                    </span>
                </div>
            ) }

            <input
                className={ s.inputBox__input }
                type={ 'text' }
                value={ props.value }
                onChange={ props.onChange }
            />
        </div>
    )
}

Input.defaultProps = {
    onChange() { }
}
