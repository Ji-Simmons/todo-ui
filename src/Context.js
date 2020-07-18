import React from 'react';

export const LoggedInContext = React.createContext(false);
export const LoggedInUserContext = React.createContext({});
export const AppNameContext = React.createContext('MyApp');
export const termsContext = React.createContext([]);

export const MergedContext = React.createContext({});
export const MenuContext = React.createContext('');

export default {
    apiPath: 'https://term-catalog-api.herokuapp.com/'
};