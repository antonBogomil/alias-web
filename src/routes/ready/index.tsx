import React from 'react';
import {inject, observer} from "mobx-react";
import {Dialog} from "@material-ui/core";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TeamAvatar from "../../components/Avatar";

const Ready = (props) => {
	const {store, history} = props;

	function onNext() {
		store.root.createRound();
		history.push('/play')
	}
	function onBack() {
		history.goBack()
	}
	function onSkip() {
		store.root.skipRound()
		history.push('/table')
	}
	if (!store.root.currentTeam) {
		return props.history.push('/teams');
	}
	const team = store.root.currentTeam;
	return (
		<div>
			<Dialog open={true}>
				<DialogTitle>
					<div style={{textAlign: 'center'}}>
						<TeamAvatar
							color={team.color}
							name={team.name}
						/>
					</div>
					<span dangerouslySetInnerHTML={{__html: `Team "<b>${team.name}</b>" are you ready?`}}/>
				</DialogTitle>
				<DialogContent>
					<Button onClick={onNext} color={"primary"}>Yes. Go</Button>
					<Button onClick={onBack}>Back</Button>
					<Button onClick={onSkip} color={"secondary"}>Skip</Button>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default inject('store')(observer(Ready));
