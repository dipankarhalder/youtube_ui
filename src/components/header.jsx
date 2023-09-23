import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {
  HiOutlineMenuAlt1,
  HiOutlineUserCircle,
  HiOutlineSearch,
} from 'react-icons/hi';

import { Input } from '../shared/input';

import './components.css';
import reactLogo from '../assets/images/logo.svg';

export const Header = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const { search } = data;
    console.log(search);
  };

  return (
    <div className="app_header_wrapper">
      <div className="app_logo_wrap">
        <span>
          <HiOutlineMenuAlt1 />
        </span>
        <Link to="/">
          <img src={reactLogo} alt="youtube" />
        </Link>
      </div>
      <div className="app_search_wrap">
        <div className="app_search_form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="Search" valText="search" register={register} />
            <button type="submit">
              <HiOutlineSearch />
            </button>
          </form>
        </div>
      </div>
      <div className="app_profile_info_wrap">
        <div className="app_profile_info"></div>
        <div className="app_login">
          <HiOutlineUserCircle />
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
};
