<template>
        <div class="navContainer">
            <nav>
              <div class="logoSide">
                <img src="./ISD_Logo.svg" alt="ISD_Logo">
              </div>
              <div class="clientSide">
                  <router-link to="/">Home</router-link>
                  <router-link to="/bookSpace">Book a Space</router-link>
                  <router-link to="/spaceOptions">Space Options</router-link>
                  <router-link to="/benefits">Benefits</router-link>
                  <router-link to="/reviews">Reviews</router-link>
                  <router-link to="/contactUs">Contact Us</router-link>
              </div>
              <div class="adminSide">
                  <div class="adminBtn">
                      <router-link to="/logIn">Log in</router-link>
                  </div>
                  <div class="adminBtn">
                      <router-link to="/signUp" id="signUp">Sign Up</router-link>
                  </div>
              </div>
            </nav>
        </div>
</template>

<style lang="scss">
.navContainer {
    width: 100%;
    margin-top: 24px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        text-decoration: none;
        color: #2c3e50;
        height: 28px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 28px;
    }

    .clientSide a {
        margin-left: 40px;
    }

    .adminSide a {
        margin-left: 40px;
    }

    .adminBtn {
        display: inline;
    }

    #signUp {
        background: #231F20;
        box-shadow: 0px 4px 16px rgba(255, 87, 34, 0.32);
        padding: 12px 24px;
        color: #FFFFFF;
    }
}

// img {
//     display: inline;
//     margin: 24px 92px 0px 132px;
// }
</style>
