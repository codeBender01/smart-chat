import React from 'react';
import {MessageDescriptor} from 'react-intl';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import {Box, Tab} from '@mui/material';
import {makeStyles} from '@mui/styles';

import LocalizedText from '../localize/LocalizedText';

const useStyles = makeStyles({
    tabPanel: {
        padding: '0 !important',
    },
    tabPanelDisableNavigate: {
        cursor: 'default',
    },
});

export type TabContent = {
    label?: string | MessageDescriptor;
    value: string;
    children: JSX.Element;
};

type TabsProps = {
    tabs: Array<TabContent>;
    selectedValue?: string;
    hideNavigation?: boolean;
    disableClickNavigation?: boolean;
};

function Tabs({tabs, selectedValue, hideNavigation, disableClickNavigation}: TabsProps) {
    const defaultValue = selectedValue ?? tabs?.[0]?.value ?? '1';
    const [value, setValue] = React.useState(defaultValue);
    const classes = useStyles();

    React.useEffect(() => {
        handleChange({} as React.SyntheticEvent, selectedValue as string);
    }, [selectedValue]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue ?? defaultValue);
    };

    return (
        <div>
            <TabContext value={value}>
                {!hideNavigation ? (
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList variant="fullWidth" onChange={disableClickNavigation ? () => {} : handleChange}>
                            {tabs?.map(tab => (
                                <Tab label={<LocalizedText label={tab.label ?? ''} />} value={tab.value}></Tab>
                            ))}
                            {/*<Tab label="Item One" value="1" />*/}
                            {/*<Tab label="Item Two" value="2" />*/}
                            {/*<Tab label="Item Three" value="3" />*/}
                        </TabList>
                    </Box>
                ) : null}

                {tabs?.map(tab =>
                    tab?.children ? (
                        <TabPanel className={classes.tabPanel} value={tab.value}>
                            {tab.children}
                        </TabPanel>
                    ) : null
                )}
                {/*<TabPanel value="1">Item One</TabPanel>*/}
                {/*<TabPanel value="2">Item Two</TabPanel>*/}
                {/*<TabPanel value="3">Item Three</TabPanel>*/}
            </TabContext>
        </div>
    );
}

export default Tabs;
