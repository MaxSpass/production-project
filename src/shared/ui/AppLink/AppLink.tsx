import React from 'react';
import cls from './AppLink.module.scss'
import {Link, LinkProps} from "react-router-dom";
import classNames from "classNames";

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
	const {to, className, children, theme = AppLinkTheme.PRIMARY, ...rest} = props;
	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, [className, theme])}
			{...rest}
		>
			{children}
		</Link>
	);
};