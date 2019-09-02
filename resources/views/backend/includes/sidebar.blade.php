<nav class="pcoded-navbar">
    <div class="pcoded-inner-navbar main-menu">
        <div class="pcoded-navigatio-lavel">Basic</div>
        <ul class="pcoded-item pcoded-left-item">
            <li class=" {{ active_class(Active::checkUriPattern('admin/dashboard*')) }}">
                <a href="{{ url('dashboard') }}">
                    <span class="pcoded-micon"><i class="feather icon-home"></i></span>
                    <span class="pcoded-mtext">Dashboard</span>
                </a>
            </li>
            <li class="pcoded-hasmenu {{ active_class(Active::checkUriPattern('users*')) }}">
                <a href="javascript:void(0)">
                    <span class="pcoded-micon"><i class="feather icon-users"></i></span>
                    <span class="pcoded-mtext">Users</span>
                </a>
                <ul class="pcoded-submenu">
                    <li class=" ">
                        <a href="{{ url('users') }}">
                            <span class="pcoded-mtext">User List</span>
                        </a>
                    </li>
                    <li class="">
                        <a href="{{ url('users/reports') }}">
                            <span class="pcoded-mtext">Reports</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="{{ url('users/attendance') }}">
                            <span class="pcoded-mtext">Attendance</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="pcoded-navigatio-lavel">System</div>
        <ul class="pcoded-item pcoded-left-item">
            @if ($logged_in_user->isAdmin())
                <li class="pcoded-hasmenu{{
                    active_class(Active::checkUriPattern('admin/auth*'), 'open')
                }}">
                <a href="javascript:void(0)">
                    <span class="pcoded-micon"><i class="feather icon-users"></i></span>
                    <span class="pcoded-mtext">@lang('menus.backend.access.title')</span>
                    @if ($pending_approval > 0)
                        <span class="badge badge-danger">{{ $pending_approval }}</span>
                    @endif
                </a>

                    <ul class="pcoded-submenu">
                        <li class="">
                            <a class="" href="{{ route('admin.auth.user.index') }}">
                                @lang('labels.backend.access.users.management')

                                @if ($pending_approval > 0)
                                    <span class="badge badge-danger">{{ $pending_approval }}</span>
                                @endif
                            </a>
                        </li>
                        <li class="">
                            <a class="" href="{{ route('admin.auth.role.index') }}">
                                @lang('labels.backend.access.roles.management')
                            </a>
                        </li>
                    </ul>
                </li>

            @endif
        </ul>
    </div>
</nav>