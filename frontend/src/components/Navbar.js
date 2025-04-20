import NotificationList from './Notifications/NotificationList';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="container flex justify-between items-center">
        {/* Other nav items */}
        <div className="flex items-center space-x-4">
          <NotificationList />
          {/* User avatar, etc */}
        </div>
      </div>
    </nav>
  );
};