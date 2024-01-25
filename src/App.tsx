import { useRoutes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import ContactPage from './pages/ContactPage';
import DemoPage from './pages/DemoPage';
import UseEffectHookPage from './pages/UseEffectHookPage';
import UseEffectHookPageAsync from './pages/UseEffectHookPageAsync';

function App() {
	const routes = useRoutes([
		{
			path: '/',
			Component: Layout, // ne kadar sayfa varsa layout component altına girsin.
			children: [
				{
					path: 'about',
					element: <>Hakkımızda</>,
				},
				{
					path: 'contact',
					Component: ContactPage,
				},
				{
					path: 'demo',
					Component: DemoPage,
				},
				{
					path: 'useEffectDemo',
					Component: UseEffectHookPage,
				},
				{
					path: 'useEffectDemoAsync',
					Component: UseEffectHookPageAsync,
				},
				{
					path: '*', // link bulunamadıysa bütün pathlerin en sonuna * koyalım.
					element: <>404 Sayfa bulunamadı</>,
				},
			],
		},
	]);

	return routes;
}

export default App;
