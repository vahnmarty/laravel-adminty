<nav class="pcoded-navbar">
    <div class="pcoded-inner-navbar main-menu">
        <div class="pcoded-navigatio-lavel">Basic</div>
        <ul class="pcoded-item pcoded-left-item">
        
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
    </div>
</nav>