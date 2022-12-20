import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, setSelectedPage, selectedPage}) => {
	
	console.log(selectedPage.id)
	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} setSelectedPage={setSelectedPage} selectedPage={selectedPage} />
			})
		}
	</>
} 
