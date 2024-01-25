import { Button, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';

type ChildComponentProps = {
	email: string;
	username: string;
	id: number;
	onDelete(id: number): void;
};

function ChildComponent(props: ChildComponentProps) {
	const { email, username, id, onDelete } = props; // object deconstruction

	const deleteItem = () => {
		var result = window.confirm('silmek istediğinize emin misiniz?');

		if (result) {
			console.log('delete' + id);
			onDelete(id); // event invoke etme işlemi
			// üst componente yani parent componente silinecek olan id gönderiyoruz.
		}
	};

	return (
		<>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemText primary={username === '' ? email : username} />
					<Button onClick={deleteItem} variant="outlined" color="error">
						Sil
					</Button>
				</ListItemButton>
			</ListItem>
		</>
	);
}

export default ChildComponent;
