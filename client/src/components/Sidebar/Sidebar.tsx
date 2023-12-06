import { FC } from 'react';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar: FC = () => (
  <div className={classes.sidebarWrapper}>
    <Link to="/">Home</Link>
    <Link to="/clients">Clients</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/tasks">Tasks</Link>
    <Link to="/users">Get Users</Link>
  </div>
);

export default Sidebar;
