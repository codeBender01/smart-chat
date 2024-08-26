import React, {useState} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

type ErrorState = {
    error: Error;
    info: {
        componentStack: string;
    };
};

type ErrorDetailsComponentProps = {
    error: Error;
    componentStack: string;
};

const withErrorBoundary =
    <P extends object>(WrappedComponent: React.ComponentType<P>, ErrorDetailsComponent: React.ComponentType<ErrorDetailsComponentProps>) =>
    (props: P) => {
        const [errorState, setErrorState] = useState<ErrorState>({error: null as unknown as Error, info: {componentStack: ''}});

        const handleError = (error: Error, info: {componentStack: string}) => {
            setErrorState({error, info});
        };

        const renderFallback = () => {
            return (
                <ErrorDetailsComponent error={errorState?.error} componentStack={errorState?.info.componentStack}></ErrorDetailsComponent>
            );
        };

        return (
            <ErrorBoundary onError={handleError} fallbackRender={renderFallback}>
                <WrappedComponent {...(props as P)} />
            </ErrorBoundary>
        );
    };

export {withErrorBoundary};
