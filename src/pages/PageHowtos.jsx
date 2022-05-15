import axios from 'axios';
import {useState,useEffect} from 'react';

const url = 'https://edwardtanguay.netlify.app/share/howtos.json';

export const PageHowtos = () => {
	const [howtos,setHowtos] = useState([]);
	return (
		<>
			<h2>Howtos</h2>
			<p>I currently have {howtos.length} howtos:</p>
		</>
	)
}