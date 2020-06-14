import {Avatar, Fab, List, ListItem, ListItemAvatar, ListItemText, makeStyles} from "@material-ui/core";
import {SortableContainer, SortableElement} from "react-sortable-hoc";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import TeamAvatar from "../../../components/Avatar";

const TeamItem = SortableElement(({item, handleDelete}) => {
	return (
		<ListItem>
			<TeamAvatar
				color={item.color}
				name={item.name}
			/>
			<ListItemText>{item.name}</ListItemText>
			<div>
				<Fab onClick={() => {
					handleDelete(item.id);
				}} aria-label="delete">

					<DeleteIcon fontSize='small'/>
				</Fab>
			</div>
		</ListItem>
	)
});
export const TeamsList = SortableContainer(({items, handleDelete}) => {
	return (
		<List>
			{
				items.map((item: any, i: number) => (
					<TeamItem
						index={i}
						key={i}
						item={item}
						handleDelete={handleDelete}
					/>
				))
			}
		</List>
	)
});
