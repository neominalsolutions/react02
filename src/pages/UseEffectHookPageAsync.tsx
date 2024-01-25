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

function UseEffectHookPageAsync() {
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
	const [states, setStates] = useState<State[]>([]);

	console.log('...rendering');

	// eğer seçilen şehre ait ilçeleri apiden çekecek isek en doğru yer plate değişimini yakalyıp güncel state bilgilerini apiden çekmek bunu yapacağımız en doğru yer useEffect hook. Çünkü async çalışır.
	useEffect(() => {
		console.log('api calling...');
		/* axios.get(`www.a.com/api/states?cityPlate=plate`).then(res => {
            setStates(res.data);
        }) */

		// yukarıdaki kodu simule ettik.
		// aşağıdaki kodlar ile axios veri çekince state güncellemesi yaparız.
		const selectedCity = cities.find((x) => x.plate === plate);
		// senkron kod blok örneği
		if (selectedCity) {
			const selectedStates = [...(selectedCity?.states as State[])]; // state yapmadık nasıl olduda selectedStates değişip ekrana render aldı ?
			setStates([...selectedStates]);
		}
	}, [plate]); // plate değişimin dinle ona göre api ye çağrı yap.

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
					{states.map((item: State) => {
						return (
							<option key={item.id} value={item.id}>
								{item.value}
							</option>
						);
					})}
				</select>
			)}
		</div>
	);
}

export default UseEffectHookPageAsync;
