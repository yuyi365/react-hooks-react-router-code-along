const SignUp = () => {

    return (
      <div>
        <form>
        <div>
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email Address" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }

  export default SignUp;