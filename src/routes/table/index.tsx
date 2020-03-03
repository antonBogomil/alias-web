import React from 'react';
import {inject, observer} from "mobx-react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

const TablePage = (props) => {
    return (
        <div className='wrapper'>
            Results
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.game.teams.list.map((t) => {
                        return <TableRow>
                            <TableCell>
                                {t.name}
                            </TableCell>
                            <TableCell>
                                {t.score}
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default observer(inject(({store}) => store)(TablePage));