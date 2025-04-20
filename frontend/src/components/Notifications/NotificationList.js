import React, { useState } from 'react';
import { BsBellFill, BsCheckCircle, BsExclamationCircle } from 'react-icons/bs';

const notifications = [
  {
    id: 1,
    type: 'success',
    message: 'Your booking at City Sports Center has been confirmed',
    time: '10 minutes ago',
    read: false
  },
  {
    id: 2,
    type: 'warning',
    message: 'Your booking at Elite Turf starts in 2 hours',
    time: '1 hour ago',
    read: true
  },
  {
    id: 3,
    type: 'info',
    message: 'New courts available near your location',
    time: '3 hours ago',
    read: true
  }
];

const NotificationList = () => {
  const [notifs, setNotifs] = useState(notifications);
  const [isOpen, setIsOpen] = useState(false);

  const markAsRead = (id) => {
    setNotifs(notifs.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifs(notifs.map(notif => ({ ...notif, read: true })));
  };

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-blue-600"
      >
        <BsBellFill size={20} />
        {notifs.some(n => !n.read) && (
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl z-10 border border-gray-200">
          <div className="p-3 border-b border-gray-200 flex justify-between items-center">
            <h3 className="font-medium text-gray-800">Notifications</h3>
            <button 
              onClick={markAllAsRead}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              Mark all as read
            </button>
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifs.length > 0 ? (
              notifs.map(notif => (
                <div 
                  key={notif.id} 
                  className={`p-3 border-b border-gray-100 hover:bg-gray-50 ${!notif.read ? 'bg-blue-50' : ''}`}
                  onClick={() => markAsRead(notif.id)}
                >
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      {notif.type === 'success' ? (
                        <BsCheckCircle className="text-green-500" />
                      ) : (
                        <BsExclamationCircle className="text-yellow-500" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{notif.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                    {!notif.read && (
                      <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-500">
                No new notifications
              </div>
            )}
          </div>

          <div className="p-2 border-t border-gray-200 text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationList;