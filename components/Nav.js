const Nav = () => {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">
            Brand
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">
                Souviners <span class="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">Glassware</a>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Dropdown <span class="caret"></span>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Another action</a>
                </li>
                <li>
                  <a href="#">Something else here</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">Separated link</a>
                </li>
                <li class="divider"></li>
                <li>
                  <a href="#">One more separated link</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
