import {FC} from 'react';

import LocalizedText from '@components/localize/LocalizedText';

import {makeStyles} from '@mui/styles';
import {CustomTheme} from '@style';

const useStyles = makeStyles((theme: CustomTheme) => ({
    card: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(3),
        backgroundColor: theme.palette.primary.contrastText,
        borderRadius: '24px',
        padding: theme.spacing(2.5, 2.5, 2),
        flex: 1,
        boxShadow: '0px 2px 6px 2px #00000026',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    title: {
        fontSize: '1.5rem', // equivalent to 'text-lg'
        color: theme.palette.text.primary,
        fontFamily: 'Quicksand, sans-serif',
        fontWeight: 700,
        marginBottom: theme.spacing(1),
    },
    description: {
        fontSize: '18px', // equivalent to 'text-md'
        color: theme.palette.text.primary,
        fontFamily: 'Open Sans, sans-serif',
    },
}));

const TermsAndConditions: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.card}>
            <div>
                <h3 className={classes.title}>
                    <LocalizedText label={{id: 'welcome', defaultMessage: 'Welcome to Eelow'}} />
                </h3>
                <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nisi ac nibh tristique tempus. Fusce vitae
                    tincidunt ipsum, a ultricies massa. Phasellus commodo, quam dignissim gravida porttitor, metus neque pulvinar mi,
                    suscipit lacinia ex quam nec arcu. Phasellus dignissim lacinia accumsan. Aenean et enim quis orci bibendum sollicitudin
                    at vel leo. Donec quis dui nibh. Quisque id velit non nunc feugiat tempus sit amet at ex. Integer quam augue, laoreet
                    sit amet pulvinar vitae, tincidunt eget felis. Ut mattis erat rhoncus augue facilisis, ac congue est blandit. Curabitur
                    et maximus purus, nec tristique tortor. Vestibulum nec risus vitae mauris scelerisque imperdiet. Cras ac enim nulla.
                    Vivamus vitae volutpat nisi. Aliquam volutpat vehicula scelerisque. Fusce non ipsum diam. Praesent purus neque,
                    ultricies ac turpis ultrices, sodales finibus nibh. Suspendisse potenti. Aenean vel maximus lorem. Pellentesque vitae
                    posuere purus, nec laoreet mauris. Pellentesque non lectus nec odio elementum ullamcorper. Morbi porta mi sed lacus
                    sollicitudin semper. Curabitur sed pretium ex.
                </p>
            </div>
            <div>
                <h3 className={classes.title}>
                    <LocalizedText label={{id: 'welcome', defaultMessage: 'Welcome to Eelow'}} />
                </h3>
                <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nisi ac nibh tristique tempus. Fusce vitae
                    tincidunt ipsum, a ultricies massa. Phasellus commodo, quam dignissim gravida porttitor, metus neque pulvinar mi,
                    suscipit lacinia ex quam nec arcu. Phasellus dignissim lacinia accumsan. Aenean et enim quis orci bibendum sollicitudin
                    at vel leo. Donec quis dui nibh. Quisque id velit non nunc feugiat tempus sit amet at ex. Integer quam augue, laoreet
                    sit amet pulvinar vitae, tincidunt eget felis. Ut mattis erat rhoncus augue facilisis, ac congue est blandit. Curabitur
                    et maximus purus, nec tristique tortor. Vestibulum nec risus vitae mauris scelerisque imperdiet. Cras ac enim nulla.
                    Vivamus vitae volutpat nisi. Aliquam volutpat vehicula scelerisque. Fusce non ipsum diam. Praesent purus neque,
                    ultricies ac turpis ultrices, sodales finibus nibh. Suspendisse potenti. Aenean vel maximus lorem. Pellentesque vitae
                    posuere purus, nec laoreet mauris. Pellentesque non lectus nec odio elementum ullamcorper. Morbi porta mi sed lacus
                    sollicitudin semper. Curabitur sed pretium ex.
                </p>
            </div>
            <div>
                <h3 className={classes.title}>
                    <LocalizedText label={{id: 'welcome', defaultMessage: 'Welcome to Eelow'}} />
                </h3>
                <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nisi ac nibh tristique tempus. Fusce vitae
                    tincidunt ipsum, a ultricies massa. Phasellus commodo, quam dignissim gravida porttitor, metus neque pulvinar mi,
                    suscipit lacinia ex quam nec arcu. Phasellus dignissim lacinia accumsan. Aenean et enim quis orci bibendum sollicitudin
                    at vel leo. Donec quis dui nibh. Quisque id velit non nunc feugiat tempus sit amet at ex. Integer quam augue, laoreet
                    sit amet pulvinar vitae, tincidunt eget felis. Ut mattis erat rhoncus augue facilisis, ac congue est blandit. Curabitur
                    et maximus purus, nec tristique tortor. Vestibulum nec risus vitae mauris scelerisque imperdiet. Cras ac enim nulla.
                    Vivamus vitae volutpat nisi. Aliquam volutpat vehicula scelerisque. Fusce non ipsum diam. Praesent purus neque,
                    ultricies ac turpis ultrices, sodales finibus nibh. Suspendisse potenti. Aenean vel maximus lorem. Pellentesque vitae
                    posuere purus, nec laoreet mauris. Pellentesque non lectus nec odio elementum ullamcorper. Morbi porta mi sed lacus
                    sollicitudin semper. Curabitur sed pretium ex.
                </p>
            </div>
            <div>
                <h3 className={classes.title}>
                    <LocalizedText label={{id: 'welcome', defaultMessage: 'Welcome to Eelow'}} />
                </h3>
                <p className={classes.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet nisi ac nibh tristique tempus. Fusce vitae
                    tincidunt ipsum, a ultricies massa. Phasellus commodo, quam dignissim gravida porttitor, metus neque pulvinar mi,
                    suscipit lacinia ex quam nec arcu. Phasellus dignissim lacinia accumsan. Aenean et enim quis orci bibendum sollicitudin
                    at vel leo. Donec quis dui nibh. Quisque id velit non nunc feugiat tempus sit amet at ex. Integer quam augue, laoreet
                    sit amet pulvinar vitae, tincidunt eget felis. Ut mattis erat rhoncus augue facilisis, ac congue est blandit. Curabitur
                    et maximus purus, nec tristique tortor. Vestibulum nec risus vitae mauris scelerisque imperdiet. Cras ac enim nulla.
                    Vivamus vitae volutpat nisi. Aliquam volutpat vehicula scelerisque. Fusce non ipsum diam. Praesent purus neque,
                    ultricies ac turpis ultrices, sodales finibus nibh. Suspendisse potenti. Aenean vel maximus lorem. Pellentesque vitae
                    posuere purus, nec laoreet mauris. Pellentesque non lectus nec odio elementum ullamcorper. Morbi porta mi sed lacus
                    sollicitudin semper. Curabitur sed pretium ex.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;
