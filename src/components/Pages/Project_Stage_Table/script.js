import DashboardController from "./../../partials/DashboardController/DashboardController.vue"
import TableMain from "./../../partials/TableMain/TableMain.vue"
import Request_quotation_lower from "./../../partials/Request_quotation_lower/Request_quotation_lower.vue"

export default{
    created: function () {
        document.title = this.title;
    },
    data () {
        return {
            nextactivity: "Stages / Done",
            btnlinks: {
                editbtnlink:"#/app/projects/project_stage_edit",
                createbtnlink:"#/app/projects/project_stage_create"
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
                    "url": "/#/app/inventory/all_transfers_table"

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
                    "url": "/#/app/inventory/all_transfers_table"

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
                    "url": "/#/app/inventory/all_transfers_table"

                },

            }
        }
    },

    components: {
        DashboardController,
        TableMain,
        Request_quotation_lower,
    }
}