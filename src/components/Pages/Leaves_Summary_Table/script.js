import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import Message from "./../../partials/Message/Message.vue"
import selectallocation from "./../../partials/selectallocation/selectallocation.vue"

export default{
    created: function () {

        var self = this;
        this.select();
        this.select1();
        self.btnlinks.duplicatebtnlink ="/leaves/leave_summary_duplicate/"+self.$route.params.id
        // $('#b').hide();
        // $('#ab').hide();
        $(function () {
            $(".delete").click(function () {
                var r = confirm("Are you sure you want to  Delete the Leave Summary");
                if (r)
                {
                    window.location.href = "/leaves/leaves_summary";
                    self.submit();
                }
                else
                {
                    // x="You pressed Cancel!";
                }
            });


            $("#num01").click(function () {

                self.psubmit();
            });
            $(document).ready(function(){
                $("#a").click(function(){
                    $("#a").hide();
                    document.getElementById("aprroved").classList.add("oe_active");
                    document.getElementById("toapprrove").classList.remove("oe_active");
                    document.getElementById("submit").classList.remove("oe_active");
                    document.getElementById("resused").classList.remove("oe_active");

                });

                $("#a").click(function(){
                    $("#d").hide();

                });
                $("#d").click(function(){
                    $("#c").show();

                });
                $("#d").click(function(){
                    $("#resused").hide();
                    $("#d").hide();
                    document.getElementById("submit").classList.add("oe_active");
                    document.getElementById("toapprrove").classList.remove("oe_active");
                    document.getElementById("aprroved").classList.remove("oe_active");
                    document.getElementById("resused").classList.remove("oe_active");
                });
                $("#c").click(function(){
                    $("#resused").hide();
                    document.getElementById("toapprrove").classList.add("oe_active");
                    document.getElementById("submit").classList.remove("oe_active");
                    document.getElementById("aprroved").classList.remove("oe_active");
                    document.getElementById("resused").classList.remove("oe_active");
                });
                $("#q").click(function(){
                    $("#a").hide();
                    $('#resused').show();
                    document.getElementById("resused").classList.add("oe_active");
                    document.getElementById("toapprrove").classList.remove("oe_active");
                    document.getElementById("submit").classList.remove("oe_active");
                    document.getElementById("aprroved").classList.remove("oe_active");

                });
                $("#c").click(function(){

                    $("#a").show();

                });
                $("#c").click(function(){
                    $("#d").show();


                });
                $("#c").click(function(){

                    $("#c").hide();

                });
                $("#c").click(function(){
                    $("#q").show();

                });
                $("#q").click(function(){
                    $("#q").hide();

                });
                $("#q").click(function(){
                    $("#d").show();
                });
                $("#ab").click(function(){
                    $("#ab").hide();

                });
                $("#ab").click(function(){
                    $("#b").show();
                });
                $("#b").click(function(){
                    $("#b").hide();

                });
                $("#b").click(function(){
                    $("#ab").show();
                });
            });
            $("#num10").click(function () {
                self.ssubmit();
            });
            self.btnlinks.editbtnlink ="/leaves/leave_summary_edit/"+self.$route.params.id
        })
        document.title = this.title;
    },
    data () {
        return {
            heading : "Administrator - Sprout",
            num:'',
            description:'',
            leave_type_id:'',
            mode:'',
            names:[],
            employeename:'',
            name:'',
            type:'',
            test:'',
            test1:'',
            duration:'',
            employee_id:'',
            department_id:'',
            comment_manager:'',
            date_from:'',
            date_to:'',
            counter: 1,
            btnlinks: {
                createbtnlink:"/leaves/leave_summary_create",
                editbtnlink:"",
                deletedropbtnlink:"",
                duplicatebtnlink:"",

            },
            tableheader: [
                "Reference",
                "Destination Location Zone",
                "Partner",
                "Schduled Date",
                "Source Document",
                "Back Order Of",
                "Status",
            ],
            tablefooter: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ],
            tabledata: {
                "row": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",

                    ],
                    "url": "/sales/request_quotation_inner"
                },
                "row1": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",
                    ],
                    "url": "/sales/request_quotation_inner"
                },
                "row2": {
                    "data": [
                        "Chic/In/0004",
                        "Chic/Stock",
                        "AsusTek",
                        "01/28/2017 19:23:00",
                        "Chicago Warehouse",
                        "Proposition",
                        "Available",
                    ],
                    "url": "/sales/request_quotation_inner"
                },
            }
        }
    },
    methods: {
        submit: function () {
            var self = this;
            self.$http.post("/leaves/delete_leave_allocation", {"id": self.$route.params.id}).then(function(res){
                console.log(res.body);
            },function(err){

            });
        },
        select1: function () {
            var self = this;
            self.$http.post("/leaves/leave_allocaion_num", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.num = parentdata.count;
            }, function (err) {
            });
        },
        select: function () {
            var self = this;
            self.$http.post("/leaves/leaverequestselect", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.description = parentdata.description;
                self.leave_type_id = parentdata.leave_type_id;
                self.mode = parentdata.mode;
                self.duration = parentdata.duration;
                self.date_from = parentdata.date_from;
                self.date_to = parentdata.date_to;
                self.employee_id = parentdata.employee_id;
                self.department_id = parentdata.department_id;
                self.comment_manager = parentdata.comment_manager;
                console.log(parentdata);
                self.$http.post("/leaves/selectleavedep", {"id": self.department_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.name = parentdata.name;
                    console.log(parentdata);
                    self.$http.post("/leaves/selectleaveemp", {"id": self.employee_id}).then(function (res) {
                        var parentdata = res.body.data[0];
                        self.employeename = parentdata.employeename;
                        console.log(parentdata);
                        self.$http.post("/leaves/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
                            var parentdata = res.body.data[0];
                            self.type = parentdata.type;
                            console.log(parentdata);

                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });
            self.$http.post("/leaves/leaveselect", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.test = parentdata.status;
                self.test1 = parentdata.reported_last_payslips;
                $(function () {
                    if( self.test == "approved"){
                        $('#q').show();
                        $('#a').hide();
                        $('#d').hide();
                    }
                    else if( self.test == "Refused")
                    {
                        $('#d').show();
                        $('#a').hide();
                        $('#q').hide();
                    }
                    else if( self.test == "To approve")
                    {
                        $('#d').show();
                        $('#a').show();
                        $('#q').show();
                    }

                    if( self.test1 == "1"){
                        $('#b').show();
                        $('#ab').hide();
                    }
                    else if( self.test1 == "0")
                    {
                        $('#ab').show();
                        $('#b').hide();
                    }
                    else{
                        $('#b').hide();
                        $('#ab').hide();
                    }
                })
            },function(err){

            });

        },
        ssubmit: function () {
            var self = this;
            self.$http.post("/leaves/leave_allocation_perivious", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.description = parentdata.description;
                self.leave_type_id = parentdata.leave_type_id;
                self.mode = parentdata.mode;
                self.date_from = parentdata.date_from;
                self.date_to = parentdata.date_to;
                self.duration = parentdata.duration;
                self.employee_id = parentdata.employee_id;
                self.department_id = parentdata.department_id;
                self.comment_manager = parentdata.comment_manager;
                self.test = parentdata.status;
                self.test1 = parentdata.reported_last_payslips;
                self.$route.params.id = parentdata.id;
                console.log(parentdata);
                if( self.test == "approved"){
                    $('#q').show();
                    $('#a').hide();
                    $('#d').hide();
                }
                else if( self.test == "Refused")
                {
                    $('#d').show();
                    $('#a').hide();
                    $('#q').hide();
                }
                else if( self.test == "To approve")
                {
                    $('#d').show();
                    $('#a').show();
                    $('#q').show();
                }

                if( self.test1 == "1"){
                    $('#b').show();
                    $('#ab').hide();
                }
                else if( self.test1 == "0")
                {
                    $('#ab').show();
                    $('#b').hide();
                }

                self.$http.post("/leaves/selectleavedep", {"id": self.department_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.name = parentdata.name;
                    console.log(parentdata);
                    self.$http.post("/leaves/selectleaveemp", {"id": self.employee_id}).then(function (res) {
                        var parentdata = res.body.data[0];
                        self.employeename = parentdata.employeename;
                        console.log(parentdata);
                        self.$http.post("/leaves/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
                            var parentdata = res.body.data[0];
                            self.type = parentdata.type;
                            console.log(parentdata);

                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });
        },
        psubmit: function () {
            var self = this;
            self.$http.post("/leaves/leave_allocation_next", {"id": self.$route.params.id}).then(function (res) {
                var parentdata = res.body.data[0];
                self.description = parentdata.description;
                self.leave_type_id = parentdata.leave_type_id;
                self.mode = parentdata.mode;
                self.date_from = parentdata.date_from;
                self.date_to = parentdata.date_to;
                self.duration = parentdata.duration;
                self.employee_id = parentdata.employee_id;
                self.department_id = parentdata.department_id;
                self.comment_manager = parentdata.comment_manager;
                self.$route.params.id = parentdata.id;
                self.test = parentdata.status;
                self.test1 = parentdata.reported_last_payslips;
                console.log(parentdata);
                if( self.test == "approved"){
                    $('#q').show();
                    $('#a').hide();
                    $('#d').hide();
                }
                else if( self.test == "Refused")
                {
                    $('#d').show();
                    $('#a').hide();
                    $('#q').hide();
                }
                else if( self.test == "To approve")
                {
                    $('#d').show();
                    $('#a').show();
                    $('#q').show();
                }

                if( self.test1 == "1"){
                    $('#b').show();
                    $('#ab').hide();
                }
                else if( self.test1 == "0")
                {
                    $('#ab').show();
                    $('#b').hide();
                }
                self.$http.post("/leaves/selectleavedep", {"id": self.department_id}).then(function (res) {
                    var parentdata = res.body.data[0];
                    self.name = parentdata.name;
                    console.log(parentdata);
                    self.$http.post("/leaves/selectleaveemp", {"id": self.employee_id}).then(function (res) {
                        var parentdata = res.body.data[0];
                        self.employeename = parentdata.employeename;
                        console.log(parentdata);
                        self.$http.post("/leaves/selectleavetmp", {"id": self.leave_type_id}).then(function (res) {
                            var parentdata = res.body.data[0];
                            self.type = parentdata.type;
                            console.log(parentdata);

                        }, function (err) {

                        });
                    }, function (err) {

                    });
                }, function (err) {

                });
            }, function (err) {

            });
        },
        select3: function () {

            var self = this;
            self.num4+1;
        },
        dsubmit: function () {
            var self = this;
            self.$http.post("/leaves/depinserts", {"f": self.f,"parent_dept_id": self.parent_dept_id,"manager_id": self.manager_id}).then(function(res){
                console.log(res.body);

            },function(err){

            });
        },
        validateBeforeSubmit() {
            var self = this;
            this.$validator.validateAll().then(() => {
                // eslint-disable-next-line
                //this.submit();
                //this.tags();
                //this.insert();
                //this.select();
                //this.insert();
                // this.submiting();
            }).catch(() => {

            });
        }
    },
    components: {
        TableMain,
        selectallocation,
        Request_quotation_lower,
        DashboardController,
        Message,
    }
}
// import TableMain from "./../../partials/TableMain/TableMain.vue"
// import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"
// import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
// import Message from "./../../partials/Message/Message.vue"
//
// export default{
//     created: function () {
//         document.title = this.title;
//     },
//     data () {
//         return {
//             nextactivity: "Leave Details / Administrators on Sick Leaves : 3.00 day(s)",
//             Title: "Administrators on Legal Leaves 2017 : 20.00 day(s) - Sprout",
//             btnlinks: {
//                 createbtnlink:"/leaves/leave_summary_create",
//                 editbtnlink:"/leaves/leave_summary_edit",
//             },
//             tableheader: [
//                 "Reference",
//                 "Destination Location Zone",
//                 "Partner",
//                 "Schduled Date",
//                 "Source Document",
//                 "Back Order Of",
//                 "Status",
//
//             ],
//             tablefooter: [
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//                 "",
//
//             ],
//             tabledata: {
//                 "row": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/sales/request_quotation_inner"
//
//                 },
//                 "row1": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/sales/request_quotation_inner"
//
//                 },
//                 "row2": {
//                     "data": [
//                         "Chic/In/0004",
//                         "Chic/Stock",
//                         "AsusTek",
//                         "01/28/2017 19:23:00",
//                         "Chicago Warehouse",
//                         "Proposition",
//                         "Available",
//
//                     ],
//                     "url": "/sales/request_quotation_inner"
//
//                 },
//
//             }
//         }
//     },
//
//
//     components: {
//         TableMain,
//         Request_quotation_lower,
//         DashboardController,
//         Message,
//     }
// }