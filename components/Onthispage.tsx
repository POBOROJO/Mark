"use client"

import { Link } from 'lucide-react';
import React, {useEffect, useState} from 'react'


interface LinkType{
    id: string;
    text: string;
}

const Onthispage = ({htmlContent}:{htmlContent: string}) => {

 const [links, setlinks] = useState<null|LinkType[]>(null);

 useEffect(() => {
    const temp = document.createElement('div');
    temp.innerHTML = htmlContent;

    const headings = temp.querySelectorAll('h2, h3');

    const generatedLinks: LinkType[] = [];

    headings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`;
        heading.id = id;

        generatedLinks.push({
          id:id,
          text: heading.innerHTML
        })
    });

    setlinks(generatedLinks);


 }, [htmlContent]);
 

  return (
    <div className='hidden md:block'>
      <div className='sticky'>
        <h2>On this page</h2>
        <ul>{links && links.map((link) => <li key={link.id}><Link href={`#${link.id}`}>{link.text}</Link></li>)}</ul> 
      </div>
    </div>
  )
}

export default Onthispage
