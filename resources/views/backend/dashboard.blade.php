@extends('backend.layouts.adminty')

@section('content')
<div class="page-wrapper">
    <div class="page-body">
        <div class="row">

            <div class="col-xl-3 col-md-6">
                <div class="card bg-c-yellow update-card">
                    <div class="card-block">
                        <div class="row align-items-end">
                            <div class="col-4">
                                <h1><span class="icofont icofont-users"></span></h1>
                            </div>
                            <div class="col-8">
                                <h3 class="text-white font-weight-bold">0</h3>
                                <h6 class="text-white m-b-0">User Statistics</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card bg-c-green update-card">
                    <div class="card-block">
                        <div class="row align-items-end">
                            <div class="col-4 text-right">
                                <h1><span class="icofont icofont-capsule"></span></h1>
                            </div>
                            <div class="col-8">
                                <h3 class="text-white font-weight-bold">0</h3>
                                <h6 class="text-white m-b-0">Total Products</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card bg-c-pink update-card">
                    <div class="card-block">
                        <div class="row align-items-end">
                            <div class="col-4 text-right">
                                <h1><span class="icofont icofont-cart"></span></h1>
                            </div>
                            <div class="col-8">
                                <h3 class="text-white font-weight-bold">0</h3>
                                <h6 class="text-white m-b-0">Total Transactions</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-md-6">
                <div class="card bg-c-lite-green update-card">
                    <div class="card-block">
                        <div class="row align-items-end">
                            <div class="col-4 text-right">
                                <h1><span class="icofont icofont-chart-histogram"></span></h1>
                            </div>
                            <div class="col-8">
                                <h4 class="text-white font-weight-bold">0</h4>
                                <h6 class="text-white m-b-0">Total Sales</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-8 col-md-12">
                <div class="card">
                    <div class="card-block">
                        <div id="7days-sales"></div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-md-12">
                <div class="card feed-card">
                    <div class="card-header">
                        <h5>Sales Summary</h5>
                    </div>
                    <div class="card-block">
                        <div class="row mb-4">
                            <div class="col-auto p-r-0">
                                <i class="icofont icofont-cur-peso bg-simple-c-blue feed-icon"></i>
                            </div>
                            <div class="col">
                                <h6 class="m-0">Today <strong class="text-primary f-right f-13">P 0</strong></h6>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-auto p-r-0">
                                <i class="icofont icofont-cur-peso bg-simple-c-blue feed-icon"></i>
                            </div>
                            <div class="col">
                                <h6 class="m-0">Yesterday <strong class="text-primary f-right f-13">P 0</strong></h6>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-auto p-r-0">
                                <i class="icofont icofont-cur-peso bg-simple-c-blue feed-icon"></i>
                            </div>
                            <div class="col">
                                <h6 class="m-0">This Week <strong class="text-primary f-right f-13">P 0</strong></h6>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-auto p-r-0">
                                <i class="icofont icofont-cur-peso bg-simple-c-blue feed-icon"></i>
                            </div>
                            <div class="col">
                                <h6 class="m-0">This Month <strong class="text-primary f-right f-13">P 0</strong></h6>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-auto p-r-0">
                                <i class="icofont icofont-cur-peso bg-simple-c-blue feed-icon"></i>
                            </div>
                            <div class="col">
                                <h6 class="m-0">Last Month <strong class="text-primary f-right f-13">P 0</strong></h6>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <div class="row v-row">
            <div class="col-xl-4 col-md-12">
                <div class="card feed-card v-equal">
                    <div class="card-header">
                        <h5>Top Selling Medicines</h5>
                    </div>
                    <div class="card-block">
                        <div class="row m-b-30">
                            <div class="col-auto p-r-0">
                                <i class="bg-simple-c-blue text-white" style="border-radius: 50%; padding: 5px 10px">1</i>
                            </div>
                            <div class="col">
                                <h6 class="m-0">Test</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-12">
                <div class="card feed-card v-equal">
                    <div class="card-header">
                        <h5>Top Selling Products</h5>
                    </div>
                    <div class="card-block">
                        <div class="row m-b-30">
                            <div class="col-auto p-r-0">
                                <i class="bg-simple-c-blue text-white" style="border-radius: 50%; padding: 5px 10px">1</i>
                            </div>
                            <div class="col">
                                <h6 class="m-0">Test</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-md-12">
                <div class="card feed-card v-equal">
                    <div class="card-header">
                        <h5>Top Performers</h5>
                    </div>
                    <div class="card-block">
                        <h6><em>No records.</em></h6>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
@endsection

@section('scripts')

<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>

<script type="text/javascript">
    

   
</script>
@endsection