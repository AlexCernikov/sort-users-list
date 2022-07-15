<template>
    <nav>
      <div class="nav__logo_side">
        <router-link to="/">
          <img src="@/assets/ISD_Logo.svg" alt="ISD_Logo">
        </router-link>
      </div>
      <div class="nav__client_side">
        <router-link to="/">Home</router-link>
        <router-link to="/bookSpace">Book a Space</router-link>
        <router-link to="/spaceOptions">Space Options</router-link>
        <router-link to="/benefits">Benefits</router-link>
        <router-link to="/reviews">Reviews</router-link>
        <router-link to="/contactUs">Contact Us</router-link>
      </div>
      <div class="nav__admin_side">
        <div class="adminBtn">
          <router-link to="/logIn">Log in</router-link>
        </div>
        <div class="adminBtn">
          <router-link to="/signUp" id="signUp">Sign Up</router-link>
        </div>
      </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;
  max-width: 1280px;

  &__logo_side {
    margin-left: -28px;
  }

  &__client_side {
    display: flex;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: #2c3e50;
    height: 28px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.75rem;
    margin-left: 20px;
  }

  .adminBtn {
    display: inline;
  }

  #signUp {
    background: #231F20;
    box-shadow: 0 4px 16px rgba(255, 87, 34, 0.32);
    padding: 12px 24px;
    color: #FFFFFF;
  }

  #signUp:hover {
    transition-duration: 0.5s;
    background-color: #FF5A00;
  }
}
</style>
