import React from 'react';

export const LoggedInContext = React.createContext(false);
export const LoggedInUserContext = React.createContext({});
export const AppNameContext = React.createContext('MyApp');
export const tasksContext = React.createContext([]);

export const MergedContext = React.createContext({});
export const MenuContext = React.createContext('');

export default {
    apiPath: 'http://localhost5555/api/tasks'
};