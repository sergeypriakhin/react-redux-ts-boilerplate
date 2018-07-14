import * as React from 'react';
import { shallow } from 'enzyme';

import PageTitle from '../index';
import * as s from '../PageTitle.scss';

it('renders the PageTitle component', () => {
	const result = shallow(<PageTitle title="hello" />).contains(
		<h1 className={s.title}>hello</h1>
	);
	expect(result).toBeTruthy();
});
