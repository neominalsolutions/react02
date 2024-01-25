import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ParentComponent from './components/ParentComponent';

export interface User {
	id: number;
	username: string;
	email: string;
}

function DemoPage() {
	const [users, setUsers] = useState<User[]>(); // page component üzerinde veri çekme işlemlerini yapıyoruz.

	useEffect(() => {
		// component doma girişte veri çekmek için useEffect hook kullanıyoruz.
		console.log('componentdidmount');

		axios
			.get('https://jsonplaceholder.typicode.com/users', {
				signal: AbortSignal.timeout(1000), // 5sn içerisinde istek atılamaz cevap dönemez ise buradı sinyal kes network request iptal et
			})
			.then((response) => {
				console.log('users', response.data);
				setUsers(response.data as User[]);
			});

		return () => {
			// clean up functions
			// componentwillunmount destroy işlemi
			// component domdan çıktığında temizlik işlemleri bu callback functionda yapılır
			console.log('component willunmount');
			AbortSignal.abort(); // network sinyalini terminate et.
		};
	}, []);

	// bir component içerisinde birden fazla useEffect kullanılabilir
	// useEffect de deps kısmına yazılan state değerinin takibi sağlanır.
	// lifecycle methodlardan componentdidupdate denk gelir.
	useEffect(() => {
		// users set state durumunda bu hook otomatik olarak tetiklenir.
		if (users) {
			// user load olduysa çalış
			console.log('componentdidupdate');
			// users state olarak değişimin yakalmış olduk
		}
	}, [users]); // [state1,state2,state3] değişicek stateleri takip ettiğimiz yer. // state1, state2 veya state3 de herhangi bir değişiklikte tetiklenir.

	// bu componenti user datası çekildiyse yükle demek oluyor
	return <>{users ? <ParentComponent users={users} /> : <>...loading</>}</>;
}

export default DemoPage;
