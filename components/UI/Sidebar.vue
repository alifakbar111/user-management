<template>
  <aside id="main-sidebar" class="pt-5 pl-3">
    <nav class="menu">
      <p class="menu-label">General</p>
      <ul class="menu-list">
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-tachometer"></i></span>
            <span class="menu-text">Dashboard</span>
          </a>
        </li>
      </ul>
      <p class="menu-label">Administration</p>
      <ul class="menu-list">
        <li>
          <a>
            <span class="icon is-small"><i class="fas fa-edit"></i></span>
            <span class="menu-text">Forms</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-desktop"></i></span>
            <span class="menu-text">UI Elements</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-table"></i></span>
            <span class="menu-text">Tables</span>
          </a>
        </li>
        <li>
          <a>
            <span class="icon is-small"><i class="fa fa-bar-chart"></i></span>
            <span class="menu-text">Presentations</span>
          </a>
        </li>

        <li class="has-children">
          <a class=""
            ><span class="icon is-small"><i class="fa fa-cog"></i></span>
            <span class="menu-text">Layouts</span></a
          >
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
      </ul>

      <p class="menu-label">Live On</p>
      <ul class="menu-list">
        <li>
          <a
            class="<%= isActiveClass('additional') %>"
            href="<%= data.config.publicPath %>/additional/"
          >
            <span class="icon is-small"><i class="fa fa-bug"></i></span>
            <span class="menu-text">Additional Pages</span>
          </a>
        </li>
        <li>
          <a
            class="<%= isActiveClass('extras') %>"
            href="<%= data.config.publicPath %>/extras/"
          >
            <span class="icon is-small"><i class="fa fa-windows"></i></span>
            <span class="menu-text">Extras</span>
          </a>
        </li>
      </ul>

      <div class="ads-square">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <ins
          class="adsbygoogle"
          style="display: block"
          data-ad-format="fluid"
          data-ad-layout-key="-gw-3+1f-3d+2z"
          data-ad-client="ca-pub-5442972248172818"
          data-ad-slot="9533807764"
        ></ins>
        <script>
          ;(adsbygoogle = window.adsbygoogle || []).push({})
        </script>
      </div>
    </nav>

    <div id="sidebar-toggler">
      <span class="icon is-small"><i class="fa fa-angle-double-left"></i></span>
    </div>
  </aside>
</template>
