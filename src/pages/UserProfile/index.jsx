import React from 'react'
import AccountSetting from './AccountSetting'
import ProfileInformation from './ProfileInfo'
import Security from './Security'
import { useState } from 'react'

const UserProfile = () => {
  const [selectedTab, setSelectedTab] = useState(1)

  const toggleTabs = (index) => {
    setSelectedTab(index)
  }

  return (
    <div className='user-profile container'>
      <div className='row gutters-sm'>
        <div className='col-md-4 d-none d-md-block'>
          <div className='buttons'>
            <div className='d-flex flex-column'>
              <button
                style={
                  selectedTab === 1 ? { color: '#000' } : { color: '#9F9F9F' }
                }
                onClick={() => toggleTabs(1)}
              >
                Profile Info
              </button>
              <button
                style={
                  selectedTab === 2 ? { color: '#000' } : { color: '#9F9F9F' }
                }
                onClick={() => toggleTabs(2)}
              >
                Account Settings
              </button>
              <button
                style={
                  selectedTab === 3 ? { color: '#000' } : { color: '#9F9F9F' }
                }
                onClick={() => toggleTabs(3)}
              >
                Security
              </button>
            </div>
          </div>
        </div>
        <div className='col-md-8'>
          <div className='buttons '>
            <ul className='nav d-flex d-md-none' role='tablist'>
              <li className='nav-item'>
                <button
                  style={
                    selectedTab === 1 ? { color: '#000' } : { color: '#9F9F9F' }
                  }
                  onClick={() => toggleTabs(1)}
                >
                  Profile Info
                </button>
              </li>
              <li className='nav-item'>
                <button
                  style={
                    selectedTab === 2 ? { color: '#000' } : { color: '#9F9F9F' }
                  }
                  onClick={() => toggleTabs(2)}
                >
                  Account Settings
                </button>
              </li>
              <li className='nav-item'>
                <button
                  style={
                    selectedTab === 3 ? { color: '#000' } : { color: '#9F9F9F' }
                  }
                  onClick={() => toggleTabs(3)}
                >
                  Security
                </button>
              </li>
            </ul>
            <div className='card-body p-3 tab-content'>
              <ProfileInformation selectedTab={selectedTab} />
              <AccountSetting selectedTab={selectedTab} />
              <Security selectedTab={selectedTab} />
              {/* <Outlet /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
