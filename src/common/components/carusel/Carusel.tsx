import React, {useState} from 'react';
import {MessageDescriptor} from 'react-intl';
import {Tab, Tabs} from '@mui/material';
import {TabProps} from '@mui/material/Tab/Tab';

import LocalizedText from '@components/localize/LocalizedText';

type CaruselItem<TValue = unknown> = {
    label: string | MessageDescriptor;
    value: TValue;
    icon: TabProps['icon'];
};

type CaruselProps<TValue = unknown> = {
    items: CaruselItem<TValue>[];
    onChange: (value: TValue) => void;
    defaultValue?: TValue;
};

export function Carusel<TValue = unknown>({items, onChange, defaultValue}: CaruselProps<TValue>) {
    const [value, setValue] = useState(defaultValue ?? items?.[0]?.value);

    function handleChange(_: React.SyntheticEvent, newValue: TValue) {
        setValue(newValue);
        onChange(newValue);
    }

    return (
        <Tabs value={value} variant="scrollable" allowScrollButtonsMobile onChange={handleChange}>
            {items?.map(i => (
                <Tab label={<LocalizedText label={i.label} />} value={i.value} icon={i.icon} />
            ))}
        </Tabs>
    );
}
