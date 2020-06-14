import React from 'react';
import {inject, observer} from "mobx-react";
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import TeamAvatar from "../../components/Avatar";
import Footer from "../../components/Footer";

const TablePage = (props) => {
	const navigation = {
		next: '/ready'
	}
	return (
		<div className='wrapper'>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>#</TableCell>
						<TableCell>Name</TableCell>
						<TableCell>Score</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{props.store.root.teams.sorted.map((t) => {
						return (
							<TableRow key={t.id}>
								<TableCell>
									<TeamAvatar name={t.name} color={t.color}/>
								</TableCell>
								<TableCell>
									{t.name}
								</TableCell>
								<TableCell>
									{t.score}
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
			<Footer history={props.history} navigation={navigation}/>
		</div>
	);
};

export default inject('store')(observer(TablePage));
