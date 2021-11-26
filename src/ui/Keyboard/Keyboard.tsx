import React from "react";
import useStyles from "./Keyboard.styles";

import {IStyles, IProps} from './Keyboard.interfaces';

const Keyboard = ({setStatement, getResult, clear}: IProps): JSX.Element => {
    const styles: IStyles = useStyles();

    const keys: Array<number | string> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '*', '/', '+', '-', '=', 'c'];

    return <div className={styles.root}>
        {keys.map(key => {
            if (key === '=') return <div key={key} onClick={() => getResult()}>{key}</div>
            if (key === 'c') return <div key={key}
                                         onClick={() => clear()}>{key}</div>
            return <div key={key} onClick={() => setStatement((statement: string): string => {
                if (statement.length < 24) return statement + key; else return statement
            })}>{key}</div>
        })}
    </div>
}

export default Keyboard