import {TableCell} from '@mui/material';
import {TableCellProps} from '@mui/material/TableCell/TableCell';
import {makeStyles} from '@mui/styles';

import {CustomTheme} from '@style';

const useStyles = makeStyles<CustomTheme>(theme => ({
    tableValueCell: {
        color: theme.palette.secondary.main,
    },
}));

type TableValueCellProps = TableCellProps;

export function TableValueCell({children, ...props}: TableValueCellProps) {
    const classes = useStyles();
    return (
        <TableCell className={classes.tableValueCell} {...props}>
            {children ?? '-'}
        </TableCell>
    );
}
