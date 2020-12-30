<template>
  <header class="hero has-background-grey-lighter">
    <div class="hero-head">
      <nav
        class="navbar has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item is--brand">
            <img
              class="navbar-brand-logo"
              src="<%= data.config.publicPath %>/img/logo.png"
              alt="Bulma Admin Template logo"
            />
          </a>
          <button class="button navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div class="navbar-menu navbar-end" id="navMenu">
          <a class="navbar-item nav-tag">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'envelope']" />
              <!-- <i class="fa fa-envelope-o"></i> -->
            </span>
            <span class="tag is-success counter">2</span>
          </a>
          <a class="navbar-item nav-tag">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'bell']" />
              <!-- <i class="fa fa-bell-o"></i> -->
            </span>
            <span class="tag is-danger counter">6</span>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
              <figure class="image is-32x32" style="margin-right: 0.5em">
                <img src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
              USers
            </a>

            <div class="navbar-dropdown is-right">
              <a class="navbar-item">
                <span class="icon is-small">
                  <font-awesome-icon :icon="['fas', 'user']" />
                  <!-- <i class="fa fa-user-o"></i> -->
                </span>
                &nbsp; Profile
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                <span class="icon is-small">
                  <font-awesome-icon :icon="['fas', 'power-off']" />

                  <!-- <i class="fa fa-power-off"></i> -->
                </span>
                &nbsp; Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>
