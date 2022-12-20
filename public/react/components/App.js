import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	// Creating states for pages and selected Page
	const [pages, setPages] = useState([]);
	const [selectedPage, setSelectedPage] = useState({})
	const [selectedPageState, setSelectedPageState] = useState(false)
	const [isCreateNewPage, setIsCreateNewPage] = useState(false)

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

	// Handle Add Page Click
	function addPageClick(){
		setIsCreateNewPage(true)
		console.log(isCreateNewPage)
	}

	// Fetching Pages at beginning of page load
	useEffect(() => {
		fetchPages();
	}, []);


	// Returning 
	{/* Ternary operator if create new page is true show form if false show the pages list >
			
			if selected page is true display selected page with expanded information : show pages list*/}
	return (
		<main>	
      		<h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>
			{/* Creating ternary operator for new page */}
			{!isCreateNewPage ? 
				<div> 
					<button onClick={()=>{addPageClick()}}>Add Page</button> 
					<PagesList pages={pages} selectedPage = {selectedPage} setSelectedPage={setSelectedPage}/> 
				</div>
				: 
				<form>
					<label>Article Information</label> <br></br>
						<input type="text" placeholder='Article Title'/> <br></br>
						<input type="text" placeholder='Article Content'/> <br></br>
						<input type="text" placeholder='Tags'/> <br></br>
					<label>Author Information</label><br></br>
						<input type="text" placeholder='Author Name'/><br></br>
						<input type="text" placeholder='Author Email'/><br></br>
					<button>Submit</button>
					<button onClick={()=>{setIsCreateNewPage(false)}}>Exit</button>
				</form>
			}	
		</main>
	)
}

/* 
App Structure

App > pagesList > page  

*/