const BillingDetails = () => {
  return (
    <div class='px-5 mb-5 col-md-6 col-lg-6 mt-5'>
      <h4 class='mb-4'>Billing address</h4>
      <form class='needs-validation' novalidate>
        <div class='row g-3'>
          <div class='col-sm-6'>
            <label for='name' class='form-label'>
              First name
            </label>
            <input
              type='text'
              class='form-control'
              id='firstName'
              placeholder=''
              required
            />
          </div>

          <div class='col-sm-6'>
            <label for='name' class='form-label'>
              Last name
            </label>
            <input
              type='text'
              class='form-control'
              id='lastName'
              placeholder=''
              required
            />
          </div>

          <div class='col-12'>
            <label for='email' class='form-label'>
              Company Name <span class='text-muted'>(Optional)</span>
            </label>
            <input type='text' class='form-control' id='email' />
          </div>

          <div class='col-12'>
            <label for='country' class='form-label'>
              Country / Region
            </label>
            <select class='form-select' aria-label='Default select example'>
              <option value='' selected>
                Sri Lanka
              </option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
          <div class='col-12'>
            <label for='address' class='form-label'>
              Street address
            </label>
            <input type='text' class='form-control' id='address' required />
          </div>
          <div class='col-12'>
            <label for='address' class='form-label'>
              Town / City
            </label>
            <input type='text' class='form-control' id='address' required />
          </div>
          <div class='col-12'>
            <label for='province' class='form-label'>
              Province
            </label>
            <select class='form-select' aria-label='Default select example'>
              <option value='' selected>
                Western Province
              </option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>

          <div class='col-12'>
            <label for='number' class='form-label'>
              Zip Code
            </label>
            <input type='number' class='form-control' id='zip' required />
          </div>
          <div class='col-12'>
            <label for='number' class='form-label'>
              Phone
            </label>
            <input type='phone' class='form-control' id='phone' required />
          </div>
          <div class='col-12'>
            <label for='email' class='form-label'>
              Email address
            </label>
            <input type='email' class='form-control' id='email' required />
          </div>
          <div class='col-12'>
            <input
              type='text'
              class='form-control'
              id='text'
              required
              placeholder='Additional information'
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default BillingDetails
