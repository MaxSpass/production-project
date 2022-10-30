import React, {useState} from 'react';
import classes from './Counter.module.scss'

const Counter = () => {
	const [count, setCount] = useState(0);

	const incremental = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<h4>{count}</h4>
			<button className={classes.button} onClick={incremental}>incremental</button>
		</div>
	);
};

export default Counter;