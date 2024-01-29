const Security = ({ selectedTab }) => {
  return (
    <div
      className={`${selectedTab === 3 ? 'block active' : 'hidden'} detail-tab`}
    >
      <h6>SECURITY SETTINGS</h6>
      <form>
        <div class='form-group'>
          <label class='d-block'>Change Password</label>
          <input
            type='text'
            class='form-control'
            placeholder='Enter your old password'
          />
          <input
            type='text'
            class='form-control mt-1'
            placeholder='New password'
          />
          <input
            type='text'
            class='form-control mt-1'
            placeholder='Confirm new password'
          />
        </div>
      </form>
    </div>
  )
}

export default Security
