import React from "react";
import useStyles from "./Screen.styles";

import {IProps, IStyles} from './Screen.inrerfaces';

const Screen = ({statement}: IProps): JSX.Element => {
    const styles: IStyles = useStyles();

    return <div className={styles.root}>
        {statement}
    </div>
}

export default Screen