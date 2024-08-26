import React from 'react';
import {MessageDescriptor} from 'react-intl';
import {useDispatch} from 'react-redux';
import {Link as MuiLink} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {push} from 'connected-react-router';

import {CustomTheme} from '@style';

import LocalizedText, {LocalizedTextProps} from '../localize/LocalizedText';

const useStyles = makeStyles((theme: CustomTheme) => ({
    link: {
        color: theme.palette.primary.main,
        cursor: 'pointer',
    },
}));

type LinkTarget = '_blank' | '_top' | '_self' | '_parent';

type LinkActionProps = {
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    underline?: 'none' | 'hover' | 'always';
    href?: string;
    target?: LinkTarget;
};

export const Link = ({
    label,
    onClick,
    className,
    underline,
    href,
    target = '_self',
}: LinkActionProps & LocalizedTextProps & React.HTMLAttributes<HTMLAnchorElement>) => {
    const classes = useStyles();

    return (
        <MuiLink
            underline={underline ?? 'always'}
            href={href}
            target={target}
            className={`${classes.link} ${className}`}
            onClick={onClick}
            data-testid="linkAction"
        >
            <LocalizedText label={label} />
        </MuiLink>
    );
};

type RouterLinkProps = Pick<LinkActionProps, 'underline'> & {
    path: string;
    label: MessageDescriptor | string;
    className?: string;
};

export const RouterLink = ({path, label, ...props}: RouterLinkProps) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(push(path));
    };

    return <Link label={label} onClick={handleClick} {...props} />;
};
