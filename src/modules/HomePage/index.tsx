import * as React from 'react';
import PageTitle from '../../components/PageTitle';

interface HomeProps {
	location: {
		pathname: string;
	};
}

export default function HomePage({ location }: HomeProps) {
	return (
		<div>
			<PageTitle title="It is Home page !!!" />
			<h2>Pathname - "{location.pathname}"</h2>
		</div>
	);
}
