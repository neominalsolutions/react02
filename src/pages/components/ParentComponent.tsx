import React, { useEffect, useState } from 'react';
import { User } from '../DemoPage';
import {
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	TextField,
} from '@mui/material';
import ChildComponent from './ChildComponent';

type ParentComponentProps = {
	users: User[];
};

// yaygın kullanım şekli
function ParentComponent({ users }: ParentComponentProps) {
	// let filteredUsers = [...users]; yanlış kullanım, state güncellemesi yapmamız lazım

	const [filteredUsers, setFilteredUsers] = useState<User[]>([]); // referansı koparılmış bir şekilde

	useEffect(() => {
		setFilteredUsers([...users]);
	}, []);

	const searchText = (event: any) => {
		if (event.target.value !== '') {
			const filters = filteredUsers.filter((x) =>
				new RegExp(event.target.value, 'i').test(x.username)
			);
			setFilteredUsers([...filters]);
		} else {
			setFilteredUsers([...users]);
		}
	};

	return (
		<Box flexDirection={'row'}>
			<TextField
				onChange={searchText}
				id="outlined-basic"
				label="search item"
				variant="outlined"
			/>

			<Divider sx={{ marginTop: '0.5rem', marginBottom: '0.5rem' }} />

			<List>
				{filteredUsers.map((item: User) => {
					return (
						<ChildComponent
							key={item.id}
							email={item.email}
							username={item.username}
							id={item.id}
							onDelete={(id: number) => {
								console.log('parent silinecek' + id);
								// filteredUsers = users.filter((x) => x.id !== id); yanlış kullanım
								const filters = filteredUsers.filter((x) => x.id !== id);
								setFilteredUsers([...filters]);
								// silinmeyenleri getir.
								console.log('filteredUsers', filteredUsers);
							}}
						/>
					);
				})}
			</List>
		</Box>
	);
}

export default ParentComponent;
