import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Auth from '../Header/Header';
import classes from './Layout.module.css';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { checkAuth } from '../../store/auth/authThunks';

const Layout: FC = () => {
  const isAuth = useAppSelector((state) => state.users.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate('/authentication');
    }
  }, [isAuth]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      {isAuth && <Sidebar />}
      <div className={classes.main}>
        {isAuth && <Auth />}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
