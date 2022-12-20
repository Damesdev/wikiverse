import React from 'react';

export const Page = ({page, setSelectedPage, selectedPage}) => {

  const handlePageClick = (chosenPage) => {
		setSelectedPage(chosenPage);
	};

  return <>
    <p onClick={() => {handlePageClick(page)}}>{page.title}</p>
  </>
};
	