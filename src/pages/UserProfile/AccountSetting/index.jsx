const AccountSetting = ({ selectedTab }) => {
  return (
    <div
      className={`${selectedTab === 2 ? 'block active' : 'hidden'} detail-tab`}
    >
      <h6>ACCOUNT SETTINGS</h6>
      <form>
        <hr />
        <div className='form-group'>
          <input type='text' name='' id='' placeholder='username' />
          <label className='d-block text-danger'>Delete Account</label>
          <p className='text-muted font-size-sm'>
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </div>
        <button className='btn btn-danger' type='button'>
          Delete Account
        </button>
      </form>
    </div>
  )
}

export default AccountSetting
