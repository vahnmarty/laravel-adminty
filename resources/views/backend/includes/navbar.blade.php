<nav class="navbar header-navbar pcoded-header">
    <div class="navbar-wrapper">
        <div class="navbar-logo">
            <a class="mobile-menu" id="mobile-collapse" href="#!">
                <i class="feather icon-menu"></i>
            </a>
            <a href="index.html">
                <img class="img-fluid" src="{{ url('img/logo.png') }}" alt="Theme-Logo"  style="height: 40px" />
            </a>
            <a class="mobile-options">
                <i class="feather icon-more-horizontal"></i>
            </a>
        </div>
        <div class="navbar-container container-fluid">
            <ul class="nav-left">
                <li class="pl-5">
                    <i class="fa fa-home"></i> <strong>{{ $logged_in_user->pharmacy->name ?? '' }}</strong>
                </li>
            </ul>
            <ul class="nav-right">
                <li class="header-notification">
                </li>
                <li class="user-profile header-notification">
                    <div class="dropdown-primary dropdown">
                        <div class="dropdown-toggle" data-toggle="dropdown">
                            <img src="{{ $logged_in_user->picture }}" class="img-radius" alt="User-Profile-Image">
                            <span>{{ $logged_in_user->full_name }}</span>
                            <i class="feather icon-chevron-down"></i>
                        </div>
                        <ul class="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                            @if($logged_in_user->hasAnyRole(['user', 'owner']))
                            <li>
                                <a href="{{ url('pharmacy') }}">
                                    <i class="feather icon-home"></i> My Pharmacy
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i class="feather icon-settings"></i> Settings
                                </a>
                            </li>
                            @endif
                            <li>
                                <a href="{{ url('account') }}">
                                    <i class="feather icon-user"></i> Profile
                                </a>
                            </li>
                            <li>
                                <a href="{{ url('logout') }}">
                                    <i class="feather icon-log-out"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
