import * as React from 'react';
type Props = {
    isVisible: boolean;
    children: React.ReactNode;
    style?: any;
    enabled: boolean;
};
export default class ResourceSavingScene extends React.Component<Props> {
    render(): JSX.Element;
}
export {};
