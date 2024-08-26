import {Route, Router, Switch} from 'react-router-dom';
import {History} from 'history';

import {Modal} from '@components/modal/Modal';
import {Select} from '@components/select/Select';

type AppRoutesProps = {
    history: History<unknown>;
};

export function AppRoutes({history}: AppRoutesProps) {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="*">
                    <Select
                        options={[
                            {
                                label: 'hey',
                                value: 'hey',
                            },
                        ]}
                        valueView="chip"
                    />
                </Route>
            </Switch>
        </Router>
    );
}
