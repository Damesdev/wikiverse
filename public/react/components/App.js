import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	// Creating states for pages and selected Page
	const [pages, setPages] = useState([]);
	const [selectedPage, setSelectedPage] = useState({})

	// Fetching Pages function
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
			console.log(pagesData)
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	// Fetching Pages at beginning of page load
	useEffect(() => {
		fetchPages();
	}, []);


	// Returning 
	return (
		<main>	
      		<h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			<PagesList pages={pages} selectedPage = {selectedPage} setSelectedPage={setSelectedPage} />
		</main>
	)
}

/* 
App Structure

App > pagesList > page  

*/