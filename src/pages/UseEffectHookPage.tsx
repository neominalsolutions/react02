import React, { useEffect, useState } from 'react';

export interface City {
	plate: number;
	value: string;
	states?: State[]; // n
}

export interface State {
	id: number;
	value: string; // 1
}

function UseEffectHookPage() {
	const cities: City[] = [
		{
			plate: 6,
			value: 'ankara',
			states: [
				{ id: 1, value: 'Mamak' },
				{ id: 2, value: 'Çankaya' },
			],
		},
		{
			plate: 34,
			value: 'istanbul',
			states: [
				{ id: 1, value: 'Beşiktaş' },
				{ id: 2, value: 'Kadıköy' },
			],
		},
		{
			plate: 35,
			value: 'izmir',
			states: [
				{ id: 1, value: 'Bornova' },
				{ id: 2, value: 'Karşıyaka' },
			],
		},
	];

	// cities.forEach(item => item.states.forEach(state => {
	//     state.value
	// }))

	const [plate, setPlate] = useState<number>(-1); // dropdowndan seçilen state

	const selectedCity = cities.find((x) => x.plate === plate);
	let selectedStates: State[] = [];

	console.log('selectedCity', selectedCity);

	// senkron kod blok örneği
	if (selectedCity) {
		selectedStates = [...(selectedCity?.states as State[])]; // state yapmadık nasıl olduda selectedStates değişip ekrana render aldı ?
	}

	console.log('...rendering');

	return (
		<div>
			plate: {plate}
			<br></br>
			<select
				defaultValue={plate}
				onChange={(e: any) => {
					setPlate(Number(e.target.value));
				}}
			>
				<option disabled={true} value={-1}>
					Seçim Yapınız
				</option>
				{cities.map((item: City, index: number) => {
					return (
						<option key={item.plate} value={item.plate}>
							{item.value}
						</option>
					);
				})}
			</select>
			<br></br>
			{plate !== -1 && (
				<select>
					{selectedStates.map((item: State) => {
						return <option value={item.id}>{item.value}</option>;
					})}
				</select>
			)}
		</div>
	);
}

export default UseEffectHookPage;
