import React from 'react';
import { useForm } from 'react-hook-form';
import { InferType } from 'yup';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// type LoginFormState = {
// 	email: string;
// 	password: string;
// };

const schema = yup
	.object({
		email: yup
			.string()
			.required('e-posta boş geçilemez')
			.email('e-posta formatında giriş yapınız'),
		password: yup
			.string()
			.uppercase()
			.required('parola boş geçilemez')
			// .length(8, 'minimum 8 karakter olmak zorunda')
			.matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
				message: <em>Invalid password</em>,
			}),
		// Minimum eight characters, at least one letter and one number:
	})
	.required();

type LoginFormState = InferType<typeof schema>;

function FormsPage() {
	// useForm hook ile formun state değerlerini tutuyoruz
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isValid },
	} = useForm<LoginFormState>({
		resolver: yupResolver(schema), // form artık yup üzerinden validayonları uygulayacak
	});

	const email = watch('email'); // input değerlerini takibi için kullanırız.
	console.log('email', email);

	const onFormSubmit = (formValue: LoginFormState) => {
		console.log('data', formValue);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onFormSubmit)}>
				{/* <input
					{...register('email', {
						required: { value: true, message: 'email boş geçilemez' },
						validate: (value) => {
							// custom validation yöntemi
							return value.includes('@') || 'e-posta formatında giriniz';
						},
					})}
				/> */}
				<input {...register('email')} />
				<br></br>
				<span>{errors.email?.message}</span>
				<br></br>
				<input {...register('password')} />
				<br></br>
				<span>{errors.password?.message}</span>
				<br></br>
				<input disabled={!isValid} type="submit" value="login" />
			</form>
		</div>
	);
}

export default FormsPage;
